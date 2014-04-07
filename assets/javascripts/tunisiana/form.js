// src/Leguide/ZeusBundle/Resources/js/zeus/form.js
(function ($, _, Zeus) {
    "use strict";

    /**
     * Represents a form.
     *
     * @constructor
     *
     * @param {string} id - the id of the element containing the form.
     * @param {object} fields - a key/value set of name/id of the form field element.
     * @param {object} options - a key/value set of options
     *
     * @return {object} form - an object containing id, el and fields properties.
     */
    Zeus.Form = function (id, fields, options) {
        if (typeof id === 'undefined' || id === null || id.length === 0) {
            throw "id is mandatory";
        }

        var defaultOptions = {
            tooltipErrorSelector: '.tooltip-error',
            tooltipInfoSelector: '.tooltip-info'
        };

        id = $.ensureFirstChar(id, '#');
        fields = fields || {};
        options = $.extend({}, defaultOptions, options);

        var form = (function () {
            var $el = $(id);
            var submitButton = $el.find('input[type=submit]');

            return {
                id: id,
                el: $el,
                fields: {},
                validator: null,
                disable: function () {
                    submitButton.attr('disabled', true);
                },
                enable: function () {
                    submitButton.removeAttr('disabled');
                },
                reset: function () {
                    if (!$.isVoid($el[0])) {
                        $el[0].reset();
                    }

                    this.clearTooltips();
                    this.enable();
                },
                clearTooltips: function () {
                    this.clearInfos();
                    this.clearErrors();
                },
                clearInfos: function () {
                    $el.find(options.tooltipInfoSelector).remove();
                },
                hasInfos: function () {
                    var infos = $el.find(options.tooltipInfoSelector);

                    return infos.length > 0;
                },
                clearErrors: function () {
                    $el.find(options.tooltipErrorSelector).remove();
                    $el.find('.error').removeClass('error');
                    $el.removeClass('error');
                },
                clearError: function ($field) {
                    if ($.isVoid($field) || !_.isObject($field)) {
                        return false;
                    }

                    var $containerEl = $field.closest('.form-input, .form-textarea, .form-checkbox, .form-radiobutton');

                    $containerEl.find(options.tooltipErrorSelector).remove();
                    $containerEl.find('.error').removeClass('error');
                    $containerEl.removeClass('error');
                },
                hasErrors: function () {
                    var errors = $el.find(options.tooltipErrorSelector);

                    return errors.length > 0;
                },
                defaultErrorCallback: function (data) {
                    this.enable();
                    this.clearErrors();

                    // in case data is passed from an $.ajax error callback
                    if (_.has(data || {}, 'responseJSON')) {
                        data = data.responseJSON;
                    }

                    var message = data.message || Zeus.Translator.get('global.form.error_submit');
                    var i, len;

                    data = data || {};

                    // Detect if the error messages are in the very clever format retuned by the API.
                    // If that's the case, enjoy some doing some custom parsing.
                    if ($.isArray(data.errors)) {
                        var errors = data.errors;

                        data.errors = {};

                        // loop on all the error messages
                        for (i = 0, len = errors.length; i < len; i += 1) {
                            var errorString = errors[i];
                            var errorParts = errorString.split('.');

                            // if at least two parts can't be found in the error string (the first being equal to "error")
                            // that's not an error, so continue with the next one
                            if (!_.has(errorParts, 1) || !_.has(errorParts, 0) || errorParts[0] !== 'error') {
                                continue;
                            }

                            // if the name of the field can be found amongst the form fields, add the error,
                            // otherwise just set the error on the first field of the form.
                            var fieldName = _.has(this.fields, errorParts[1]) ? errorParts[1] : _.first(_.keys(this.fields));

                            data.errors[this.fields[fieldName].attr('name')] = Zeus.Translator.get(errorString);
                        }
                    }

                    // If no errors structure is passed, set the global error message to all fields
                    if (_.isString(data.errors) || $.isVoid(data.errors) || _.isEmpty(data.errors)) {
                        // Setup the errors structures to be compatible with jquery validation ones so that the
                        // error display callback is able to display errors.
                        var keys = _.keys(this.fields);

                        data.errors = {};

                        for (i = 0, len = keys.length; i < len; i += 1) {
                            data.errors[this.fields[keys[i]].attr('name')] = message;
                        }
                    }

                    // recaptcha field is special so we have to add a dedicated condition just for it
                    // TODO: this should be part of signup form only
                    if (_.has(data.errors, 'user[captcha]')) {
                        data.errors.recaptcha_response_field = Zeus.Translator.get('global.form.wrong_captcha');
                        delete data.errors['user[captcha]'];
                        Recaptcha.reload();
                    }

                    // finally if there are some errors to display, display them
                    if (!$.isVoid(data.errors)) {
                        this.validator.showErrors(data.errors);

                        return;
                    }

                    // As very last resort, just drop an alert to the user
                    Zeus.alert(Zeus.Translator.get(message));
                },
                getValidator: function (rules, validatorOptions, originalValidatorOptions) {
                    var form = this;

                    // Jquery validation bug workaround
                    $el.removeAttr("novalidate");

                    var defaultValidatorOptions = {
                        stopAfterFirstError: false,
                        errorClassElement: 'form',  // either 'input' or 'form'
                        smallTooltips: true,
                        tooltipClasses: '',
                        scrollToError: false
                    };

                    validatorOptions = $.extend({}, defaultValidatorOptions, validatorOptions);

                    var defaultOriginalValidatorOptions = {
                        ignore: null,
                        rules: rules,
                        showErrors: function (errorMap, errorList) {
                            for (var i = 0, len = errorList.length; i < len; i += 1) {
                                var $field = $(errorList[i].element);

                                form.clearError($field);

                                if (validatorOptions.errorClassElement === 'input') {
                                    $field.addClass('error');
                                } else {
                                    $field.closest('form').addClass('error');
                                }

                                if (validatorOptions.smallTooltips && $field.parent().hasClass('form-input')) {
                                    validatorOptions.tooltipClasses += ' small';
                                }

                                var tooltip = new Zeus.Form.Tooltip($field, {
                                    prevEl: $field.closest('.form-input, .form-input-wrapper, .form-textarea, .form-checkbox, .form-radiobutton').children().last(),
                                    contentTpl: errorList[i].message,
                                    type: 'error',
                                    classes: validatorOptions.tooltipClasses
                                });

                                tooltip.show();

                                if (validatorOptions.stopAfterFirstError) {
                                    break;
                                }
                            }

                            // ugly hack 2.0
                            if (validatorOptions.scrollToError && errorList.length > 0) {
                                setTimeout(function () {
                                    $.scrollTo($('.tooltip-error:visible:first'), -Zeus.Config.headerHeight);
                                }, 100);
                            }
                        }
                    };

                    originalValidatorOptions = $.extend({}, defaultOriginalValidatorOptions, originalValidatorOptions);

                    var validator = $el.validate(originalValidatorOptions);

                    // patch the dumb validator
                    $el
                        .on('blur', 'input, textarea, select', function (e) {
                            // submit and reset must be ignored because validation plugin doesn't handle them properly.
                            if (e.target.type === 'submit' || e.target.type === 'file' || e.target.type === 'reset') {
                                return true;
                            }

                            if (validator.element($.ensureFirstChar(e.target.id, '#'))) {
                                form.clearError($(e.target));
                            }
                        })
                        .on('click', 'input[type="checkbox"], input[type="radio"]', function (e) {
                            if (validator.element($.ensureFirstChar(e.target.id, '#'))) {
                                form.clearError($(e.target));
                            }
                        });

                    this.validator = validator;

                    return validator;
                },
                Rules: {}
            };
        }());

        for (var i in fields) {
            if (fields.hasOwnProperty(i)) {
                form.fields[i] = $($.ensureFirstChar(fields[i], '#'));

                if (form.fields[i][0] === undefined) {
                    Zeus.Log.warn("Field with id '" + fields[i] + "' was not found");
                }
            }
        }

        form.el.on('submit', form.disable);

        return form;
    };
}(jQuery, _, Zeus));

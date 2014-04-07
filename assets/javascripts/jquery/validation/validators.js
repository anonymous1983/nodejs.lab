// src/Leguide/ZeusBundle/Resources/js/jquery-validation/validators.js

// this file implements custom validators for the jquery-validation library.
;(function ($, Translator) {
    "use strict";

    // if no validator is defined, just skip it all.
    if (typeof $.validator === 'undefined') {
        return;
    }

    // Check if the given password has at least one lowercase char, one uppercase char and one digit.
    $.validator.addMethod("password", function (value, element, params) {
        if (value.length === 0){
            return true;
        }

        if (value.search(/\d/) === -1) {
            return false;
        }

        if (value.search(/[a-z]/) === -1) {
            return false;
        }

        if (value.search(/[A-Z]/) === -1) {
            return false;
        }

        return true;
    }, $.validator.format(Translator.get('error.user.password.format')));

    // Check if the given password confirmation is equals to the password field.
    // If no data-password attribute or no element corresponding to that id are found then skip this test.
    $.validator.addMethod("password_confirmation", function (value, element, params) {
        var passwordFieldId = element.getAttribute('data-password');

        if (!passwordFieldId) {
            return true;
        }

        var passwordField = $('#' + passwordFieldId);

        if (passwordField.length === 0) {
            return true;
        }

        return value === passwordField.val();
    }, $.validator.format(Translator.get('user.password.confirmation')));
}(jQuery, window.Translator));

(function ($) {
    "use strict";

    $.extend({
        /**
         * smooth page scrolling
         *
         * @param {mixed} DomElement or string containing anchor name of the anchor
         *
         * @return null
         */
        scrollTo : function (obj, offset) {
            var $el = null;

            if ($.type(obj) === 'string') {
                // Make sure to trim the hash at the beginning of the string
                if ('#' === obj.charAt(0)) {
                    obj = obj.slice(1);
                }

                $el = $("a[name='" + obj + "']");
            }

            if ($.type(obj) === 'object') {
                $el = $(obj);
            }

            if ($.isVoid($el) || $.isVoid($el.offset())) {
                return;
            }

            if ($.isVoid(offset)) {
                offset = 0;
            }

            $('html,body').animate({ scrollTop: $el.offset().top + offset }, 'slow');
        },

        /**
         * Check if the given object is undefined or null.
         *
         * @param  {Object} obj
         *
         * @return {Boolean}
         */
        isVoid : function (obj) {
            return typeof obj === 'undefined' || obj === null;
        },

        /**
         * Check if the given string is empty.
         *
         * returns true if given obj 0-length, undefined or null.
         *
         * @param  {Object} obj
         *
         * @return {Boolean}
         */
        isEmptyString : function (obj) {
            return $.isVoid(obj) || obj.length === 0;
        },

        /**
         * Check if the given object is an integer.
         *
         * @return {Boolean}
         */
        isInt : function (arg) {
            return (typeof arg === "number") && Math.floor(arg) === arg;
        },

        /**
         * Check if the given object is a positive integer.
         *
         * @return {Boolean}
         */
        isPositiveInt : function (arg) {
            return $.isInt(arg) && arg >= 0;
        },

        /**
         * Create a hierarchy of nested objects to simulate a namespace.
         *
         * Beside helping to avoid to pollute the global namespace, this function also ensure the
         * wanted tree of objects exists, otherwise it creates it.
         *
         * @param {String} namespace - a string describing the namespace, such as: Foo.Bar.Baz
         */
        ns : function (namespace) {
            var win = window;

            namespace = namespace.split('.');

            for (var i = 0, len = namespace.length; i < len; i += 1) {
                if (undefined === win[namespace[i]]) {
                    win[namespace[i]] = {};
                }
                win = win[namespace[i]];
            }
        },

        /**
         * Makes sure the first char of the passed string is the specified one.
         *
         * Mostly useful when specifying selector to pass to jQuery.
         *
         * @param  {String} str
         * @param  {String} ch
         *
         * @return {String}
         */
        ensureFirstChar : function (str, ch) {
            str = $.trim(str);

            if (ch !== str.charAt(0)) {
                str = ch.concat(str);
            }

            return str;
        },

        /**
         * Uppercases the first character of a string.
         *
         * Returns the same string passed as argument making sure the first char is uppercase.
         *
         * @param  {String} str
         *
         * @return {String}
         */
        ucFirst : function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Transforms a string from dashed to lower camel cased.
         *
         * @param  {String} str
         *
         * @return {String}
         */
        toLowerCamelCase : function (str) {
            return str.replace(/(\-[a-z])/g, function ($1) {
                return $1.toUpperCase().replace('-', '');
            });
        },

        /**
         * Transforms a string from dashed to lower camel cased.
         *
         * @param  {String} str
         *
         * @return {String}
         */
        toUpperCamelCase : function (str) {
            return $.ucFirst(
                str.replace(/(\-[a-z])/g, function ($1) {
                    return $1.toUpperCase().replace('-', '');
                })
            );
        },

        /**
         * Transforms a string from  camel cased to dashed.
         *
         * @param  {String} str
         *
         * @return {String}
         */
        toDash : function (str) {
            return str.replace(/([A-Z])/g, function ($1) {
                return "-" + $1.toLowerCase();
            });
        },

        /**
         * Transforms a string from camel cased to underscored.
         *
         * @param  {String} str
         *
         * @return {String}
         */
        toUnderscore : function (str) {
            return str.replace(/([A-Z])/g, function ($1) {
                return "_" + $1.toLowerCase();
            });
        },

        /**
         * Fills an array with values.
         *
         * @param  {Integer} start
         * @param  {Integer} count
         * @param  {Mixed}   value
         *
         * @return {Array}
         */
        fill : function (start, count, value) {
            var result = [];

            for (var i = start; i < count; i += 1) {
                result[i] = value;
            }

            return result;
        },

        /**
         * Swaps two elements' visibility.
         *
         * @param  {Object} firstElement   jQuery or DOMElement
         * @param  {Object} secondElement  jQuery or DOMElement
         * @param  {Boolean} showFirst     force the first (true) or the second element (false) to be visible
         *                                 if undefined or null, will just swap the visibility
         *
         * @return {Boolean} whether the first element was made visible.
         */
        swapVisibility : function (firstElement, secondElement, showFirst) {
            var $first = $(firstElement);
            var $second = $(secondElement);

            if ($.isVoid(showFirst)) {
                showFirst = $first.is(':visible');
            }

            if (showFirst) {
                $first.show();
                $second.hide();

                return true;
            }

            $first.hide();
            $second.show();

            return false;
        },

        /**
         * Reloads an image.
         *
         * Adds a timestamp to image src to force the browser to reload it.
         * Requires purl.js.
         *
         * @param  {Object} jQuery or DOMElement <img> element
         *
         * @return {Boolean} whether replacement is successful or not
         */
        reloadImg : function (el) {
            var $el = $(el);

            if ('IMG' !== $el.prop('tagName')) {
                return false;
            }

            if (typeof $.url === 'undefined') {
                return false;
            }

            var url = $.url($el.attr('src'));
            var src = url.attr('protocol') + '://' + url.attr('host') + url.attr('path') + '?' + new Date().getTime();

            $el.attr('src', src);

            return true;
        }
    });
}(jQuery));

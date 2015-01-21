;(function ($) {
    "use strict";

    $.extend({
        jScrollPaneTextArea : {
            update : function($textarea, $textareaClone, settings) {
                if ($.isVoid($textarea)) {
                    return false;
                }

                if ($.isVoid($textareaClone)) {
                    return false;
                }

                var copyAttributes = ['font-family','font-size','font-weight','letter-spacing','word-spacing','line-height','width', 'padding', 'margin'];

                for (var i = 0, len = copyAttributes.length; i < len; i++) {
                    $textareaClone.css(copyAttributes[i], $textarea.css(copyAttributes[i]));
                }

                $textareaClone.html('&nbsp;');
                var heightPerRow = parseInt($textarea.css('line-height'), 10);

                $textareaClone.html($textarea.val().replace(/\n/g,'<br />'));
                var overallHeight = $textareaClone.height();

                $textarea
                    .attr('rows', Math.max(3, Math.round(overallHeight / heightPerRow)))
                    .css('height', 'auto');

                $textareaClone.html($textarea.val().replace(/\n/g,'<br />') + '&nbsp;');

                var $textareaGreatGrandParent = $textarea.parent().parent().parent();
                var textareaLines = $textarea.val().match(/\n/g);
                var jspAPI = $textareaGreatGrandParent.data('jsp');
                var scrollpaneY = jspAPI.getContentPositionY();
                var cursorPosition = $textareaClone.height() - (heightPerRow * _.isArray(textareaLines) ? textareaLines.length : 0);
                var scrollpaneHeight = $textareaGreatGrandParent.height();

                jspAPI.reinitialise(settings);

                if ((cursorPosition + heightPerRow) >= (scrollpaneY + scrollpaneHeight)) {
                    jspAPI.scrollToY(scrollpaneY + cursorPosition + heightPerRow - scrollpaneHeight);
                }

                return true;
            },

            init: function ($textarea, settings) {
                if ($textarea.data('jspta') && true === $textarea.data('jspta').initiated) {
                    return;
                }

                $textarea.data('jspta', { initiated : true });

                var $textareaClone = $('<div id="textarea-clone" style="word-wrap: break-word; display: none;" />').appendTo($textarea.parent());

                $textarea.wrap('<div />');

                $textarea.parent()
                    .css({
                        height: $textarea.outerHeight(),
                        width: $textarea.outerWidth(),
                        overflow: 'auto'
                    })
                    .jScrollPane(settings);

                $textarea
                    .bind('keydown keyup focus blur', function (e) {
                        $.jScrollPaneTextArea.update($textarea, $textareaClone, settings);
                    });

                $.jScrollPaneTextArea.update($textarea, $textareaClone, settings);
            }
        }
    });
}(jQuery));

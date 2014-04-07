(function ($, Zeus) {
    "use strict";

    Zeus.Page = (function () {
        var options = {};

        return {
            init : function (initOptions) {
                options = initOptions;
            },

            /**
             * Checking if current profile page is owned by the visitor or not
             *
             * @returns {boolean}
             */
            isOwnedByCurrentUser : function () {
                if ($.isVoid(Zeus.Session.CurrentUser)) {
                    return false;
                }

                // TODO it would be more clear to call options.userID "options.ownerId"
                return Zeus.Session.CurrentUser.id === options.userId;
            },

            /**
             * Find proper Dom element for the packery which contains the list of item containers
             *
             * @returns {jQuery}
             */
            findItemsContainerSelector : function () {
                var memberProfilePageItems = $('#profile-tab-content');
                var listPageItems = $('.page-list-page-items div.grid');

                if (memberProfilePageItems.length > 0 && this.isAllowedTabToHideUnlikedItem()) { // This is profile page
                    return memberProfilePageItems;
                }

                if (listPageItems.length > 0) { // This is wishlist page
                    return listPageItems;
                }

                return $();
            },

            /**
             * We are allowed to remove from the page the "unliked" items for Saved Items & Lists tabs only.
             * Check if we are on the right tab.
             *
             * @returns {boolean}
             */
            isAllowedTabToHideUnlikedItem : function () {
                return $('#breadcrumb-lists').hasClass('current') ||
                    $('#breadcrumb-items').hasClass('current') ||
                    $('#breadcrumb-followers').hasClass('current');
            }
        };
    }());
}(jQuery, Zeus));

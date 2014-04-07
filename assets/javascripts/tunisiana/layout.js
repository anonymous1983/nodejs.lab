(function ($, _, head, Zeus) {
    "use strict";

    $.ns('Zeus');

    var getImageUrl = function (options) {
        return _.template(options.urlTemplate, {
            width: options.width,
            height: options.height,
            backgroundColor: 'FFFFFF'
        }) + '?' + new Date().getTime();
    };

    Zeus.Layout = {
        init : function (options) {
            Zeus.Platform.init();
            Zeus.Modal.Manager.init();
            Zeus.LinkHandler.init();
            Zeus.Widgets.Topbar.init();
            Zeus.Widgets.Hover.init();
            Zeus.Widgets.Menu.init();
            Zeus.Widgets.UserProfile.init();
            Zeus.Relation.Follow.init();
            Zeus.Social.Share.init();
            Zeus.Social.Facebook.init();
            Zeus.Tracking.Listener.init();
            Zeus.Analytics.init();

            if (false === Zeus.Session.isAuthenticated) {
                Zeus.Modal.Listener.User.init();
                Zeus.Modal.Listener.Join.init();
                Zeus.Modal.Listener.Signin.init();
                Zeus.Modal.Listener.Signup.init();
            } else {
                Zeus.Modal.Listener.Like.init();
                Zeus.Modal.Listener.Wishlist.init();

                Zeus.Counter.Listener.User.init();
                Zeus.Counter.Listener.Shop.init();
                Zeus.Counter.Listener.Wishlist.init();
            }

            $('.packery')
                .packery({
                    itemSelector: '.item-container',
                    gutter: 1
                });

            if ('yes' === $.url(true).param('fire-registration')) {
                $('#auto-registration-link').trigger('click');
            }

            if ('yes' === $.url(true).param('fire-join-modal')) {
                $('#auto-join-modal-link').trigger('click');
            }

            // Add the scroll to behavior to all a link with the data scroll attribute and back to top class
            $('body')
                .on('click', 'a[data-scroll]', function (e) {
                    e.preventDefault();

                    $.scrollTo($(this).attr('href'));
                })
                .on('click', '.to-top', function (e) {
                    $.scrollTo('page-top');

                    return false;
                });

            $('.scroll-pane').jScrollPane({ showArrows : true });
        },
        // This function should probably live in a User object
        reloadUserProfilePictures : function (options) {
            var defaultOptions = {
                pictureSelector: '.header-menu .avatar img'
            };

            options = $.extend({}, defaultOptions, options);

            this.loadUserProfilePicture({
                width: "{{ width }}",
                height: "{{ height }}",
                callback: function (imageSrc) {
                    $(options.pictureSelector).each(function (i, el) {
                        var $el = $(el);

                        $el.attr('src', getImageUrl({
                            urlTemplate: imageSrc,
                            width: $el.prop('width'),
                            height: $el.prop('height')
                        }));
                    });
                }
            });
        },
        loadUserProfilePicture: function (options) {
            $.ajax({
                url: Zeus.Routing.generate('leguide_zeus_user_profile_picture_url'),
                dataType: 'json',
                method: 'GET',
                success: function (data) {
                    options.callback(getImageUrl({
                        urlTemplate: data.imageUrl,
                        width: options.width,
                        height: options.height
                    }));
                }
            });
        }
    };
}(jQuery, _, head, Zeus));

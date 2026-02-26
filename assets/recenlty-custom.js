/**
 * Module to show Recently Viewed Products
 *
 * Copyright (c) 2014 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

Shopify.Products = (function() {
    var config = {
        howManyToShow: 3,
        wrapperId: 'recently-viewed-products',
        templateId: 'recently-viewed-product-template',
        onComplete: null
    };
    var wrapper = null;
    var template = null;

    var finalize = function() {
        var items = wrapper.find('.item');
        if (items.length <= 2) $('#recently-viewed-products-list').addClass('center');
        
        wrapper.show();
        // If we have a callback.
        if (config.onComplete) {
            try {
                config.onComplete();
            } catch (error) {}
        }
    };

    var showRecentlyViewed = function() {
        // Retrieve recently viewed products from local storage
        var recentlyViewed = JSON.parse(localStorage.getItem('shopify_recently_viewed')) || [];

        // Template and element where to insert.
        template = config.templateId;
        wrapper = jQuery('#' + config.wrapperId);

        // How many products to show.
        var howManyToShow = Math.min(recentlyViewed.length, config.howManyToShow);

        // If we have any to show.
        if (howManyToShow && wrapper.length) {
            // Render each recently viewed product on the page
            for (var i = 0; i < howManyToShow; i++) {
                var productHandle = recentlyViewed[i];
                // Append product HTML to the wrapper
                wrapper.append('<div class="item">' + productHandle + '</div>');
            }
            // Finalize rendering
            finalize();
        }
    };

    return {
        showRecentlyViewed: showRecentlyViewed,
        getConfig: function() {
            return config;
        },
        clearList: function() {
            // Clear recently viewed products from local storage
            localStorage.removeItem('shopify_recently_viewed');
        }
    };
})();

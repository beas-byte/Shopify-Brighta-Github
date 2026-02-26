(function ($) {
    var halo = {
        initSpotlightSlider: function() {
            var spotlightBlock = $('[data-spotlight-slider]');
            
            spotlightBlock.each(function() {
                var self = $(this),
                    dataRows = self.data('rows'),
                    dataRowsMb = self.data('rows-mb'),
                    dataArrows = self.data('arrows'),
                    dataDots = self.data('dots'),
                    dataSwipe = self.data('swipe');
                    
                if ((dataSwipe == 'list' || dataSwipe == 'scroll') && window.innerWidth < 768) return;
                self.slick({
                    infinite: false,
                    speed: 1000, 
                    arrows: dataArrows,
                    dots: dataDots,
                    nextArrow: window.arrows.icon_next,
                    prevArrow: window.arrows.icon_prev,
                    slidesToShow: dataRows,
                    slidesToScroll: 1,
                    rtl: window.rtl_slick,
                      responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: dataRowsMb,
                                arrows: false
                            }
                        }                                          
                      ]
                });
            });
        }
    }
    halo.initSpotlightSlider();
})(jQuery);
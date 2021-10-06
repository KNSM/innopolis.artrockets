$(document).ready(function () {
    var ov = $('.ov'),
        htmlBody = $('html, body');

    var wow = new WOW({
        mobile: false,
    });

    wow.init();

    //sliders
    $(function () {
        var slider = $('.slider');

        if ($('.partners-block').length) {
            $('.partners-block > .partners__wrapper').slick({
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 5,
                arrows: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: true,
                        }
                    }
                ]
            })
        }

        slider.each(function () {
            var currentSlider = $(this),
                sliderWrapper = $(this).find('.slider__wrapper');

            var sliderItemLength = $(this).find('.slider__item').length,
                sliderControl = $(this).find('.slider-control-block'),
                slidesCount = sliderControl.find('.slides-count'),
                slidesCountAll = sliderControl.find('.slides-all-count'),
                controlLine = sliderControl.find('.line'),
                controlLineDot = controlLine.find('.dot'),
                infoIconsItem = $(this).find('.info__icons .list-big-icons .list__item'),
                customDots = $(this).find('.custom-dots');

            if (currentSlider.length && currentSlider.hasClass('slider-partners')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: true,
                                arrows: false,
                                focusOnSelect: true,
                            }
                        }
                    ]
                });
            }

            if (currentSlider.length && currentSlider.hasClass('slider-person')) {
                sliderWrapper.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    prevArrow: $(this).find('.slider-arrow-prev'),
                    nextArrow: $(this).find('.slider-arrow-next'),
                });

                var sliderControl = $(this).find('.slider-control-block'),
                    sliderInfoItem = $(this).find('.item__info');

                function sliderControlPosition() {
                    if ($(window).width() <= 1199 && $(window).width() >= 600) {
                        sliderWrapper.parent().css('padding-bottom', sliderInfoItem.outerHeight() + sliderControl.outerHeight() + 80);
                    } else {
                        sliderWrapper.parent().removeAttr('style');
                    }
                }

                sliderControlPosition();

                if (sliderItemLength < 10) {
                    slidesCountAll.html('0' + sliderItemLength);
                } else {
                    slidesCountAll.html(sliderItemLength);
                }
                if (($(this).find('.slider__item.slick-current').index() + 1) < 10) {
                    slidesCount.html('0' + ($(this).find('.slider__item.slick-current').index() + 1));
                } else {
                    slidesCount.html(($(this).find('.slider__item.slick-current').index() + 1));
                }

                sliderWrapper.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    var currentSliderIndex = ($(this).find('.slider__item.slick-current').index() + 1);

                    if (currentSliderIndex === 1) {
                        currentSliderIndex = 0;
                    }
                    if (($(this).find('.slider__item.slick-current').index() + 1) < 10) {
                        slidesCount.html('0' + ($(this).find('.slider__item.slick-current').index() + 1));
                    } else {
                        slidesCount.html(($(this).find('.slider__item.slick-current').index() + 1));
                    }
                    controlLineDot.css('left', (currentSliderIndex / sliderItemLength) * 100 + '%');
                    controlLine.css('background', 'linear-gradient(to right, #0071CE ' + (currentSliderIndex / sliderItemLength) * 100 + '%, #959393 ' + (currentSliderIndex / sliderItemLength) * 100 + '%, #959393 100%)');

                    if (dot !== undefined) {
                        dot.removeClass('-active');

                        $(dot[currentSlider.find('.slick-current').index()]).addClass('-active');
                    }
                });

                $(window).on('resize', function () {
                    sliderControlPosition();
                });
            }

            if (currentSlider.length && currentSlider.hasClass('slider-main')) {
                sliderWrapper.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                    prevArrow: $(this).find('.slider-arrow-prev'),
                    nextArrow: $(this).find('.slider-arrow-next')
                });

                var slideMaxHeight = 0,
                    slides = sliderWrapper.find('.slick-slide');

                slides.each(function () {
                    if (slideMaxHeight < $(this).outerHeight(true)) {
                        slideMaxHeight = $(this).outerHeight(true);
                    }
                });

                slides.css('min-height', slideMaxHeight + 'px');

                if (sliderItemLength < 10) {
                    slidesCountAll.html('0' + sliderItemLength);
                } else {
                    slidesCountAll.html(sliderItemLength);
                }
                if (($(this).find('.slider__item.slick-current').index() + 1) < 10) {
                    slidesCount.html('0' + ($(this).find('.slider__item.slick-current').index() + 1));
                } else {
                    slidesCount.html(($(this).find('.slider__item.slick-current').index() + 1));
                }

                sliderWrapper.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    var currentSliderIndex = ($(this).find('.slider__item.slick-current').index() + 1);

                    infoIconsItem.removeClass('-active');

                    infoIconsItem.parent().find(".list__item[data-slide-id='" + currentSliderIndex + "']").addClass('-active');

                    if (currentSliderIndex === 1) {
                        currentSliderIndex = 0;
                    }
                    if (($(this).find('.slider__item.slick-current').index() + 1) < 10) {
                        slidesCount.html('0' + ($(this).find('.slider__item.slick-current').index() + 1));
                    } else {
                        slidesCount.html(($(this).find('.slider__item.slick-current').index() + 1));
                    }
                    controlLineDot.css('left', (currentSliderIndex / sliderItemLength) * 100 + '%');
                    controlLine.css('background', 'linear-gradient(to right, #0071CE ' + (currentSliderIndex / sliderItemLength) * 100 + '%, #959393 ' + (currentSliderIndex / sliderItemLength) * 100 + '%, #959393 100%)');

                    if (dot !== undefined) {
                        dot.removeClass('-active');

                        $(dot[currentSlider.find('.slick-current').index()]).addClass('-active');
                    }

                    slideMaxHeight = 0;
                    slides.css('min-height', 'auto');

                    slides.each(function () {
                        if (slideMaxHeight < $(this).outerHeight(true)) {
                            slideMaxHeight = $(this).outerHeight(true);
                        }
                    });

                    slides.css('min-height', slideMaxHeight + 'px');
                });

                $(window).on('resize', function () {
                    slides.css('min-height', 'auto');
                    slideMaxHeight = 0;

                    slides.each(function () {
                        if (slideMaxHeight < $(this).outerHeight(true)) {
                            slideMaxHeight = $(this).outerHeight(true);
                        }
                    });

                    slides.css('min-height', slideMaxHeight + 'px');
                });

                infoIconsItem.click(function () {
                    var infoSlideId = $(this).data('slide-id');

                    infoIconsItem.removeClass('-active');

                    $(this).addClass('-active');

                    sliderWrapper.slick('slickGoTo', infoSlideId - 1);
                });
            }


            //custom-dots
            if ($(window).width() <= 480 && customDots.length) {
                for (var i = 0; i < sliderItemLength; i++) {
                    customDots.append('<li class="dot"></li>');
                }

                var dot = customDots.find('.dot');

                dot.removeClass('-active');

                $(dot[currentSlider.find('.slick-current').index()]).addClass('-active');

                dot.click(function (e) {
                    e.preventDefault();
                    var dotNumber = $(this).index();
                    sliderWrapper.slick('slickGoTo', dotNumber);
                });
            }
        });
    });

    //decisions-block
    $(function () {
        var block = $('.decisions-block');

        if (block.length) {
            block.each(function () {
                var curBlock = $(this),
                    menu = $(this).children('.decisions__menu'),
                    menuLink = menu.find('.list__item-link'),
                    contentWrapper = $(this).children('.decisions__content-wrapper');

                menuLink.on('click', function () {
                    var menuLinkId = $(this).attr('data-id'),
                        curContentItem = contentWrapper.find('.decisions__content[data-content="' + menuLinkId + '"]');
                    menu.find('.list__item.-active').removeClass('-active');
                    $(this).parent().addClass('-active');
                    contentWrapper.find('.decisions__content.-active').removeClass('-active');
                    curContentItem.addClass('-active');
                });
            });
        }
    });

    //project-block
    $(function () {
        var block = $('.projects-block'),
            projectView = block.find('.projects-view-block'),
            viewItem = projectView.find('.view-item'),
            projectFilter = block.find('.projects__filter'),
            filterTitle = projectFilter.find('.filter-mobile-title'),
            filterContent = projectFilter.find('.filter-content'),
            projectMenu = block.find('.projects__menu'),
            menuTitle = projectMenu.find('.menu-mobile-title'),
            menuContent = projectMenu.find('.menu-content'),
            menuList = menuContent.find('.list'),
            menuListItem = projectMenu.find('.list .list__item'),
            menuButton = menuContent.find('.menu-mobile-button');

        viewItem.on('click', function () {
            if (!$(this).hasClass('-active') && !$(this).hasClass('-mobile')) {
                viewItem.removeClass('-active');
                $(this).addClass('-active');
                block.toggleClass('-item-single');
            } else if ($(this).hasClass('-mobile')) {
                if ($(this).hasClass('-opened')) {
                    $(this).parents('.main-wrapper').find('.aside').removeClass('-active');
                    $(this).removeClass('-opened');
                    htmlBody.css('overflow-y', 'auto');
                } else {
                    $(this).parents('.main-wrapper').find('.aside').addClass('-active');
                    $(this).addClass('-opened');
                    htmlBody.css('overflow-y', 'hidden');
                }
            }
        });

        function mobileFilter() {
            if ($(window).width() <= 480) {
                filterTitle.click(function () {
                    if ($(this).hasClass('-active')) {
                        $(this).removeClass('-active');
                        filterContent.slideUp();
                    } else {
                        $(this).addClass('-active');
                        filterContent.slideDown();
                    }
                });
            } else {
                if (filterTitle.hasClass('-active')) {
                    filterTitle.removeClass('-active');
                    filterContent.slideDown();
                }
            }
        }

        function mobileMenu() {
            if ($(window).width() <= 480) {
                menuTitle.find('.text').html(menuList.find('.list__item.-active .list__item-link').html());

                menuTitle.click(function () {

                    if ($(this).hasClass('-active')) {
                        $(this).removeClass('-active');
                        menuContent.slideUp();
                    } else {
                        $(this).addClass('-active');
                        menuContent.slideDown();
                    }
                });

                menuListItem.click(function () {
                    menuListItem.removeClass('-active');

                    $(this).addClass('-active');
                });

                menuButton.click(function () {
                    menuTitle.find('.text').html(menuList.find('.list__item.-active .list__item-link').html());
                    menuTitle.removeClass('-active');
                    menuContent.slideUp();
                });
            } else {
                if (menuTitle.hasClass('-active')) {
                    menuTitle.removeClass('-active');
                    menuContent.slideDown();
                }
            }
        }

        mobileMenu();

        mobileFilter();

        $(window).on('resize', function () {
            mobileMenu();
            mobileFilter();
        });
    });

    //media-block
    $(function () {
        var block = $('.media-block'),
            mediaMenu = block.find('.media__menu'),
            menuTitle = mediaMenu.find('.menu-mobile-title'),
            menuContent = mediaMenu.find('.menu-content'),
            menuList = menuContent.find('.list'),
            menuListItem = mediaMenu.find('.list .list__item'),
            menuButton = menuContent.find('.menu-mobile-button');


        function mobileMenu() {
            if ($(window).width() <= 480) {
                menuTitle.find('.text').html(menuList.find('.list__item.-active .list__item-link').html());

                menuTitle.click(function () {
                    $(this).addClass('-active');
                    menuContent.slideDown();
                });

                menuListItem.click(function () {
                    menuListItem.removeClass('-active');

                    $(this).addClass('-active');
                });

                menuButton.click(function () {
                    menuTitle.find('.text').html(menuList.find('.list__item.-active .list__item-link').html());
                    menuTitle.removeClass('-active');
                    menuContent.slideUp();
                });
            } else {
                if (menuTitle.hasClass('-active')) {
                    menuTitle.removeClass('-active');
                    menuContent.slideDown();
                }
            }
        }

        mobileMenu();

        $(window).on('resize', function () {
            mobileMenu();
        });
    });

    //header
    $(function () {
        var header = $('.header'),
            headerMenu = header.find('.header__item.item-menu'),
            headerNav = header.find('.header__item.item-nav');

        headerMenu.click(function () {
            if ($(this).hasClass('-active')) {
                $(this).removeClass('-active');
                headerNav.removeClass('-active');
                htmlBody.css('overflow-y', 'auto');
            } else {
                $(this).addClass('-active');
                headerNav.addClass('-active');
                htmlBody.css('overflow-y', 'hidden');
            }
        });
    });

    //number-block
    $(function () {

        var target_block = $(".advantages-block"); // Ищем блок
        var blockStatus = true;

        if (target_block.length) {

            $(window).scroll(function () {

                var scrollEvent = ($(window).scrollTop() > (target_block.position().top + target_block.outerHeight() - $(window).height()));

                if (scrollEvent && blockStatus) {

                    blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

                    var item = $(".advantages-block .item__value span");

                    item.each(function () {

                        var itemNum = $(this).data('count-num');

                        $(this).animate({numberValue: itemNum}, {

                            duration: 1000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                            easing: "linear",

                            step: function (val) {

                                $(this).html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                            }

                        });
                    });

                }

            });
        }

    });

    //header-nav + aside
    function autoHeight() {
        var header = $('.header'),
            headerHeight = header.outerHeight(true) - 1,
            headerItem = $('.header__item.item-nav'),
            aside = $('.aside');

        if (headerItem.length) {
            if ($(window).width() < 991) {
                headerItem.css('height', 'calc(100vh - ' + headerHeight + 'px)');
            } else {
                headerItem.removeAttr('style');
            }
        }

        if (aside.length) {
            if ($(window).width() < 768) {
                aside.css('height', 'calc(100vh - ' + headerHeight + 'px)');
            } else {
                aside.removeAttr('style');
            }
        }
    }

    autoHeight();

    $(window).on('resize', function () {
        autoHeight();
    });

});

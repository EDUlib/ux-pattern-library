define([
    'jquery',
    '/public/pldoc/js/jquery.smooth-scroll.js',
    '/public/pldoc/js/tabs.js',
    '/public/pldoc/js/size-slider.js',
    '/public/pldoc/js/color-contrast.js',
    '/public/js/select-replace.js'
    ], function($, smoothScroll, Tabs, IconSlider, ColorContrast) {

    var Ui = {

        // JS is enabled/available
        init: function() {
            Ui.setupHtml();
            Ui.smoothScrollLink();
            Ui.openNewWindow();
            Ui.navigationHighlight();
            Ui.setupPalettes();
            Ui.listenForPaletteClick();
        },

        setupHtml: function() {
            $('html').removeClass('no-js');
        },

        setupPalettes: function() {
            $('.example').each(function() {
                var rgb = $(this).css('backgroundColor');

                $(this).find('.color-meta .color-rgb').text(rgb);
                $(this).find('.color-meta .color-hex').text(Ui.rgbaToHex(rgb));
            });
        },

        // smoothscroll to target links
        smoothScrollLink: function(e) {
            $('a[href^="#"]').not('.pldoc-tab-wrapper .pldoc-link').on('click', function() {
                $.smoothScroll({
                    offset: -200,
                    easing: 'swing',
                    preventDefault: false,
                    speed: 1000,
                    scrollElement: null,
                    scrollTarget: $(this).attr('href')
                });
            });
        },

        openNewWindow: function() {
            $('a[rel="external"]').on('click', function(e) {
                e.preventDefault();
                window.open($(this).attr('href'));
            });
        },

        // smoothscroll to target links
        navigationHighlight: function() {
            $('.pldoc-nav-elements .pldoc-link').on('click', function() {
                $('.pldoc-nav-elements .pldoc-link').removeClass('is-current');
                $(this).addClass('is-current');
            });
        },

        // open external links in new windows
        newWindowLink: function(e) {
            e.preventDefault();
            window.open($(this).attr('href'));
        },

        rgbaToHex: function(rgb) {
            if (typeof(rgb) !== 'undefined') {
                var _rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),
                    hex;

                hex = (_rgb && _rgb.length === 4) ? '#' +
                    ('0' + parseInt(_rgb[1],10).toString(16)).slice(-2) +
                    ('0' + parseInt(_rgb[2],10).toString(16)).slice(-2) +
                    ('0' + parseInt(_rgb[3],10).toString(16)).slice(-2) : '';
            }

            return hex;
        },

        selectText: function(that) {
            // this selects all the text in an element
            // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
            var doc = document,
                element = that[0];

            if (doc.body.createTextRange) {
                var range = doc.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                var selection = window.getSelection();
                var range = doc.createRange();
                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        },

        listenForPaletteClick: function() {
            $('.is-copyable').on('click', function() {
                Ui.selectText($(this));
            });
        }
    };

    Ui.init();
});
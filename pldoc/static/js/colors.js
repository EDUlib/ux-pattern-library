define([
    'jquery'
], function($) {
    'use strict';

    var $pane = $('#colors-preview .info-pane'),
        $title = $($pane).find('.color-info-title'),
        $desc = $($pane).find('.color-description'),
        $back = $($pane).find('.color-combinations.background'),
        $ref = $($pane).find('.color-reference'),
        $rgb = $($pane).find('.color-rgb'),
        $hex = $($pane).find('.color-hex');

    var $button;

    var colors;

    var ColorHandler = {

        init: function() {
            ColorHandler.setupJSONColors();
            ColorHandler.listenForClick();
            ColorHandler.listenForKeypress();
            ColorHandler.listenForClose();
        },

        setupJSONColors: function() {
            $.ajax({
                async: false,
                url: '/public/js/colors.json',
                complete: function(data) {
                    colors = data.responseJSON;
                }
            });
        },

        listenForClick: function() {
            var classes;

            $('#colors-preview').on('click', 'button.swatch', function() {
                $button = $(this);
                classes = $($button).attr('class').split(/\s+/);

                ColorHandler.showInformationWindow(classes, $button);
            });
        },

        listenForKeypress: function() {
            var key;

            $(document).on('keydown', function(e) {
                key = e.which;

                if (key === 27) {
                    if (!$pane.hasClass('is-hidden')) {
                        ColorHandler.clearValues();
                        ColorHandler.hideInformationWindow();
                    }
                }
            });
        },

        listenForClose: function() {
            $('#colors-preview .info-pane').on('click', '.close-button', function() {
                ColorHandler.clearValues();
                ColorHandler.hideInformationWindow();
            });
        },

        showInformationWindow: function(classes, button) {
            var info = false,
                back = [],
                backHtml = '';

            $(colors).each(function(i) {
                if (colors[i].color === classes[1]) {
                    info = colors[i][classes[2]];
                }
            });

            if (info) {
                $title.text(info[0].title);
                $desc.text(info[0].description);
                $ref.text('palette(' + classes[1] + ', ' + classes[2] + ')');

                $(info[0].recs[0].back).each(function(i) {
                    back.push(info[0].recs[0].back[i]);
                });

                $('#colors-preview .info-pane').removeClass('is-hidden').focus();
            }

            if (back.length > 0) {
                $(back).each(function(i) {
                    backHtml += '<li>' + back[i] + '</li>';
                });

                $back.html(backHtml);
            }

            $hex.text(ColorHandler.rgbaToHex($(button).css('backgroundColor')));
            $rgb.text($(button).css('backgroundColor'));
        },

        hideInformationWindow: function() {
            $pane.addClass('is-hidden');
            $button.focus();
        },

        clearValues: function() {
            $title.text('');
            $desc.text('');
            $back.html('');
        },

        rgbaToHex: function(rgba) {
            var rgbaValue = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),
                hex;

            hex = (rgbaValue && rgbaValue.length === 4) ? '#' +
                ('0' + parseInt(rgbaValue[1], 10).toString(16)).slice(-2) +
                ('0' + parseInt(rgbaValue[2], 10).toString(16)).slice(-2) +
                ('0' + parseInt(rgbaValue[3], 10).toString(16)).slice(-2) : '';

            hex = hex.replace('#', '');

            return hex;
        }
    };

    ColorHandler.init();
});

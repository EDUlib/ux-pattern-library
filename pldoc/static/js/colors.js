define(['jquery'], function($) {
    'use strict';

    var $pane = $('#colors-preview .info-pane'),
        $title = $($pane).children('.color-info-title'),
        $desc = $($pane).find('.color-description'),
        $use = $($pane).find('.color-combinations');

    var $button;

    var colors;

    var ColorHandler = {

        init: function() {
            ColorHandler.setupJSONColors();
            ColorHandler.listenForClick();
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

                ColorHandler.showInformationWindow(classes);
            });
        },

        listenForClose: function() {
            var pane;

            $('#colors-preview .info-pane').on('click', '.close-button', function() {
                pane = $(this).parent();

                ColorHandler.clearValues();
                ColorHandler.hideInformationWindow(pane);
            });
        },

        showInformationWindow: function(classes) {
            var info = false,
                fore, back;

            $(colors).each(function(i) {
                if (colors[i].color === classes[1]) {
                    info = colors[i][classes[2]];
                }
            });

            if (info) {
                $title.text(info[0].title);
                $desc.text(info[0].description);

                $(info[0].recs[0].fore[0]).each(function(i) {
                    fore.push(info[0].recs[0].fore[0][i]);
                });

                $(info[0].recs[0].back[0]).each(function(i) {
                    back.push(info[0].recs[0].back[0][i]);
                });

                $use.text('Best used with <strong>' + info[0].recs[0].fore[0] + '</strong> on <strong>' + info[0].recs[0].back[0] + '</strong>.');

                $('#colors-preview .info-pane').removeClass('is-hidden').focus();
            }
        },

        hideInformationWindow: function(pane) {
            $(pane).addClass('is-hidden');
            $button.focus();
        },

        clearValues: function() {
            $title.text('');
            $desc.text('');
            $use.html('');
        }
    };

    ColorHandler.init();
});

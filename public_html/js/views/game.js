define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
    tmpl
){
    var gameView = Backbone.View.extend({

        template: tmpl,
        initialize: function () {
            $('#page').html(tmpl());
            // $('#game').hide();
        },
        render: function () {
            $('#page').html(tmpl());
        },
        show: function () {
            $('#page').html(tmpl());
            // $('#game').show();
        },
        hide: function () {
            $('#page').html('');
            //$('#game').hide();
        }

    });
    
    $(document).on('mousemove', '#game-field', function (event) {
        $('#space-craft')
            .css('left', (event.pageX - 75) + 'px')
            .css('top', (event.pageY - 75) + 'px');
    });
    return new gameView();
});

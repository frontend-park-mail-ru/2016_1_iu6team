define([
	'backbone',
	'models/score'
], function(
	Backbone,
	playerModel
){

    var PlayerScoreCollection = Backbone.Collection.extend({
    	model: playerModel,
        
    	comparator: function(player) {
            return -player.get('score');    // Минус!
        }
    });

    function randomScore() {
        return Math.floor(Math.random() * 101) - 50;
    };

    var players = new PlayerScoreCollection([
    	{name: 'Alex', score: randomScore()},
    	{name: 'Yura', score: randomScore()},
    	{name: 'Dmitriy', score: randomScore()},
    	{name: 'Karina', score: randomScore()},
    	{name: 'Nastya', score: randomScore()},
    	{name: 'Judjin', score: randomScore()},
    	{name: 'Maxim', score: randomScore()},
    	{name: 'Anthony', score: randomScore()},
    	{name: 'Victor', score: randomScore()}
    ]);

    return players;
});
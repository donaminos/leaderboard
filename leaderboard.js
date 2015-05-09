PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  
  Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find();
    },
    'otherHelperFunction': function(){
        return "Some other function"
    },
    'selectedClass': function(){
    	var playerId = this._id;
	    var selectedPlayer = Session.get('selectedPlayer');
	    if(playerId == selectedPlayer){
	        return "selected"
	    }
	} 
  });

  Template.leaderboard.events({
    // events go here
     'click .player': function(){
        // code goes here
       	var playerId = this._id;
    	Session.set('selectedPlayer', playerId);
      }
  });

}

if(Meteor.isServer){
    console.log("Hello server");
}
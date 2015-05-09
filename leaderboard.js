PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  
  Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find();
    },
    'otherHelperFunction': function(){
        return "Some other function"
    }
  });

  Template.leaderboard.events({
    // events go here
     'click .player': function(){
        // code goes here
        console.log("You clicked player element");
    }
  });

}

if(Meteor.isServer){
    console.log("Hello server");
}
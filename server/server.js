
   // console.log(PlayersList.find().fetch());
  Meteor.publish('thePlayers', function(){
     var currentUserId = this.userId;
    return PlayersList.find({createdBy: currentUserId});
  });

  Meteor.methods({
    'insertPlayerData': function(playerNameVar){
        var currentUserId = Meteor.userId();
        PlayersList.insert({
            name: playerNameVar,
            score: 0,
            createdBy: currentUserId
        });
    },
    'removePlayer': function(selectedPlayer){
       PlayersList.remove(selectedPlayer);
    },
    'modifyPlayerScore': function(selectedPlayer, scoreValue){
      PlayersList.update(selectedPlayer,{$inc: {score: scoreValue}});
    },
    'decrement':function(selectedPlayer){
      PlayersList.update(selectedPlayer, {$inc: {score: -5} });
    },
    'increment':function(selectedPlayer){
      PlayersList.update(selectedPlayer, {$inc: {score: 5} });
    },
    'sendLogMessage': function(){
        console.log("Hello world");
    }
  });
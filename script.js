var addCandidate = function(candidateName,partyColor) {
  var candidate = {
    name: candidateName,
    electionResults: null,
    totalVotes: 0,
    color: partyColor
    };

  return candidate;
};

var nationalWinner = "";

var candidate1 = addCandidate("Joe Schmoe",[132, 17, 11]);
var candidate2 = addCandidate("Bear Grylls",[245, 141, 136]);

candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

candidate2.electionResults = [4,7,12,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

getVoteTally = function(candidate)
{
  for (var i=0; i < candidate.electionResults.length; i++)
  {
    votes = candidate.electionResults[i];
    candidate.totalVotes = candidate.totalVotes + votes;
  }
  console.log(candidate.name + " has " + candidate.totalVotes + " votes");
};

getVoteTally(candidate1);
getVoteTally(candidate2);

announceNationalWinner = function() {
  console.log("And the winner is... " + nationalWinner.name + " with a total of " + nationalWinner.totalVotes + " votes.");
};

announceStateWinner = function() {
  console.log("And the winner of " + state.name + " is " + stateWinner + " with a total of " + winner.totalVotes + " votes.");
};

var stateResultsTable = document.getElementById('stateResults');

var header = stateResultsTable.children[0].children[0];

var stateName = header.children[0];

var abbreviation = header.children[1];

var body = stateResultsTable.children[1];

var row1 = body.children[0];
var row2 = body.children[1];
var row3 = body.children[2];

var candidate1Name = row1.children[0];
var candidate1Votes= row1.children[1];

var candidate2Name = row2.children[0];
var candidate2Votes = row2.children[1];

var winnerName = row3.children[1];

var setStateResults = function(state){

    if (candidate1.electionResults[state] > candidate2.electionResults[state]) {

        theStates[state].winner = candidate1;

    } else if (candidate2.electionResults[state] > candidate1.electionResults[state]) {

        theStates[state].winner = candidate2;

    }
      else {
        theStates[state].winner = null;
        console.log("it's a tie!");
      };

  var stateWinner = theStates[state].winner
  if (theStates[state].winner !== null) {
    winnerName.innerText = stateWinner.name;
    theStates[state].rgbColor = stateWinner.color;
  }
  else {
    winnerName.innerText = "It's a tie!!"
    theStates[state].rgbColor = [11,32,57];
  };

  stateName.innerText = theStates[state].nameFull;
  abbreviation.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = candidate1.name;
  candidate1Votes.innerText = candidate1.electionResults[state];
  candidate2Name.innerText = candidate2.name;
  candidate2Votes.innerText = candidate2.electionResults[state];

};

getWinner = function()
{
  if (candidate1.totalVotes > candidate2.totalVotes) {
    nationalWinner = candidate1;
    announceNationalWinner();
  }
  else if (candidate2.totalVotes > candidate1.totalVotes) {
    nationalWinner = candidate2;
    announceNationalWinner();
  }
  else {
    nationalWinner = null;
    console.log("wow it's actually a tie!");
  }
};

getWinner();

var resultsTable = document.getElementById('countryResults');
var row = resultsTable.children[0].children[0];

row.children[0].innerText = candidate1.name;
row.children[1].innerText = candidate1.totalVotes;
row.children[2].innerText = candidate2.name;
row.children[3].innerText = candidate2.totalVotes;
row.children[5].innerText = nationalWinner.name;

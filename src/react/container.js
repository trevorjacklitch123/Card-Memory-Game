import React from 'react';



//Arrays with all id names for each suit
const spadesArray = ["TwoSpades", "ThreeSpades", "FourSpades", "FiveSpades", "SixSpades",
"SevenSpades", "EightSpades", "NineSpades", "TenSpades",
"JackSpades", "QueenSpades", "KingSpades", "AceSpades"];
const clubsArray = ["TwoClubs", "ThreeClubs", "FourClubs", "FiveClubs", "SixClubs",
"SevenClubs", "EightClubs", "NineClubs", "TenClubs",
"JackClubs", "QueenClubs", "KingClubs", "AceClubs"];
const diamondsArray = ["TwoDiamonds", "ThreeDiamonds", "FourDiamonds", "FiveDiamonds", "SixDiamonds",
"SevenDiamonds", "EightDiamonds", "NineDiamonds", "TenDiamonds",
"JackDiamonds", "QueenDiamonds", "KingDiamonds", "AceDiamonds"];
const heartsArray = ["TwoHearts", "ThreeHearts", "FourHearts", "FiveHearts", "SixHearts",
"SevenHearts", "EightHearts", "NineHearts", "TenHearts",
"JackHearts", "QueenHearts", "KingHearts", "AceHearts"];
//Array with all id names in order
var correctOrderArray = [];




//Durstenfeld Shuffle Algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//When the form is submitted call formSubmission
const form = document.querySelector("#SuitForm");
form.addEventListener("submit", formSubmission, false);

function formSubmission(e){
  e.preventDefault();
  form.style.display = "none";

  //First make an array with all suits selected, and then shuffle them and
  //hand them to the container component
  var suitsArray = [];
  if(document.querySelector("#spades").checked)
  {
    suitsArray = suitsArray.concat(spadesArray);
    correctOrderArray = correctOrderArray.concat(spadesArray);
  }
  if(document.querySelector("#clubs").checked)
  {
    suitsArray = suitsArray.concat(clubsArray);
    correctOrderArray = correctOrderArray.concat(clubsArray);
  }
  if(document.querySelector("#diamonds").checked)
  {
    suitsArray = suitsArray.concat(diamondsArray);
    correctOrderArray = correctOrderArray.concat(diamondsArray);
  }
  if(document.querySelector("#hearts").checked)
  {
    suitsArray = suitsArray.concat(heartsArray);
    correctOrderArray = correctOrderArray.concat(heartsArray);
  }
  shuffleArray(suitsArray);

  // Connect the react container component to the DOM
  const domNode = document.querySelector("#reactContainer");
  ReactDOM.render(<Container suits={suitsArray} />, domNode);
}

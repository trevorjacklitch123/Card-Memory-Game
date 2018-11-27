//Durstenfeld Shuffle Algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

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

export default function createInitialReduxState(suits){
    let correctOrder = [];
    let actualOrder = [];
    if(suits.includes("Spades")){
        correctOrder.concat(spadesArray);
    }
    if(suits.includes("Clubs")){
        correctOrder.concat(clubsArray);
    }
    if(suits.includes("Diamonds")){
        correctOrder.concat(diamondsArray);
    }
    if(suits.includes("Hearts")){
        correctOrder.concat(heartsArray);
    }
    actualOrder = shuffleArray(
        correctOrder.map((card) => {
            return { type: card, correct: false }
        })
    );

    const state = {
        correctOrder: correctOrder,
        actualOrder: actualOrder,
        numCorrect: 0
        };

    return state;
}
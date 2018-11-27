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

export function createCorrectOrder(suits){
    let correctOrder = [];
    if(suits.includes("Spades")){
        correctOrder = correctOrder.concat(spadesArray);
    }
    if(suits.includes("Clubs")){
        correctOrder = correctOrder.concat(clubsArray);
    }
    if(suits.includes("Diamonds")){
        correctOrder = correctOrder.concat(diamondsArray);
    }
    if(suits.includes("Hearts")){
        correctOrder = correctOrder.concat(heartsArray);
    }
    return correctOrder;
}
export function createActualOrder(suits){
    let actualOrder = [];
    if(suits.includes("Spades")){
        actualOrder = actualOrder.concat(spadesArray);
    }
    if(suits.includes("Clubs")){
        actualOrder = actualOrder.concat(clubsArray);
    }
    if(suits.includes("Diamonds")){
        actualOrder = actualOrder.concat(diamondsArray);
    }
    if(suits.includes("Hearts")){
        actualOrder = actualOrder.concat(heartsArray);
    }
    shuffleArray(actualOrder);
    actualOrder = actualOrder.map((card) => {
        return {type: card, correct: false};
    });
    return actualOrder;
}
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






class Container extends React.Component{
  constructor(props){
    super(props);

    this.state =  {
      order: props.suits,
      // Number to keep track of how many correct in order so far
      currentNumber: 0
    }

    this.incrementCurrentNumber = this.incrementCurrentNumber.bind(this);
    this.resetCurrentNumber = this.resetCurrentNumber.bind(this);
  }

  incrementCurrentNumber(){
    this.setState({
      currentNumber: this.state.currentNumber + 1
    })
  }
  resetCurrentNumber(){
    this.setState({
      currentNumber: 0
    })
  }

  render(){
    return (
      <div id="grid-container">
        {this.state.order.map(c => <Card key={c.toString()} type={c} currentNumber={this.currentNumber}
        incrementCurrentNumber={this.incrementCurrentNumber} resetCurrentNumber={this.resetCurrentNumber}/>)}
      </div>
      )
  }
}



class Card extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      clicked: true
    })
    if(correctOrderArray[currentNumber] != this.props.type) {
      setTimeout(function() {
        this.setState({clicked: false});
        this.props.resetCurrentNumber();
      }.bind(this), 1000);
    }
    else
      this.props.incrementCurrentNumber();
  }
  componentWillUpdate(){
    if(this.props.currentNumber === 0)
    {
      this.setState({
        clicked: false
      })
    }
  }

  render(){
    if(this.state.clicked)
      return (<div className="card" id={this.props.type} />)
    else
      return (<div className="card" onClick={this.handleClick} />)
  }
}











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

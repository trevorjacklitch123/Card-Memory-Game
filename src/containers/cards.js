import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { rightCardClicked, wrongCardClicked, numCorrectIncrement, numCorrectReset } from '../actions/actions';

const mapStateToProps = state => ({
    cards: state.actualOrder,
    correctOrder: state.correctOrder,
    numCorrect: state.numCorrect
});

const mapDispatchToProps = dispatch => ({
    rightCardClicked: (card) => dispatch(rightCardClicked(card)),
    wrongCardClicked: () => dispatch(wrongCardClicked()),
    numCorrectIncrement: () => dispatch(numCorrectIncrement()),
    numCorrectReset: () => dispatch(numCorrectReset()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
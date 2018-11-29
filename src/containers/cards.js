import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { rightCardClicked, wrongCardClicked, numCorrectIncrement, numCorrectReset } from '../actions/actions';

const mapStateToProps = state => ({
    cards: state.actualOrder
});

const mapDispatchToProps = dispatch => ({
    rightCardClicked: card => dispatch(rightCardClicked(card)),
    wrongCardClicked: () => wrongCardClicked(),
    numCorrectIncrement: () => numCorrectIncrement(),
    numCorrectReset: () => numCorrectReset()
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
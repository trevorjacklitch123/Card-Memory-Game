import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

const cardList = (actualOrder) => {
    
}

const mapStateToProps = state => ({
    cards: state.actualOrder
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
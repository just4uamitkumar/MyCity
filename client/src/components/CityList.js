import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class CityList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (

            <ListGroup>
                <TransitionGroup className="cityList">
                    {items.map(({ _id, name, stateName, area, population, tourPlace }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <span>{name}</span>
                                <span>{stateName}</span>
                                <span>{area}</span>
                                <span>{population}</span>
                                <span>{tourPlace}</span>

                                <Button className="remove-btn" color="danger"
                                    size="sm" onClick={this.onDeleteClick.bind(this, _id)}>&times; </Button>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>

        )
    }
}

CityList.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(CityList);
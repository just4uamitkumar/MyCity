import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
    Label, Input
} from 'reactstrap';
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    constructor() {
        super()
        this.state = {
            modal: false,
            name: '',
            stateName: '',
            area: '',
            population: '',
            tourPlace: '',
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            stateName: this.state.stateName,
            area: this.state.area,
            population: this.state.population,
            tourPlace: this.state.tourPlace
        }

        //Add City via AddItem action
        this.props.addItem(newItem)

        //Close Modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>
                    Add City
                </Button>

                <Modal isOpen={this.state.modal} togggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add City to the List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name"
                                    placeholder="Add City Name"
                                    onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="stateName">State</Label>
                                <Input type="text" name="stateName" id="stateName"
                                    placeholder="Add State Name"
                                    onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="area">Area</Label>
                                <Input type="text" name="area" id="area"
                                    placeholder="Add City Area"
                                    onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="population">Population</Label>
                                <Input type="text" name="population" id="population"
                                    placeholder="Enter Population"
                                    onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="tourPlace">Famous Place</Label>
                                <Input type="text" name="tourPlace" id="tourPlace"
                                    placeholder="Add a Famous Place"
                                    onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Button color="dark" block>Add City</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);
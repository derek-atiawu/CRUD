import React, {Component} from 'react';
import {Form, Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor() {
        super();
        this.state={
            name: "",
            email: "",
            gen: "",
            password: "",
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
        // console.log(this.state);
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: "",   
            password: "",    
        });
         console.log("form submitted", this.state);
    };
    render(){
        return(
         <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Text className="text-muted">
          We'll never share your Name with anyone else.
             </Form.Text>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
            <Form.Text className="text-muted">
          We'll never share your email with anyone else.
             </Form.Text>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGen">
            <Form.Label>Gen</Form.Label>
             <Form.Control type="integer" placeholder="Enter Gen"  name="gen" value={this.state.gen} onChange={this.handleChange} />
            <Form.Text className="text-muted">
          We'll never share your Gen with anyone else.
             </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}  />
             <Form.Text className="text-muted">
          We'll never share your Password with anyone else.
             </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>

        )
    }
}

export default AddUserForm;
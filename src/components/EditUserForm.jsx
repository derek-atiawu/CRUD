import React, {Component} from 'react';
import {Form, Button } from 'react-bootstrap';

class EditUserForm extends Component {
    constructor(props) {
        super(props); //define the props here or you have to remember to introduce/define a this prefix anytime you want to refer to a specific prop
        this.state={
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            password: props.userInfo.password,
            id: props.userInfo.id
        }
    }
      //   this.setState({
      //     name: "",  // this is empty, but to prefill it, then the userInfo was passed here as a prop so that it cal show
      //     email: "",
      //     gen: "",   
      //     password: "",    
      // });

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
        // console.log(this.state);
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editUser(this.state.id, this.state);
        this.setState({
            name: "",  
            email: "",
            gen: "",   
            password: "",
            id: ""    
        });
        this.props.closeModal();
        //  console.log("form submitted", this.state);
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

export default EditUserForm;

import React, {Component} from 'react';
import Users from './components/Users.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AddUserForm from './components/AddUserForm.jsx';
import './App.css';
//import { render } from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [
        {
          name: "Derek Atiawu",
          email: "derek@gmail.com",
          gen: 12,
          password: "12345678"
        },
        {
          name: "Maxwell Duodu",
          email: "maxwell@gmail.com",
          gen: 11,
          password: "12345678",
          id: "aor25043sef"
        },
        {
          name: "Steven Ankrah",
          email: "steve@gmail.com",
          gen: 12,
          password: "12345678",
          id: "nchkshn333##3hs"
        },
        {
          name: "Melody Ankrah",
          email: "melody1@gmail.com",
          gen: 7,
          password: "12345678",
          id: "00009jeyhd-=.cjeu"
        },
        {
          name: "Francis Palmer",
          email: "fpalmer@gmail.com",
          gen: 10,
          password: "12345678",
          id: "112-ld8jdh6gcw"
        },
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString() //maths.random generates random numbers which can be used as id, in javascript
    this.setState({
      users: [...this.state.users, user]
    })
  }

  deleteUser = (id) =>{
    let acceptedUsers = this.state.users.filter((user) => user.id !== id)  //if your id is not the same as the one to be deleted, then you are captured as the acceptedUsers. this variable keeps all the records to be deleted
    this.setState({
      users: acceptedUsers  //this is the new array that houses all the users that are not deleted also pass this method down as a prop to the users through the user
    })
  }

  editUser = (id, updatedUser)=>{
    this.setState({
      users: this.state.users.map(user => user.id === id? updatedUser : user) //ternary operator used, users in this line is telling us that what item in the state do we want to update, and its users. basically we are looking through all the users in the array and check in the id refers to what we want to update. if it is false, then keep what you already have
    })
  }

  // the addNewUser and the deleteUser are all methods which are defined in the app.js and used in their specific component
  render() {
    return (
      <> 
        <Container fluid style={{marginTop: "2rem"}} >
          <Row>
            <Col md="4">
              <h1>Register NOW!</h1>
              <AddUserForm addUser={this.addNewUser}/>
            </Col>
            <Col>
            <h1>Year 2023, Front-End Software Programmer Class Membership</h1>
              <Users usersData={this.state.users} 
              deleteUser={this.deleteUser} 
              editUser={this.editUser} /> 
            </Col>
          </Row>
        </Container>
      </>
    );
  }

}
//the method has been passed down as a prop ie this.deleteUser
//edituser passed here as a method in line 81
export default App;

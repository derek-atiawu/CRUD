import React from 'react'
import {Container, Row} from 'react-bootstrap'
import User from './User.jsx'

const Users = (props) => {
  return (
    <Container>
      <Row>
        {
            props.usersData.map((user) => {
              return(
                <User 
                userInfo={user} 
                key={user.id} 
                deleteUser={props.deleteUser} editUser={props.editUser} 
            />
              ); 

            }) //the method deleteUser is passed here has a "props" including "this" because it has already been passed as a prop in the App.js. it is passed here because the button which does the delete is found in the user
        }
      </Row>
    </Container>
  );
}

export default Users;

// props.usersData.map((user, index) => {return <User userInfo={user} key={index}  />
// earlier, index was used because we needed something to pass as the key
// the method has been passed down twice, first from the app.js component to users and secondly from the users component to user
// editUsers has been passed here to users in order to access it, because it users has access to user which is declared in app.js. this is called prop drilling
//editUser passed here as a method in line 10

import React, {useState} from 'react'
import {Button, Card, Col, Modal} from 'react-bootstrap';
import EditUserForm from './EditUserForm';

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id); //this will be passed on to all the components that has id
  }


  return (
   <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm 
          userInfo={props.userInfo} 
          editUser={props.editUser}
          closeModal={handleClose}
          /> 
        </Modal.Body>  
      </Modal>
      {/* //import edit form and render it inside the body to be used as in line 20 */}
      {/* // pass UserInfo to EditUserForm as a prop per line 22, this will allow the pre-existing information for the particular user to be edited to show*/}
      {/* //editUser passed here as a method in line 22 */}

    <Col md="4" style= {{marginBottom: "1rem"}} >
        <Card>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
        <Card.Title>{props.userInfo.name}</Card.Title>
        <Card.Text>
            <p>Email: {props.userInfo.email}</p>
            <p>Gen: {props.userInfo.gen}</p>
            <p>Password: {props.userInfo.password}</p>
        </Card.Text>
        <Card.Link href="#" onClick={handleShow}>Edit</Card.Link>
        <Card.Link href="#">
        {/* put an event listener and an event handler such that when the delete button is clicked something will happen */}
          <Button variant="danger" size="sm" onClick={handleDelete} >Delete</Button>  
        </Card.Link>
      </Card.Body>
    </Card>
    </Col>
   </> 
  );
};

// for functional components, when you are writing a method, dont use this.handleDelete but write handleDelete straight away
// any component that has state is the only component that can directly manupulate its state
// this is how editUser method was passed down, users to user, user to editUserform, 

export default User;

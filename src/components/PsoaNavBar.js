import React, { Component } from 'react'
import {firebaseImpl} from "../firebase"
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import validator from 'validator'

/** https://react-bootstrap.github.io/components/navbar/ */
export default class PsoaNavbar extends Component {

   /**
     * Handles the sign in button press.
     */
    signIn() {
      if (firebaseImpl.auth().currentUser) {
        alert('Bem vindo: ' + firebaseImpl.auth().currentUser.uid);
        //firebaseImpl.auth().signOut();
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (!validator.isEmail(email)) {
          alert('Please inform a valid e-mail');
        } else {       
          // Sign in with email and pass.
          firebaseImpl.auth()
            .signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
        }
      }
    }

  render() {
    return (
      <header className="header text-center">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#about">PSOA</Navbar.Brand>
          <Navbar.Toggle aria-controls="psoa-navbar-nav" />
          <Navbar.Collapse id="psoa-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#education">Educação</Nav.Link>
              <Nav.Link href="#experience">Experiência</Nav.Link>
            </Nav>
          <Form inline onSubmit={this.signIn.bind(this)}>
            <FormControl
                id="email"
                placeholder="Username"
                aria-label="E-mail"
                aria-describedby="basic-addon1"
              />            
            <FormControl 
              id="password"
              type="password" 
              placeholder="Senha" 
              className="mr-sm-2" />
            <Button type="submit">Entrar</Button>
          </Form>              
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
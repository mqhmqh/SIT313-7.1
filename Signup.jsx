import React from 'react'
import { Button, Form, Grid, Input, Header, Segment } from 'semantic-ui-react'
import TopMenu from './TopMenu'
import db from "./firebase"
import { addDoc, collection } from 'firebase/firestore'
import { Navigate } from 'react-router-dom';


class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      redirect: false
    };
  }

  register = async () => {
    const collectionRef = collection(db, 'users');

    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }

    await addDoc(collectionRef, payload);

    this.setState({
      redirect: true
    });

    console.log("Success");
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to='/signin'/>;
    }

    return (
      <div>
        <TopMenu/>
        <Grid textAlign='center' style={{ height: '800px' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment textAlign='center'>
                <Header size='medium' color="green">Create a DEV@Deakin Account</Header>
                <Form.Field inline required>
                  <label>First Name</label>
                  <Input fluid name="firstname" placeholder='First Name' value={this.state.name} />
                </Form.Field>
                <Form.Field inline required>
                  <label>Last Name</label>
                  <Input fluid name="lastname" placeholder='Last Name' value={this.state.name} />
                </Form.Field>
                <Form.Field inline required>
                  <label>Email</label>
                  <Input fluid name="email" placeholder='Email' value={this.state.email} />
                </Form.Field>
                <Form.Field inline required>
                  <label>Password</label>
                  <Input fluid name="password" placeholder='Password' type='password' value={this.state.password} />
                </Form.Field>
                <Button color="green" fluid onClick={this.register}>
                  Create
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}
export default Signup
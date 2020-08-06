import React,{useState,useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import "./login.css"
import {Auth} from "../apis/json-server"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Redirect} from "react-router-dom";
function LoginForm () {
 const [email,setEmail]= useState("")
 const [password,setPassword]= useState("")
 const [authAdmin,setauth]=useState(false)
 const[authMod,setMod]=useState(false)
 const users = useSelector(state => state.userExist);
 const dispatch = useDispatch();


useEffect(() => {
}, [users])
let role=users.role
 
function verification(){
  dispatch(Auth(email,password))


}

console.log(users)
 return (
    <div className="background-login">
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <div className="header-login">
      <Header as='h1'   textAlign='center'>
        <Image src="http://latelierlital.com/sites/default/files/logo_lital_0.png" /> Connectez-vous
      </Header>
      </div>
      <Form  size='large' container mobile only grid required>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email"  value={email}      onChange={e => setEmail(e.target.value) } required
  />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={e =>setPassword(e.target.value)}

          />
             {role==="Admin" ?
      <Button inverted color='brown' fluid size='large' onClick={verification}>
            Login
          </Button> && <Redirect to={`/galerie/${users.name+" "+users.lastname}`} />

          : role==="Moderateur"?<Button inverted color='brown' fluid size='large' onClick={verification} >
          Login
        </Button> && <Redirect  to={`/articlesUsers/${users.name+" "+users.lastname}`} />:<Button inverted color='brown' fluid size='large' onClick={verification}>
          Login
        </Button>
}
        </Segment>
      </Form>
    
    </Grid.Column>
  </Grid>
  </div>
 )}


export default LoginForm
 
import React, { Component } from "react";
import {getUsersFromApi,exist} from "../apis/json-server"
import { getExistUsers} from "../../../redux/actions/index"
import { Redirect } from "react-router-dom";

import "./users.css"
import { Link} from "react-router-dom";
import ClockTime from "../articles/clockTime"
import Moment from "react-moment";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Container,
  Menu,
  Table
} from "semantic-ui-react";
import Addusers from "./addusers"
import User from './user'
import UserS from "./userstatus"
import { connect } from "react-redux";

class App extends Component {
  state = {
    search:"",
    dropdownMenuStyle: {
      display: "none"
    },
   
  };
componentDidMount(){
this.props.getusers()
this.props.getexist()
// this.props.getExistUsers()
this.setState({id:this.props.match.params.id})
}
  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };
  handleChange=(e)=>{
    this.setState({search:e.target.value})
  }

  render() {
    if (this.props.admin.role==="Moderateur") {
      return <Redirect to={`/notfound/${this.props.admin._id}`} />;
    }
  const gestionnaireS=this.props.users.filter(el=>el.role==="Moderateur" && el.name.includes(this.state.search))


    return (

      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu className="a" borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
           
              <img src="http://latelierlital.com/sites/default/files/logo_lital_0.png" alt="logo-lital" />
            </Menu.Item>
            <Menu.Menu position="right">
              
              <Menu.Item  as="a"> <i class="signal icon"></i>&nbsp;<UserS nom={this.state.id} /></Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item as="a"><i class="signal icon"></i>&nbsp;<UserS nom={this.state.id}/></Menu.Item>
              
            </Menu>
          </Menu>
        </Grid>
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
            <Menu.Item   as={Link} to={"/galerie/"+this.state.id}>Galerie</Menu.Item>
              <Menu.Item active as={Link} to={"/users/"+this.state.id}>
           Gestion de modérateurs
              </Menu.Item>
              
              <Menu.Item as={Link}  to={"/articles/"+this.state.id}>Gestion d'articles</Menu.Item>
            
              <Menu.Item as={Link} to={"/historique/"+this.state.id}>Historique</Menu.Item>
              <Divider hidden />
            
              
            </Menu>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
              <div>
              <strong style={{color:"#4d7198"}}><i class="calendar alternate icon"></i> Date:</strong> &nbsp;
               <Moment format="D MMM YYYY" withTitle>
              {Date.now()}
            </Moment> 
 </div>

  <div>
 <br/><strong style={{color:"#4d7198"}}><i class="clock icon"></i> L'heure: </strong> &nbsp;<ClockTime/>
              </div>
                <Header dividing size="huge" as="h2">
                  Chercher ou ajouter des gestionnaires de stock
                </Header>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column mobile={16} tablet={16} computer={16}>
                <div className="users-layout">
            <div className="search-users">
              <div className="searchU">
            <div className="ui placeholder segment box-search ">
        <div className="ui icon header search">
          <i className="search icon"></i>
          Chercher les utilisateurs
        </div>
        <div className="field">
          <div className="ui search">
            <div className="ui icon input">
            <Input icon='users' iconPosition='left' onChange={this.handleChange} placeholder='Search users...' />

              <i className="search icon"></i>
            </div>
            {/* <div className="results"></div> */}
          </div>
        </div>
      </div>
      </div>
              <Addusers users={this.props.users.filter(el=>el.role==="Moderateur")}/>
             
              </div>
              </div>
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
                <Header dividing size="huge" as="h2">
                  La liste des utilisateurs
                </Header>
              </Grid.Row>
<Container>
  <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Nom</Table.HeaderCell>
        <Table.HeaderCell>Prénom</Table.HeaderCell>
        <Table.HeaderCell>Adresse E-mail</Table.HeaderCell>
        <Table.HeaderCell>Suppression</Table.HeaderCell>
        <Table.HeaderCell>Modification</Table.HeaderCell>

      </Table.Row>
    </Table.Header>
    {gestionnaireS.map( 
  el=> <User key={el.id} el={el} />
    )

    }
    </Table>
</Container>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
  }


const mapStateToProps=(state)=>({
users:state.users,
existeuser:state.userExist,
admin:state.admin

})
const mapDispatchToProps=(dispatch)=>({
getusers:()=>dispatch(getUsersFromApi()),
getexist:()=>dispatch(exist())
})
export default connect (mapStateToProps,mapDispatchToProps)(App);
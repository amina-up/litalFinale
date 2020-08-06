 
import React, { Component } from "react";
import {getHistoriquefromApi,deleteHistorique,deleteAllHistorique} from "../apis/json-server";
import { Link,Redirect} from "react-router-dom";
import UserS from "../users/userstatus"
import {getUsersFromApi,exist} from "../apis/json-server"

import Moment from "react-moment";
import Historique from './historiquetable'
import ClockTime from "../articles/clockTime"
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

import { connect } from "react-redux";
import SuppressionHistorique from "./confirmsuppression";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    },
  };
componentDidMount(){
  
  this.setState({id:this.props.match.params.id})
  this.props.exist()
this.props.getHistoriquefromApi()
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
  searchdate=(e)=>{
    this.setState({d:e.target.value})
console.log(this.state.d) }

searchName=(e)=>{
  this.setState({name:e.target.value})
}
  render() {
    if (this.props.admin.role==="Moderateur") {
      return <Redirect to={`/notfound/${this.props.admin._id}`} />;
    }
    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu className="a" borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              <img src="http://latelierlital.com/sites/default/files/logo_lital_0.png" alt="logo-lital" />
            </Menu.Item>
            <Menu.Menu position="right">
              
              <Menu.Item  as="a"><i class="signal icon"></i>&nbsp;<UserS nom={this.state.id} /></Menu.Item>
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
            <Menu.Item  as={Link} to={"/galerie/"+this.state.id}>Galerie</Menu.Item>

            <Menu.Item  as={Link} to={"/users/"+this.state.id }>
             Gestion de modérateurs
              </Menu.Item>
              <Menu.Item  as={Link} to={"/articles/"+this.state.id}>Gestion d'articles</Menu.Item>
              <Menu.Item active  as={Link} to={"/historique/"+this.state.id}>Historique</Menu.Item>
             
            
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
                 Statistique de mouvement
                </Header>     
               <Button
              color='orange'
      content='suppression'
      icon='trash  alternate outline'
      label={{ as: 'a', basic: true, content: this.props.tabHistorique.filter(el=>el.action==="suppression article").length }}
      labelPosition='right'
    />
              <Button
               color='teal'
      content='Ajout'
      icon='cart arrow down'
      label={{ as: 'a', basic: true, content: this.props.tabHistorique.filter(el=>el.action==="ajouter article").length }}
      labelPosition='right'
    />
              <Button
              color='yellow'
      content='Modification'
      icon='wrench'
      label={{ as: 'a', basic: true, content: this.props.tabHistorique.filter(el=>el.action==="editer article").length }}
      labelPosition='right'
    />  
   
                
               <h2>Chercher ou ajouter des gestionnaires de stock</h2>   
                
              </Grid.Row>
              <Grid.Row >
                <Grid.Column mobile={16} tablet={16} computer={16}>
                <div className="users-layout">
            <div className="search-users">
              <div className="searchU">
            <div className="ui placeholder segment box-search ">
        <div className="ui icon header search">
          <SuppressionHistorique deleteAllHistorique={deleteAllHistorique}/>
        {/* <Button onClick={()=>this.props.deleteAllHistorique()} color='black'>Supprimer toute l'historique</Button> */}

         
         
        </div>
        <div className="field">
          <div className="ui search">
            <div className="ui icon input">
            <Input icon='users' iconPosition='left' name="name" onChange={this.searchName} placeholder=' Chercher les utilisateurs..' />

              <i className="search icon"></i>
            </div>
    
     
  
            <div class="ui icon header search">
        
       
      </div>
    
            
          </div>
          
        </div>
        
      </div>
      </div>
             
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
  <div className="inputDate">
<input type="date" id="birthday" name="birthday" onChange={this.searchdate}/>
&nbsp;&nbsp;&nbsp; <Button onClick={()=>this.setState({d:""})} color='red'>Réintialiser la date</Button>

</div>
      
  <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Nom et Prénom</Table.HeaderCell>
        <Table.HeaderCell>Type de mouvement</Table.HeaderCell>
        <Table.HeaderCell>Date </Table.HeaderCell>
        <Table.HeaderCell>Heure</Table.HeaderCell>
        <Table.HeaderCell>Reference-article</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>suppression historique</Table.HeaderCell>


      </Table.Row>
    </Table.Header>
    {!this.state.d &&!this.state.name?this.props.tabHistorique.map(el=>
      <Historique deleteHistorique={this.props.deleteHistorique} el={el}/>):
this.state.d?this.props.tabHistorique.filter(el=>el.date.includes(this.state.d)).map(el=>
      <Historique deleteHistorique={this.props.deleteHistorique} el={el}/>)
      
      :this.state.name?this.props.tabHistorique.filter(el=>el.name.includes(this.state.name)).map(el=>
        <Historique deleteHistorique={this.props.deleteHistorique} el={el}/>
         ):this.props.tabHistorique.map(el=>
          <Historique deleteHistorique={this.props.deleteHistorique} el={el}/>
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
tabHistorique:state.historique,
admin:state.admin

})



export default connect (mapStateToProps,{getHistoriquefromApi,deleteHistorique,deleteAllHistorique,exist})(App);
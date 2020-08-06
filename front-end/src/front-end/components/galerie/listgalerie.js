import React, { Component } from "react";
import {getArticlesFromApi} from "../apis/json-server"
import { connect } from "react-redux";
import "./article.css"
import ClockTime from "../articles/clockTime"
import Moment from "react-moment";

import "../users/users.css"
import UserS from "../users/userstatus"


import { Link,Redirect} from "react-router-dom";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Container,
  Label,
  Menu,
  Table
} from "semantic-ui-react";
import Galerie from "./galerie";


class listeGaleries extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    },
    value:"",
    valuenom:"nom",
    valuecol:"Collection",
    valuetype:"Type",
    valuemesure:"Mesure",
    valuequantity:"Quantité",
    valuecouleur:"Couleur",
    valuephase:"Phase"
  };
handlechange=(e)=>{
  this.setState({[e.target.name]: e.target.value});
  
}

componentDidMount(){
    this.props.getarticles()
   
    this.setState({id:this.props.match.params.id})
    }
  
    
  render() {
    const  articles=this.props.articles

    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu className="a" borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              <img src="http://latelierlital.com/sites/default/files/logo_lital_0.png" alt="logo-lital" />
            </Menu.Item>
            <Menu.Menu position="right">
              
              <Menu.Item  as="a"><i class="signal icon"></i>&nbsp;<UserS nom={this.state.id}/></Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
            
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
              
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
            <Menu.Item  active as={Link} to={"/galerie/"+this.state.id}>Galerie</Menu.Item>

            <Menu.Item as={Link} to={"/users/"+this.state.id}>
             Gestion de modérateurs
              </Menu.Item>
       
              <Menu.Item  as={Link} to={'/articles/'+this.state.id}>Gestion d'articles</Menu.Item>
            
              <Menu.Item  as={Link} to={'/historique/'+this.state.id}>Historique</Menu.Item>

              <Divider hidden />
           
            
              
            </Menu>:
        
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
                La liste des articles
                </Header>
              </Grid.Row>
              <Grid.Row >
             
             

                <Grid.Column mobile={16} tablet={16} computer={16}>
             
          
          
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
          
           

              </Grid.Row>
<Container >
    <div className="articles-galerie" >
    {articles.map(el=>
        <Galerie el={el}/>
        )}
        </div>
</Container>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
    articles:state.articles,
    
    })
    const mapDispatchToProps=(dispatch)=>({
    getarticles:()=>dispatch(getArticlesFromApi())
    })
export default connect(mapStateToProps,mapDispatchToProps)(listeGaleries);


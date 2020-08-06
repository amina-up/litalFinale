
 
import React, { Component } from "react";
import {getArticlesFromApi} from "../apis/json-server"
import Article from './articles'
import { connect } from "react-redux";
import AddArticle from "./addarticles"
import Moment from "react-moment";
import StockZero from "./stockZero"

import "../users/users.css"
import "./aticles.css"
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
  Table,
  Segment,
  Checkbox
} from "semantic-ui-react";
import ClockTime from "./clockTime";


class App extends Component {
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
    valuephase:"Phase",
    display:true,
    color:"red"
  };
handlechange=(e)=>{
  this.setState({[e.target.name]: e.target.value});

}
handleClick = () =>
this.setState((prevState) => ({ active: !prevState.active,display:!this.state.display }))
  componentDidMount(){
    this.props.getarticles()
    this.setState({id:this.props.match.params.id})

    }
    handlechangeInput=(e)=>{
      this.setState({ref:e.target.value})
      console.log(this.state.ref)
    }
  handlechangeValue=(e)=>{
this.setState({value:e.target.value})

  }
 
  removeDuplicates = (myArr, prop) => {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  };
  render() {
    const  articles=this.props.articles
    const { active } = this.state
    
    return (
      <div className="App ">
        <Grid padded className="tablet computer only">
          <Menu className="a" borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              <img src="http://latelierlital.com/sites/default/files/logo_lital_0.png" alt="logo-lital" />
            </Menu.Item>
            <Menu.Menu position="right">
              
              <Menu.Item  as="a"><i class="signal icon"></i>&nbsp; <UserS nom={this.state.id} /></Menu.Item>
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
        {this.state.display ?

        <Grid padded>
        
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
            <Menu.Item as={Link} to={"/galerie/"+this.state.id}>
            Galerie           

              </Menu.Item>
            <Menu.Item as={Link} to={"/users/"+this.state.id}>
             Gestion de Modérateurs             

              </Menu.Item>
       
              <Menu.Item active as={Link} to={'/articles/'+this.state.id}>Gestion d'articles</Menu.Item>
            
              <Menu.Item  as={Link} to={'/historique/'+this.state.id}>Historique</Menu.Item>
         
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
              <div className="route"> 
              <Button toggle active={active} onClick={this.handleClick}>
        {this.state.display?"Afficher le tableau":"afficher le tableau"}
      </Button>
     

   
         
    </div>
    
              <Grid.Row>
              <Button
              color='red'
      content='Stock zero'
      icon='exclamation icon'
      label={{ as: 'a', basic: true, content:<StockZero articles={articles}/>}}
      labelPosition='right'
    /> 
                <Header dividing size="huge" as="h2">
                  Chercher ou ajouter des articles
                </Header>
              </Grid.Row>
              <Grid.Row >
             
             

                <Grid.Column mobile={16} tablet={16} computer={16}>
             
            <AddArticle  nameUser={this.state.id} articles={articles}/>
          
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
      
                <Header dividing size="huge" as="h2">
            
                </Header>
                <Input onChange={this.handlechangeInput} icon='users' iconPosition='left' placeholder='Search by reference...' />
               

                <select name="valuenom" valuenom={this.state.valuenom} className="ui search dropdown" onChange={this.handlechange} >
   <option valuenom="" >nom</option>
  {this.removeDuplicates(articles,'name').map(el=>

  <option valuenom={el.name}>{el.name}</option>
 
  )}
   </select>



 

  <select name="valuecol" className="ui search dropdown" valuecol={this.state.valuecol} onChange={this.handlechange} >
    
  <option valuecol="">Collection</option>
  {this.removeDuplicates(articles,'colection').map(el=>

<option valuecol={el.colection}   >{el.colection}</option>)

}
  </select>
  
  <select name="valuetype" className="ui search dropdown"  valuetype={this.state.valuetype} className="ui search dropdown" onChange={this.handlechange}>
  <option valuetype="">Type</option>
  {this.removeDuplicates(articles,'type').map(el=>

<option valuetype={el.type}   >{el.type}</option>

)}
  </select>
  <select name="valuemesure" className="ui search dropdown" valuemesure={this.state.valuemesure} className="ui search dropdown" onChange={this.handlechange}>
  <option valuemesure="">Mesure</option>
  {this.removeDuplicates(articles,'mesures').map(el=>

<option valuemesure={el.mesures}>{el.mesures}</option>

)}  </select>


  <select name="valuequantity" className="ui search dropdown"  valuequantity={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option valuequantity="">Quantité</option>
  {this.removeDuplicates(articles,'quantity').map(el=>

<option valuequantity={el.quantity}   >{el.quantity}</option>

)}  </select>
  <select name="valuecouleur" className="ui search dropdown"  valuecouleur={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option valuecouleur="">Couleur</option>
  {this.removeDuplicates(articles,'couleur').map(el=>

<option valuecouleur={el.couleur}   >{el.couleur}</option>

)}  </select>
  <select name="valuephase" className="ui search dropdown"  valuephase={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option valuephase="">Phase</option>
  {this.removeDuplicates(articles,'protoypeOuProduit').map(el=>

<option valuephase={el.protoypeOuProduit}   >{el.protoypeOuProduit}</option>

)}  </select>

              </Grid.Row>
              <div className="xa" >
<Container >
  <Table celled >
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Réference</Table.HeaderCell>
        <Table.HeaderCell>Nom d'article</Table.HeaderCell>
        <Table.HeaderCell>Collection</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Mesure</Table.HeaderCell>
        <Table.HeaderCell>Quantité</Table.HeaderCell>
        <Table.HeaderCell>Couleur</Table.HeaderCell>
        <Table.HeaderCell>Marque</Table.HeaderCell>
        <Table.HeaderCell>ProtoypeOuProduit</Table.HeaderCell>
        <Table.HeaderCell>Carton</Table.HeaderCell>
        <Table.HeaderCell>image</Table.HeaderCell>
        <Table.HeaderCell>Commentaire</Table.HeaderCell>
        <Table.HeaderCell>Suppression</Table.HeaderCell>
        <Table.HeaderCell>Modification</Table.HeaderCell>


      </Table.Row>
    </Table.Header>
   
    
    {this.state.ref?
     articles.filter(el=> this.state.valuenom==="nom"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref)  
     :   el.name===this.state.valuenom && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuecol==="Collection"? el=> <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.collection===this.state.valuecol && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuetype==="Type"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.type===this.state.valuetype)
     .filter(el=> this.state.valuemesure==="Mesure"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.mesure===this.state.valuemesure&& el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuequantity==="Quantité"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.quantity===this.state.valuequantity && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuecouleur==="Couleur"? <Article nameUser={this.state.id}  key={el.id} el={el} />  && el.reference.includes(this.state.ref)
     :el.couleur===this.state.valuecouleur && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuephase==="Phase"? <Article nameUser={this.state.id}  key={el.id} el={el} />  && el.reference.includes(this.state.ref)
     :el.ProtoypeOuProduit===this.state.valuephase && el.reference.includes(this.state.ref)).map( 
      el=> <Article nameUser={this.state.id}  key={el.id} el={el} />) 
      :
      articles.filter(el=> this.state.valuenom==="nom"? <Article nameUser={this.state.id}  key={el.id} el={el} />  :el.nom===this.state.valuenom).filter(el=> this.state.valuecol==="Collection"? el=> <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.collection===this.state.valuecol).filter(el=> this.state.valuetype==="Type"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.type===this.state.valuetype).filter(el=> this.state.valuemesure==="Mesure"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.mesure===this.state.valuemesure).filter(el=> this.state.valuequantity==="Quantité"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.quantity===this.state.valuequantity).filter(el=> this.state.valuecouleur==="Couleur"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.couleur===this.state.valuecouleur).filter(el=> this.state.valuephase==="Phase"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  
      :el.ProtoypeOuProduit===this.state.valuephase).map( 
        el=> <Article nameUser={this.state.id}  key={el.id} el={el} />)

     
        }
  
  
    </Table>
</Container>
</div>
            </Grid>
          </Grid.Column>
        </Grid>:
         <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
            <div className="route">  
            <div class="ui checkbox">

</div>
 
    </div>
    <Button toggle active={active} onClick={this.handleClick}>
    {this.state.display?"Afficher le tableau":"Afficher le menu"}
      </Button>

              <Grid.Row>
              <Button
              color='red'
      content='Stock zero'
      icon='exclamation icon'
      label={{ as: 'a', basic: true, content:<StockZero articles={articles}/>}}
      labelPosition='right'
    /> 
                <Header dividing size="huge" as="h2">
                  Chercher ou ajouter des articles
                </Header>
              </Grid.Row>
              <Grid.Row >
             
       

                <Grid.Column mobile={16} tablet={16} computer={16}>
             
            <AddArticle nameUser={this.state.id}articles={articles}/>
          
                </Grid.Column>
        
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
       
       
                <Header dividing size="huge" as="h2">
                
                </Header>
            
  
                <Input onChange={this.handlechangeInput} icon='users' iconPosition='left' placeholder='Search by reference...' />
               

                <select name="valuenom" valuenom={this.state.valuenom} className="ui search dropdown" onChange={this.handlechange} >
   <option valuenom="" >nom</option>
  {this.removeDuplicates(articles,'name').map(el=>

  <option valuenom={el.name}>{el.name}</option>
 
  )}
   </select>

  <select name="valuecol" className="ui search dropdown" valuecol={this.state.valuecol} onChange={this.handlechange} >
    
  <option valuecol="">Collection</option>
  {this.removeDuplicates(articles,'colection').map(el=>

<option valuecol={el.colection}>{el.colection}</option>)

}
  </select>
  <select name="valuetype" className="ui search dropdown"  valuetype={this.state.valuetype} className="ui search dropdown" onChange={this.handlechange}>
  <option valuetype="">Type</option>
  {this.removeDuplicates(articles,'type').map(el=>

<option valuetype={el.type}   >{el.type}</option>

)}
  </select>
  <select name="valuemesure" className="ui search dropdown" valuemesure={this.state.valuemesure} className="ui search dropdown" onChange={this.handlechange}>
  <option valuemesure="">Mesure</option>
  {this.removeDuplicates(articles,'mesures').map(el=>

<option valuemesure={el.mesures}   >{el.mesures}</option>

)}  </select>
  <select name="valuequantity" className="ui search dropdown"  valuequantity={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option valuequantity="">Quantité</option>
  {this.removeDuplicates(articles,'quantity').map(el=>

<option valuequantity={el.quantity}>{el.quantity}</option>

)}  </select>
  <select name="valuecouleur" className="ui search dropdown"  valuecouleur={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option valuecouleur="">Couleur</option>
  {this.removeDuplicates(articles,'couleur').map(el=>

<option valuecouleur={el.couleur}>{el.couleur}</option>

)}  </select>
  <select name="valuephase" className="ui search dropdown"  valuephase={this.state.value} className="ui search dropdown" onChange={this.handlechange}>
  <option valuephase="">Phase</option>
  {this.removeDuplicates(articles,'protoypeOuProduit').map(el=>

<option valuephase={el.protoypeOuProduit}>{el.protoypeOuProduit}</option>

)}  </select>

              </Grid.Row>
              <div className="x" >
<>
  <Table celled >
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Réference</Table.HeaderCell>
        <Table.HeaderCell>Nom d'article</Table.HeaderCell>
        <Table.HeaderCell>Collection</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Mesure</Table.HeaderCell>
        <Table.HeaderCell>Quantité</Table.HeaderCell>
        <Table.HeaderCell>Couleur</Table.HeaderCell>
        <Table.HeaderCell>Marque</Table.HeaderCell>
        <Table.HeaderCell>ProtoypeOuProduit</Table.HeaderCell>
        <Table.HeaderCell>Carton</Table.HeaderCell>
        <Table.HeaderCell>image</Table.HeaderCell>
        <Table.HeaderCell>Commentaire</Table.HeaderCell>
        <Table.HeaderCell>Suppression</Table.HeaderCell>
        <Table.HeaderCell>Modification</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
   
    
    {this.state.ref?
     articles.filter(el=> this.state.valuenom==="nom"? <Article nameUser={this.state.id} key={el.id} el={el} /> && el.reference.includes(this.state.ref)  
     :   el.nom===this.state.valuenom && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuecol==="Collection"? el=> <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.collection===this.state.valuecol && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuetype==="Type"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.type===this.state.valuetype)
     .filter(el=> this.state.valuemesure==="Mesure"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.mesure===this.state.valuemesure&& el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuequantity==="Quantité"? <Article nameUser={this.state.id}  key={el.id} el={el} /> && el.reference.includes(this.state.ref) 
     :el.quantity===this.state.valuequantity && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuecouleur==="Couleur"? <Article nameUser={this.state.id}  key={el.id} el={el} />  && el.reference.includes(this.state.ref)
     :el.couleur===this.state.valuecouleur && el.reference.includes(this.state.ref))
     .filter(el=> this.state.valuephase==="Phase"? <Article nameUser={this.state.id}  key={el.id} el={el} />  && el.reference.includes(this.state.ref)
     :el.ProtoypeOuProduit===this.state.valuephase && el.reference.includes(this.state.ref)).map( 
      el=> <Article nameUser={this.state.id} key={el.id} el={el} />) 
      :
      articles.filter(el=> this.state.valuenom==="nom"? <Article nameUser={this.state.id}  key={el.id} el={el} />  :el.nom===this.state.valuenom).filter(el=> this.state.valuecol==="Collection"? el=> <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.collection===this.state.valuecol).filter(el=> this.state.valuetype==="Type"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.type===this.state.valuetype).filter(el=> this.state.valuemesure==="Mesure"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.mesure===this.state.valuemesure).filter(el=> this.state.valuequantity==="Quantité"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.quantity===this.state.valuequantity).filter(el=> this.state.valuecouleur==="Couleur"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  :el.couleur===this.state.valuecouleur).filter(el=> this.state.valuephase==="Phase"? <Article idUser={Number(this.state.id)} key={el.id} el={el} />  
      :el.ProtoypeOuProduit===this.state.valuephase).map( 
        el=> <Article idUser={Number(this.state.id)} key={el.id} el={el} />)

     
        }
  
  
    </Table>
</>
</div>
            </Grid>
          </Grid.Column>
  }
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
    articles:state.articles,
    users:state.users
    })
    const mapDispatchToProps=(dispatch)=>({
    getarticles:()=>dispatch(getArticlesFromApi())
    })
export default connect(mapStateToProps,mapDispatchToProps)(App);




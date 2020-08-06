import React,{useState,useEffect,useRef} from 'react'
import { useDispatch,useSelector} from "react-redux";
import axios from 'axios';


import "../users/users.css"

import { Button, Header, Icon, Modal, Form  } from 'semantic-ui-react'
import {Addarticles,getUsersFromApi} from "../apis/json-server"

const ModalExampleCloseIcon = ({idUser,articles,nameUser}) => {
  const [reference,setRefrence]= useState("")
  const [nom,setNom]= useState("")
  const [type,setType]= useState("")
  const [mesure,setMesure]= useState("")
  const [collection,setCollection]= useState("")
  const [quantity,setQuantity]= useState("")
  const [couleur, setCouleur]= useState("")
  const [phase,setPhase]= useState("")
  const [carton,setCarton]= useState("")
  const [image,setImage]= useState("")
  const [marque,setMarque]= useState("")
  const [commentaire,setCommentaire]= useState("")
  const[picture,setPicture]=useState("")
  const users = useSelector(state => state.users);
  const [action]= useState("ajouter article")

  const [fields]= useState({})
  const [errors,setErrors]= useState({})


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFromApi())
  }, [])

console.log(nameUser)

  const handleInput = (e) => {
     setPicture(e.target.files[0])
  }
 const upload=(e)=>{
    const formData = new FormData()
    formData.append('articleImage', picture)
  

    axios.post("http://localhost:4000/image", formData, {withCredentials:true
    }).then(res => {
        console.log(res)
    })
}


  


  function handleValidation(){
    let formIsValid = true;
let err={}
//reference
if(!fields["ref"]  ){
  formIsValid = false;
  err["ref"] = "Ce champs ne doit pas être  vide ";
}

    //Name
    if(!fields["nom"]  ){
       formIsValid = false;
       err["nom"] = "Ce champs ne doit pas être vide ";
    }

    if( fields["nom"] !== undefined ){
       if(!fields["nom"].match(/^[a-zA-Z]+/)){
          formIsValid = false;
          err["nom"] = "Désolé, seules les lettres (az) Sont autorisés.";
       }        
    }
setErrors(err)
//collection
if(!fields["collection"]  ){
  formIsValid = false;
  err["collection"] = "ce champs ne doit pas être  vide ";
}   

setErrors(err)
    //type
    if(!fields["type"]  ){
      formIsValid = false;
      err["type"] = "ce champs ne doit pas être  vide ";
    }
   
 //mesure
 if(!fields["mesure"]  ){
  formIsValid = false;
  err["mesure"] = "ce champs ne doit pas être  vide ";
}
//quantity
if(!fields["quantity"]  ){
  formIsValid = false;
  err["quantity"] = "ce champs ne doit pas être pas vide ";
}
//couleur
if(!fields["couleur"]  ){
  formIsValid = false;
  err["couleur"] = "ce champs ne doit pas être pas vide ";
}
//marque
if(!fields["marque"]  ){
  formIsValid = false;
  err["marque"] = "ce champs ne doit pas être pas vide ";
}
//carton
if(!fields["carton"]  ){
  formIsValid = false;
  err["carton"] = "ce champs ne doit pas être pas vide ";
}
//image
if(!fields["image"]  ){
  formIsValid = false;
  err["image"] = "ce champs ne doit pas être pas vide ";
}

//commentaire



    return formIsValid
    
  }
  let name=users.filter(el=>el.id===idUser).map(el=>el.name)
  let lastname=users.filter(el=>el.id===idUser).map(el=>el.lastname)
  console.log(name)

function articlesSubmit(e){
  e.preventDefault();

  if(handleValidation()){
    dispatch(Addarticles(reference,nom,collection,type,mesure,quantity,couleur,phase,marque,carton,commentaire,picture.name,nameUser,action) )  

     alert(nom+ " a été ajouté dans votre liste des produits ");
  }



}
 const handleChange=(field, e)=>{  
  let f=fields       
  f[field] = e.target.value; 
setRefrence(f["ref"])     
  setNom(f["nom"])   
  setCollection(f["collection"]) 
  setMesure(f["mesure"])  
  setQuantity(f["quantity"])
  setType(f["type"])
  setMarque(f["marque"])
   setImage(f["image"])
  setPhase(f["phase"])
  setCouleur(f["couleur"]) 
  setCommentaire(f["comment"]) 
  setCarton(f["carton"])  
    
  
}




  return(
  <div className="ui">
    <div class="ui icon header search">
      
     {articles.length+" articles ont été ajoutés"} 
      </div>
    <br/>
  {/* <div class="ui icon header search">
      <i class="dont icon"></i> {articles.length+" articles ont été ajoutés"} </div>
     <br/> */}
  <Modal trigger={  
 <Button color='vk'>
  <i className="download icon"></i> <span> Ajouter un Article</span>
</Button>
  } closeIcon>

    <Modal.Content>
    <Form onSubmit={articlesSubmit}>
      
    <Form.Group unstackable widths={2}>
    <div className="bloc-error">
      <Form.Input className="input-add" label="Référence d'article" placeholder='Reference' type="text" 
      onChange={e =>{handleChange("ref",e)}} value={fields["ref"]}  />
      <p  style={{color: "#d93025"}}> {errors["ref"]} </p> 
      </div>
      <div className="bloc-error"> 
      <Form.Input className="input-add" label="Nom d'article" placeholder='Nom' 
      onChange={e =>{handleChange("nom",e)}} />
            <p  style={{color: "#d93025"}}> {errors["nom"]} </p> 

      </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label='Collection' placeholder='Ajouter collection'  
    onChange={e =>{handleChange("collection",e)}} value={fields["collection"]} />
            <p  style={{color: "#d93025"}}> {errors["collection"]} </p> 

      </div>
       <div className="bloc-error">
      <Form.Input className="input-add" label="Type d'article" placeholder='Ajouter le type' type="text" 
      onChange={e =>{handleChange("type",e)}} value={fields["type"]} />
            <p  style={{color: "#d93025"}}> {errors["type"]} </p> 

      </div>
    </Form.Group>
  <Form.Group widths={2}>
  <div className="bloc-error">
    <Form.Input className="input-add" label="Mesure d'article" placeholder='ajouter Mesure'
        onChange={e =>{handleChange("mesure",e)}} value={fields["mesure"]} />
             <p  style={{color: "#d93025"}}> {errors["mesure"]} </p> 

       </div>
        <div className="bloc-error">
            <Form.Input className="input-add" label='Quantité' placeholder='ajouter quantité'
        onChange={e =>{handleChange("quantity",e)}} value={fields["quantity"]} />
             <p  style={{color: "#d93025"}}> {errors["quantity"]} </p> 

       </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label="Couleur" placeholder="Couleur" type="text" 
       onChange={e =>{handleChange("couleur",e)}} value={fields["couleur"]} />
            <p  style={{color: "#d93025"}}> {errors["couleur"]} </p> 

      </div>
      <div className="bloc-error">
      <Form.Input className="input-add" label="Phase d'article" placeholder="phase d'article" type="text" 
     onChange={e =>{handleChange("phase",e)}} value={fields["phase"]} />
            <p  style={{color: "#d93025"}}> {errors["phase"]} </p> 

    </div>
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    <Form.Input className="input-add" label="Marque d'article" placeholder="marque d'article" type="text" 
     onChange={e =>{handleChange("marque",e)}} value={fields["marque"]} />
             <p  style={{color: "#d93025"}}> {errors["marque"]} </p> 
            
       </div>
       
       <div className="bloc-error">
       <Form.Input className="input-add" label="Nombre de cartons" placeholder="Nombre de cartons" type="text" 
     onChange={e =>{handleChange("carton",e)}} value={fields["carton"]} />
             <p  style={{color: "#d93025"}}> {errors["carton"]} </p> 
   </div>
      {/* <Form.Input label='Commentaire' placeholder='ajouter un commentaire' type="commentaire" 
      onChange={e => setCommentaire(e.target.value)} /> */}
      
    </Form.Group>
    <Form.Group widths={2}>
    <div className="bloc-error">
    
    <textarea  className="input-add" label='Commentaire'placeholder="Ajouter un commentaire"   onChange={e =>{handleChange("comment",e)}} rows="4" cols="50"></textarea>
    </div>
    <div className="bloc-error">
  <input type="file" name="articleImage"  className="input-add" placeholder="image"   onChange={e =>{handleChange("image",e);handleInput(e)}} value={fields["image"]} />
    <p  style={{color: "#d93025"}}> {errors["image"]} </p> 
    <button onClick={upload}  className="upbutton">                   Upload
                </button>


    </div>
    </Form.Group>
   
    <div className="btn-modal">
      <Button color='blue' type="submit" >
          <Icon name='checkmark' /> Ajouter
        </Button>
        </div>
    </Form>

    </Modal.Content>
    
   
  </Modal>
  </div>
  )
    }

export default ModalExampleCloseIcon

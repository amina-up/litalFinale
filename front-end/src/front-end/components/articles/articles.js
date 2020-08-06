import React,{useState,useEffect } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { Header,Button } from 'semantic-ui-react'
import EditeArticles from "./editearticles"
import {DeleteArticles,getUsersFromApi} from '../apis/json-server'
import {Container,Image,Table } from 'semantic-ui-react'
import "../users/users.css"
import "./aticles.css"
import VousEtesSur from './Suppression';
import VoirCommentaire from './commentaire';


function ListArticles(props){
  const [action]= useState("suppression article")
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  
  




  let name=users.filter(el=>el.id===props.idUser).map(el=>el.name).join("")
  console.log(users.filter(el=>el.id===props.idUser).map(el=>el.name))
    return(
<tr>

      <td className="items-user" > 
      {props.el.reference}
  </td> 
        <td className="items-user">
         
           {props.el.name}
           
  
  </td> 
    
  <td className="items-user" > 
  {props.el.colection}
  

  </td> 
   <td className="items-user"> 
   
{props.el.type}
  </td> 
        <td className="items-user">
  {props.el.mesures}
</td> 
        <td className="items-user">
  {props.el.quantity}
</td> 

<td className="items-user">
  {props.el.couleur}
</td> 

<td className="items-user">
  {props.el.marque}
</td> 
<td className="items-user">
  {props.el.protoypeOuProduit}
</td> 
<td className="items-user">
  {props.el.carton}
</td> 
<td className="items-user">
 <img src={"http://localhost:4000/"+props.el.articleImage} alt="logo" />
</td> 
<td className="items-user">
{props.el.commentaire?<VoirCommentaire commentaire={props.el.commentaire}/>:<i class="ban icon"></i>}
  {/* {props.el.commentaire} */}
</td> 

<td className="items-user">
  <VousEtesSur el={props.el} nameUser={props.nameUser} action={action}/>

</td> 
<td className="items-user">
  <EditeArticles nameUser={props.nameUser} article={props.el}/>
</td> 
    </tr>
  

    )
}
export default ListArticles;
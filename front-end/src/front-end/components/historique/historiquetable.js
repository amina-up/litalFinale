
import React,{useState,useEffect } from 'react'
import { Header,Button } from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import {Container,Image,Table } from 'semantic-ui-react'
import {deleteHistorique} from "../apis/json-server"



function Historique(props){
  const dispatch = useDispatch();
  const [action]= useState("")
  






    return(
<>

    <Table.Body>
      <Table.Row>
      <Table.Cell className="items-user"> 
      {props.el.nameuser}
  </Table.Cell> 
        <Table.Cell>
          <Header as='h4' image>
           {props.el.action}
            <Header.Content>
            
                          <Header.Subheader></Header.Subheader>
            </Header.Content>
          </Header>
  
  </Table.Cell> 
    
  <Table.Cell className="items-user"> 

  <Moment format="D MMM YYYY" withTitle>
   {props.el.date}
            </Moment>
  

  </Table.Cell> 
   <Table.Cell className="items-user"> 
   <Moment format="HH:mm:ss">{props.el.date}</Moment>

  </Table.Cell> 

        <Table.Cell className="items-user">
        {props.el.reference}
</Table.Cell> 

<Table.Cell className="items-user">
  <img src={"http://localhost:4000/"+props.el.articleImage}/>
</Table.Cell> 
<Table.Cell className="items-user">
<i class="trash alternate icon ui red"  style={{cursor:"pointer"}}onClick={()=>dispatch(deleteHistorique(props.el._id))}></i>

</Table.Cell> 



      </Table.Row>
    </Table.Body>
  
</>
    )
}
export default Historique;
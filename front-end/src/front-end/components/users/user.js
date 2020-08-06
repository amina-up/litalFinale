import React,{useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Header } from 'semantic-ui-react'
import {DeleteUsers} from '../apis/json-server'
import {Container,Image,Table,Button } from 'semantic-ui-react'
import Editusers from "./editusers"
import "./users.css"
function ListUsers(props){
  const dispatch = useDispatch();

    return(
<>

    <Table.Body>
      <Table.Row>
      <Table.Cell className="items-user"> 
      {props.el.name}
  </Table.Cell> 
        {/* <Table.Cell>
          <Header as='h4' image>
            <Image  rounded size='Medium' src='https://blog.valoxy.org/wp-content/uploads/2013/07/gestion-des-stocks.png' />
            <Header.Content>
            
                          <Header.Subheader>{props.el.role}</Header.Subheader>
            </Header.Content>
          </Header>
  
  </Table.Cell>  */}
    
  <Table.Cell className="items-user"> 
  {props.el.lastname}

  </Table.Cell> 
   <Table.Cell className="items-user"> 
   {props.el.email}

  </Table.Cell> 
        <Table.Cell className="items-user" >
          <Button circular icon color="red" onClick={()=>dispatch(DeleteUsers(props.el._id))}><i className="trash  alternate  icon ui  " style={{cursor:"pointer"}}></i></Button>
          
  
</Table.Cell> 
        <Table.Cell className="items-user">
       <Editusers user={props.el} />
</Table.Cell> 

      </Table.Row>
    </Table.Body>
  
</>
    )
}
export default ListUsers
import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useDispatch ,useSelector} from "react-redux";
import {DeleteArticles,getUsersFromApi} from '../apis/json-server'

function VousEtesSur(props) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch();

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button circular icon color="red"  ><i type="button" 
      className="trash  alternate outline icon"></i>  </Button> }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='cette action va etre enregistrer' />
      <Modal.Content>
        <p>
         vous etes sur pour supprimer cette article?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={()=>dispatch(DeleteArticles(props.el._id,props.el.reference,props.el.articleImage,props.action ,props.nameUser))}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


 export default VousEtesSur



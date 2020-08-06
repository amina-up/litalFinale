import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {logout} from "../apis/json-server"
import { useDispatch} from "react-redux";
function ConfirmationDeconnecter({nom}) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch();
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button color='red'>se deconnecter</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          Si vous sur de deconnecter {nom} cliquer sur oui
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Non
        </Button>
        <Button color='green' onClick={dispatch(()=>logout())}>
          <Icon name='checkmark' /> oui
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ConfirmationDeconnecter

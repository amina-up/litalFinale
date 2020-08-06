// import React from 'react'
// import { Button, Icon, Modal } from 'semantic-ui-react'
// import {getHistoriquefromApi,deleteHistorique,deleteAllHistorique} from "../apis/json-server";

// function exampleReducer(state, action,props) {
//   switch (action.type) {
//     case 'close':
//       return { open: false }
//     case 'open':
//       return { open: true, size: action.size }
//     default:
//       throw new Error('Unsupported action...')
//   }
// }

// const SuppressionHistorique = (props) => {
  
//   const [state, dispatch] = React.useReducer(exampleReducer, {
//     open: false,
//     size: undefined,
//   })
//   const { open, size } = state

//   return (
//     <>
//       <Button color="black" onClick={() => dispatch({ type: 'open', size: 'mini' })}>
//   supprimer tous l'historiques
//       </Button>
//       <Modal
//         size={size}
//         open={open}
//         onClose={() => dispatch({ type: 'close' })}
//       >
//         <Modal.Header>vous etes sur de supprimer tous l'historiques ?</Modal.Header>
       
//         <Modal.Actions>
//         <Button negative onClick={() => dispatch({ type: 'close' })}>
//         Non
//           </Button>
//           <Button positive  onClick={()=>props.deleteAllHistorique()}>
//          oui
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </>
//   )
// }

// export default SuppressionHistorique




import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useDispatch ,useSelector} from "react-redux";
import {deleteAllHistorique} from "../apis/json-server";

function VousEtesSur(props) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch();

  return (
    <Modal
      closeIcon
      open={open}
      trigger={   <Button color="black" onClick={() => dispatch({ type: 'open', size: 'mini' })}>
        supprimer tous l'historiques
           </Button>}
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
         <Button positive  onClick={()=>props.deleteAllHistorique()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


 export default VousEtesSur



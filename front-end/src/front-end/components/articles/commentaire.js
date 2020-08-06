import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const VoirCommentaire = ({commentaire}) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      <Button circular icon color="black" onClick={() => dispatch({ type: 'open', size: 'mini' })}>
      <i class="comment alternate icon"></i>
      </Button>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>voici le commentaire</Modal.Header>
        <Modal.Content>
          <h5>{commentaire}</h5>
        </Modal.Content>
        <Modal.Actions>
        
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            j'ai lu
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default VoirCommentaire
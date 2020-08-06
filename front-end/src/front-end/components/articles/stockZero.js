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

const StockZero = ({articles}) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
   
    <i onClick={() => dispatch({ type: 'open', size: 'mini' })} class="hand point right outline icon"> {articles.filter(el=>el.quantity===0).length}</i>
     
        
      

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Les articles stock zero</Modal.Header>
        <Modal.Content>
  {articles.filter(el=>el.quantity==0).map(el=><div><strong>Name:</strong>  {el.name}
</div>)}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            No
          </Button>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default StockZero
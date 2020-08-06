import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import "./article.css"

export default class MoreDetails extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    print() {
        window.print()
    }
    render() {
        return (
            <Modal
                trigger={ <Button inverted color='brown'  size='medium' onClick={this.handleOpen}>More details</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
                
            >
                <Header icon='browser' content={this.props.el.name}/>
                <div class="cards-imprint">
                    <div>
                        <Modal.Content>
                            <img src={"http://localhost:4000/"+this.props.el.articleImage} className="imagedetails"></img>
                        </Modal.Content>
                    </div>
                    <div>
                        {/* <h4><span class="ui brown header">Reference :</span> {this.props.el.reference}</h4> */}
                        <h4><span class="ui brown header">Type :</span> {this.props.el.type}</h4>
                        <h4><span class="ui brown header">Collection :</span>  {this.props.el.colection}</h4>
                        <h4><span class="ui brown header">Marque :</span> Marque : {this.props.el.marque}</h4>
                        {/* <h4><span class="ui brown header">Reference :</span> Phase de produit : {this.props.el.protoypeOuProduit}</h4> */}
                        <h4><span class="ui brown header">Mesure:</span> Mesure : {this.props.el.mesures}</h4>
                        <h4><span class="ui brown header">Couleur :</span> Couleur : {this.props.el.couleur}</h4>
                        <h4><span class="ui brown header">Localisation :</span> Localisation: {this.props.el.localisation}</h4>
                        <h4><span class="ui brown header">Reference :</span> Carton: {this.props.el.carton}</h4>
                    </div>
                </div>
                <Modal.Actions>


                    <Button color='green' onClick={() => this.print()} inverted>
                        <Icon name='checkmark' /> imprimer
          </Button>
                    <Button color='red' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> close
          </Button>
                </Modal.Actions>


            </Modal>
        )
    }
}
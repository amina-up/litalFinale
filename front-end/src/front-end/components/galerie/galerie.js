import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import "./article.css"
import MoreDteails from './moredetails'
import {Link} from "react-router-dom"
const CardExampleCard = (props) => (
  <div className="cart">
    <div class="ui inverted segment">
  <div class="ui inverted cards">
    <div class="ui link card">
  <div class="content">
<div class="header"><i><i><strong style={{color:"#d67c1c"}}> Nom: </strong></i> {props.el.name}</i></div>
    <div class="meta">
      <span class="category">Animals</span>
    </div>
    <div class="description">
   <i><strong style={{color:"#d67c1c"}}> Phase: </strong></i> {props.el.protoypeOuProduit}
    <br/>
    <i><strong style={{color:"#d67c1c"}}>Type: </strong></i> {props.el.type}
    <br />
   <i> <strong style={{color:"#d67c1c"}}>Mesure: </strong> </i>  {props.el.mesures}
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author">
    <img className="img3" src={"http://localhost:4000/"+props.el.articleImage}/>
    </div>
   <MoreDteails el={props.el}/>
  </div>
</div>
</div>
</div>

</div>

)

export default CardExampleCard
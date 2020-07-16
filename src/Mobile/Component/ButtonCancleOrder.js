import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

class ButtonCancleOrder extends Component {
    render() {
        return (
        
              <div className="col-6">
                <div className="container-CancleOrder-form-btn">
                <Button className="btn-round btn-icon" color="danger" onClick={()=> this.props.dispatch({type:'DELETE_FOOD',id:this.props.order.id})}>
                <i class="fa fa-trash" aria-hidden="true"></i>
                </Button>
            
            </div>
            </div>
          
        )
    }
}export default connect()(ButtonCancleOrder);

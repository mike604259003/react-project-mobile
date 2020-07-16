import React, { Component } from 'react'
import ButtonDeli from './ButtonDeli';
import ButtonCancle from './ButtonCancle';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import axios from 'axios';
import API from '../../Url_api';


class EditIncrement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      id: "",
      name: "",
     
    
     
    };
  }

  componentDidMount(){
    const bill = localStorage.getItem('bill_id');
    axios.post(API('checkStatusBill'),
    JSON.stringify({
      'bill_id':bill
    }))
        .then(res => {
          
          //--
          if(res.data){
          //--
          if(res.data[0].b_status == "ดำเนินการ") {
         
        }else{
          this.props.history.push('/default');
        }
  //--
      }else{
        this.props.history.push('/default');
      }
  //--
        }
        )
    const { id } = this.props.location.state;
    const { name } = this.props.location.state;
    const { amount } = this.props.location.state;
   
    
    this.setState({
      id:id,
      name:name,
      quantity:amount
    })
    
  }

  IncrementItem = () => {
    if(this.state.quantity > 9) {

    }else {
        this.setState({
            quantity: this.state.quantity + 1 
        });
    }
  }

  DecreaseItem = () => {
   
    
    if(this.state.quantity <= 1) {
     
    }else {
      this.setState({
        quantity: this.state.quantity - 1 
    });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const amount = this.state.quantity;
   
    const data = {
      
        name:this.state.name,
        amount:amount,
     
    }
    this.props.dispatch({
        type:'UPDATE',
        id:this.state.id,
        data:data
    });


    this.props.history.push('/cart');

    

}
  

  
    render() {
        return (
            <div>
        <br/><br/><br/><br/><br/>
          <form onSubmit={this.handleSubmit}>
            
              <div>
                <center><h5>{this.state.name}</h5></center>
                <br />
                <center><h6>จำนวนที่ต้องการแก้ไข</h6></center>
              </div>
                
              <center>
              <div className="form-row">
                <div className="col-1"></div>
        <FormGroup className="col-2">
              <Button className="btn-round btn-icon" color="danger" onClick={this.DecreaseItem}>
              <i class="fa fa-minus" aria-hidden="true"></i>
              </Button>
              </FormGroup>
              <FormGroup className="col-6">
              <Input  style={{textAlign:'center'}} type="number"  value={this.state.quantity} ref={(input)=>this.getAmount = input}/>
              </FormGroup>
              <FormGroup className="col-2">
              <Button className="btn-round btn-icon" color="primary" onClick={this.IncrementItem}>
              <i class="fa fa-plus" aria-hidden="true"></i>
              </Button>
              </FormGroup>
              <div className="col-1"></div>
        </div>
        
        <Link to="/selectmenu"><Button color="secondary" style={{marginRight:'50px'}}>ย้อนกลับ</Button></Link>
        <Button type="submit" color="success">ยืนยัน</Button>    
        </center>
           
            
          </form>
      
            </div>
        )
    }
}export default  connect()(EditIncrement);

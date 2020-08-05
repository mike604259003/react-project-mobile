import React, { Component } from 'react'
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

class Increment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      id: "",
      name: "",
      img: "",
     
    };
  }

  componentDidMount(){
    const bill = localStorage.getItem('bill_id');
    axios.post(API('checkStatusBill'),
    JSON.stringify({
      'bill_id':bill
    }))
        .then(res => {
          console.log(res.data[0].b_status);
          if(res.data[0] != undefined){
            if(res.data[0].b_status == "ดำเนินการ"){
              this.setState({
                bill_status:res.data[0].b_status
              });
                this.setState({
                  table_id:localStorage.getItem('table_id')
                })
            }else{
              this.props.history.push('/default');
            }
          }else{
            this.props.history.push('/default');
          }
       
        }
        )
  
    const { id } = this.props.location.state;
    const { name } = this.props.location.state;
    const { img } = this.props.location.state;
    //console.log(id+" "+name+" "+img);
    this.setState({
      id:id,
      name:name,
      img:img
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
        id:this.state.id,
        name:this.state.name,
        amount:amount,
       
    }
    this.props.dispatch({
        type:'ADD_FOOD',
        data
    });

    this.props.history.push('/cart');

    

}
  

  
    render() {
        return (
            <div>
       
          <form onSubmit={this.handleSubmit}>
            
                
                <br/>
           <center><small className="text-muted" style={{fontSize:'30px'}}>{this.state.name}</small></center>
          <blockquote className="blockquote"></blockquote>
                <br />
                <center><img className="mr-3 mr-sm-4" src={"assets/img/catagory/"+this.state.img} width="150px" height="150px"/></center>
                
                <center><h6>จำนวนที่สั่ง</h6></center>
             
             <center>
              <div className="form-row">
                <div className="col-1"></div>
        <FormGroup className="col-2">
              <Button className="btn-round btn-icon" color="danger" onClick={this.DecreaseItem}>
              <i className="fa fa-minus" aria-hidden="true"></i>
              </Button>
              </FormGroup>
              <FormGroup className="col-6">
              <Input  style={{textAlign:'center'}} type="number"  value={this.state.quantity} ref={(input)=>this.getAmount = input}/>
              </FormGroup>
              <FormGroup className="col-2">
              <Button className="btn-round btn-icon" color="primary" onClick={this.IncrementItem}>
              <i className="fa fa-plus" aria-hidden="true"></i>
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
}export default  connect()(Increment);

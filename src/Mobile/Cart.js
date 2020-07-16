import React, { Component } from 'react'
import { Link } from "react-router-dom";
import  ButtonCancleOrder from './Component/ButtonCancleOrder';
import {connect} from 'react-redux';
import axios from 'axios';
import API from '../Url_api';
import {Button} from 'reactstrap';


class Cart extends Component {

  constructor(){
    super();
    this.state ={
      count:1,
      data:[],
      table_id:0
    }
  }

  componentDidMount(){
    const bill = localStorage.getItem('bill_id');
    axios.post(API('checkStatusBill'),
    JSON.stringify({
      'bill_id':bill
    }))
        .then(res => {
          
         
          if(res.data[0].b_status == "ดำเนินการ") {
         
        }else{
          this.props.history.push('/default');
        }
 
        }
        )
    const table_id = localStorage.getItem('table_id');
    this.setState({
      table_id: table_id
    })
  }

  SubmitToApi = () => {
    const data = this.props.orders;
    
    axios.post(API('setCheckOrder'), 
    JSON.stringify({
      'table_id':this.state.table_id,
      'data':data
    }))
    .then(res => {
  
      
      if(res.data == 1){
        this.props.dispatch({
          type:'DESTROY_SESSION',
          data
      });
        this.props.history.push('/succes');
      }
    })

   
  }

    render() {
        return (
            <div>
              
                <br />
                <center><small className="text-muted" style={{fontSize:'30px'}}>เมนูที่สั่ง</small></center>
                <form onSubmit={this.SubmitToApi}>
                <table className="table">
                    
  <thead>
      
    <tr>
      <th scope="col" width="30px">ลำดับ</th>
      <th scope="col">ชื่อเมนู</th>
      <th scope="col">จำนวน</th>
      <th scope="col">แก้ไขจำนวน</th>
      <th scope="col">ลบ</th>
    </tr>
  </thead>

  <tbody>
  
  {
      this.props.orders == undefined ? "":

      this.props.orders.map((order,idx) => ( 
    <tr key={idx}>
  
      <th scope="row">{idx + 1 }</th>
      <td>{order.name}</td>

      <td>{order.amount}</td>
      <td><Link className="link" 
            to={{pathname:"/editincrement", 
                 state:{
                   id:order.id,
                   name:order.name,
                   amount:parseInt(order.amount)
                  }}} >แก้ไข
            </Link></td>
      <td><ButtonCancleOrder order={order}/></td>
    </tr>
        ))

    
      }
  </tbody>
</table>
<center>
<Link to="/menu">
<Button color="primary" className="deli5-form-btn" style={{marginRight:'50px'}}>
                กลับสู่หน้าเมนู
</Button>
</Link>


<Button color="success" type="submit" className="deli-form-btn">
                ยืนยันการสั่ง
</Button>

</center>
</form>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
  orders : state
  }
}

export default connect(mapStateToProps)(Cart);

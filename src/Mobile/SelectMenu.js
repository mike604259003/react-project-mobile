import React from 'react';
import { Link } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import axios from 'axios';
import API from '../Url_api';
import { Card, CardBody, CardTitle , CardImg} from "reactstrap";


class SelectMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        data: [],
        table_id: 1,
    
    }
 
}


componentDidMount() {
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



    axios.get(API('getAllCategory'))
      .then(res => {
       
         const data = res.data.data;
         this.setState({ data }); 
         
      })
       
      
    
     
      
  }



    render(){
        return(
            
        
          <div>
           <br/>   
          <center><small className="text-muted" style={{fontSize:'30px'}}>เลือกหมวดหมู่</small></center>
          <blockquote className="blockquote"></blockquote>
          <div className="row">
          
          {
          this.state.data.map(function(obj,i){
            return(
              
              <div className="col-6" key={i}>
              <Link className="link" to={{pathname:"/menu", state:{id:obj.c_id,name:obj.c_name}}}>
              <Card className="text-center">
                <img style={{marginLeft:'55px',marginTop:'25px',marginBottom:'15px'}} src={obj.c_icons} width = "50px" height = "50px"  alt=""/>
               
                <p className="mb-2 text-muted" style={{fontSize:"10px",textAlign:'center'}}>{obj.c_name}</p>
               
              </Card>
              </Link>
              </div>
              
              
            )
        })
      } 
       </div> 
        
        <br />
        <br />
        <br />
        <Footer />
        </div>
            )
    }
}

export default SelectMenu;
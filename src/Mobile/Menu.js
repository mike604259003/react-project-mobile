import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from './Component/Footer';
import Increment from './Component/Increment';
import API from '../Url_api';
import { Card, CardImg, CardBody, CardText ,Button} from 'reactstrap';

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            food: [],
            table_id: 1,
            id:"",
            name:""
        
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

  
  if(this.props.location.state && this.props.location.state){
    const { id } = this.props.location.state;
    const { name } = this.props.location.state;
    //console.log("params "+id);
    this.setState({
      name:name
    })
   
    axios.post(API('getFoodByCategoryID'), 
    JSON.stringify({
      'id':id
    }))
    .then(res => {
      const food = res.data.data;
      this.setState({ food }); 
      
      
    })
  }else{
    this.props.history.push('/selectmenu');
  }
      
  }

    render(){
        return(
         
            <div>
           <br/>
           <center><small className="text-muted" style={{fontSize:'30px'}}>เมนู {this.state.name}</small></center>
          <blockquote className="blockquote"></blockquote>
       
         
          <br />
          <div className="row">
          {
          this.state.food.map(function(obj,i){
            return(
        <div className="col-6" key={i}>
            <Link className="link" 
                  to={{pathname:"/Increment", 
                 state:{
                   id:obj.f_id,
                   name:obj.f_name,
                   img:obj.f_img
                  }}} >
          <Card className="text-center">
            
              <CardBody>
              <small className="text-muted" style={{fontSize:'16px'}}>{obj.f_name}</small>
                  
                  <CardImg top src={obj.f_img} alt="..." style={{width:'150px',height:'150px'}}/>
                
                  <Button  color="neutral">
          <i className="fa fa-book" aria-hidden="true"></i>
            สั่งอาหาร
          </Button>
                
              </CardBody>
              
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
}export default Menu;
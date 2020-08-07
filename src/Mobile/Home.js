import React, { useLayoutEffect } from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import API from '../Url_api';
import { Card, CardBody, CardTitle,  CardLink , CardImg , Button} from 'reactstrap';

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      table_id : 0,
      bill_status:""
    }
  }

componentDidMount(){
  const bill = this.props.match.params.bill;
  localStorage.setItem('bill_id',bill);
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
           const table = this.props.match.params.table;
              
              localStorage.setItem('table_id',table); 
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

  
  
}

    render(){
        return(
            <>
            <center>
            

            <Card style={{width: '20rem' , marginTop: '50px'}}>

        <CardBody>
     <NavLink  to="/selectmenu">
        <CardImg top src="https://myseshabu.com/image/logo.jpg" alt="welcome" />
     </NavLink>
        </CardBody>
        </Card>
        </center>
            </>
            )
    }
}

export default withRouter(Home);
import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import API from '../Url_api';
import { Card, CardBody, CardTitle,  CardLink , CardImg , Button} from 'reactstrap';

class Succes extends React.Component{

  constructor(){
    super();
    this.state = {
      table_id : 0,
      bill_status:""
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
        this.setState({
          bill_status:res.data[0].b_status
        });
          this.setState({
            table_id:localStorage.getItem('table_id')
          })
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
        
        <CardImg top src="https://myseshabu.com/image/succes.jpg" alt="welcome" />
        <NavLink  to="/selectmenu">
          <Button  color="neutral"  style={{marginTop:'30px'}}>
          <i className="fa fa-book" aria-hidden="true"></i>
            ตกลง
          </Button>
          </NavLink>
        </CardBody>
        </Card>
        </center>
            </>
            )
    }
}

export default withRouter(Succes);
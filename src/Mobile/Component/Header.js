import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavbarBrand,
    Navbar,
    Container,
    Button, 
    Badge 
  } from "reactstrap";
  import "../../assets/css/main.css";
  import {connect} from 'react-redux';

class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            table_id: "",
            bill_id:""
        }
    }

    componentDidMount(){
        const table = localStorage.getItem('table_id');
        const bill = localStorage.getItem('bill_id');
        this.setState({
            table_id:table,
            bill_id:bill
        })

        
    }

    render(){
        return(
            <>
        <Navbar color="danger" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            <img src="https://myseshabu.com/image/shabulogo.png" alt="logo" width={50} height={50} style={{marginRight:"20px"}}/>Shabu
            </NavbarBrand>
            <Link to="/cart">
            <Button style={{border:"none" , marginRight:'20px'}} outline>
            <i className="fa fa-shopping-cart" style={{color: "#FFF"}}/>
        {" "}ตะกร้า <Badge color="info" pill>
        {this.props.orders == undefined ? 0: this.props.orders.length
        }
            </Badge>
            </Button>
           </Link>   
          </div>
          
           
        </Container>
      </Navbar>
      
          </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
    orders : state
    }
  }

export default connect(mapStateToProps)(Header);
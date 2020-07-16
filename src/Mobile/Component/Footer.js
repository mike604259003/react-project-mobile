import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{

  constructor(){
    super();
    this.state ={
      table_id:1
    }
  }

  componentDidMount(){
    this.setState({
      table_id:localStorage.getItem('table_id')
    })
  }

    render(){
        return(
          <>
          </>
        )
    }
}

export default Footer;
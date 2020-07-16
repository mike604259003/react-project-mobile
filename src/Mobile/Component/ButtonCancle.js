import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SelectMenu from '../SelectMenu';


export default class ButtonCancle extends Component {
    render() {
        return (
            <div>
              <Link to="/selectmenu">
                <div className="container-Cancle-form-btn">
              <button className="Cancle-form-btn">
                ยกเลิก
              </button>
            </div></Link>
            </div>
        )
    }
}



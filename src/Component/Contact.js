import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../Context'

// import { render } from 'react-dom';
// import React, { Component } from 'react'

 class Contact extends Component {
     state={
         showcontactinfo:false,
         arrowup:false
     };
     ondeleteclick = (id , dispatch) =>{
            dispatch=({ type:'delete_contact' , payload:id });
            
        }
        render(){
        const onShowClick=()=>{
        this.setState({showcontactinfo:!this.state.showcontactinfo})
            this.setState({arrowup:!this.state.arrowup})
        };
    const { id,name, email , phone}=this.props.contact;
    const {showcontactinfo,arrowup}=this.state;
    return (
        <Consumer>
            {value=>{
                const {dispatch} = value;
                return(
                    <div className="card card-body mb-2">
                        <h4>{name}<i onClick={onShowClick}
                        style={{cursor:'pointer'}} 
                        className={arrowup ?"ml-3 small fas fa-sort-up" 
                        :"ml-3 small fas fa-sort-down" }
                        ></i>
                        <i className="fas fa-times float-right pt-1 text-danger"
                        onClick={this.ondeleteclick.bind
                            (this,id,dispatch)}
                        style={{cursor:'pointer'}}></i>
                        </h4>
                        {showcontactinfo ? (<ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>): null}
                    </div>
                )
            }}
        </Consumer>
    )
    }
}
Contact.propTypes={
    contact:PropTypes.object.isRequired
}
export default Contact;
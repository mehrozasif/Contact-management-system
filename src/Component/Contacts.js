import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../Context'
class Contacts extends Component {

    // deletecontact=(id)=>{
    //    const {contacts}=this.state;
    //    const newcontacts=contacts.filter(
    //        contact=>contact.id!==id
    //    );
    //    this.setState({
    //        contacts:newcontacts
    //    })
    // };
    render() {
        return(
           <Consumer>
               {value=>{
                   const {contacts}=value;
                   return(
                        <React.Fragment>
                            {contacts.map(contact =>
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                    // deleteClickHandler={this.deletecontact.bind(this,contact.id)}
                                />
                                )
                            }
                        </React.Fragment>
                   )
                }
               }
           </Consumer> 
        )
    }
}

export default Contacts;
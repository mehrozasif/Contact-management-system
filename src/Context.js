import React, { Component } from 'react'

const Context =React.createContext();
const reducer =(state , action)=>{
        switch(action,type){
            case'delete_contact':
            return{
                ...state,
                contacts:state.contacts.filter(
                    contact=>contact.id!==action.payload
                )
            };
            default:
                return state;
        }
}
export class Provider extends Component {
    state={
        contacts:[
            {
                id: 1,
                name: 'John Doe',
                email:'john@gmail.com',
                phone:'333-444-555',
            },
            {
                id: 2,
                name: 'Sheran Doe',
                email:'Sheran@gmail.com',
                phone:'999-462-342',
            },
            {
                id: 3,
                name: 'Micheal j',
                email:'micheal@gmail.com',
                phone:'432-342-523',
            }
        ],
        dispacth :action=>{
            this.setState(state => reducer(state,action) )
        }
    }
    render() {
        return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
        )
    }
}

export const Consumer =Context.Consumer;
import React from 'react';
import contacts from '../../contacts.json';
import './contacts-display.css';

class ContactsDisplay extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                contactList: contacts,
            }
        }

   deleteCall = (ind) => {
      
        this.props.delete(ind);
        let visList = this.perform();
        return visList;
       }
   perform = () => {
    if (this.props.rand.randomNo > -1) {
        this.props.visibleList.push(this.state.contactList[this.props.rand.randomNo]);
    }
    if (this.props.sortName.sortFlag) {
        this.props.visibleList.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (this.props.sortPop.sortFlag) {
        this.props.visibleList.sort((a, b) => {
            return (a['popularity'] > b['popularity']) ? 1 : (a['popularity'] < b['popularity']) ? -1 : 0;
        })
    }
      return this.props.visibleList.map((contact,index) => {
          return ( 
         
              <tr key={index}>
                <td><img className="pic" src = {contact.pictureUrl}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button className="delete" onClick={()=>{this.deleteCall(index)}}>Delete</button></td>
              </tr>
            )
          })   

   }
    render() {
       
            return this.perform();
        
    }
    }

export default ContactsDisplay;
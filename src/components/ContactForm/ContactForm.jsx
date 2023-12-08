import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './style.module.css'
class ContactForm extends Component{
    state = {
        name: '',
        number: ''
}

     handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
    };
    
    
  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
      };
      this.props.addContact(newContact);

    this.setState({
     
      name: '',
      number: '',
    });
        };


    render() {
        const { name, number} = this.state;
        return (
         <div>
            <form className={css.formContainer} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
          
              required
            />
          </label>
          <label>
            Number:
                        <input
                            className={css.formInput}
              type="tel"
              name="number"
              value={number}
             onChange={this.handleChange}
             
              required
            />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
        </div>
        
    )
       

        
            
    }

};

 export default ContactForm;
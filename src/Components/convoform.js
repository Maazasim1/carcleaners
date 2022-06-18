import React from 'react';
import { ConversationalForm } from 'conversational-form';
import axios from 'axios';
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        'tag': 'input',
        'type': 'text',
        'name': 'name',
        'cf-questions': 'What is your name?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'contact',
        'cf-questions': 'What is your Contact Number?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'car',
        'cf-questions': 'What is your Car Model?'
      },
      {
        'tag': 'input',
        'type': 'text',
        'name': 'date',
        'cf-questions': 'What is your preferred date for the appointment?'
      }
    ];
   
    
    this.submitCallback = this.submitCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  
  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
          theme:'dark',
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields
    });
    this.elem.appendChild(this.cf.el);
  }
  


handleSubmit = (data) =>{

    axios.post('https://sheet.best/api/sheets/77b37f74-5b9f-40af-a87f-67b7a772cf2f', data)
    .then(response => {
      console.log(response);
    })
}
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    this.handleSubmit(formDataSerialized);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. A representative will contact you shortly.")
  }
  
  render() {
    return (
      <div>
        <div
          ref={ref => this.elem = ref}
        />
      </div>
    );
  }
}
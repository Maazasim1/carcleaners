
import React from "react";
import Card from 'react-bootstrap/Card';





export default function Cards(props) {
    return (
      <Card style={{ width: '20rem',height:props.height,marginTop:'0',marginLeft:'0px',top:'0%',backgroundColor:props.color,border:props.border}}>
           <Card.Img src={props.image} style={{width:'20rem',height:'15rem',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'white',fontFamily: "Russo One, sans-serif",fontWeight:'100px',padding:'20px',textAlign:'center'}}>{props.title}</Card.Title>
          {props.price}
          <Card.Text style={{padding:'5px'}}>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }


  //#151a29
import React from 'react';

function ItenListConteiner(props) {
    console.log(props.greeting)
    return (
      
     <>
     <h1>Bienvenido {props.greeting}</h1>
      
       </>
      
      
    );
  }
  
  export default ItenListConteiner;
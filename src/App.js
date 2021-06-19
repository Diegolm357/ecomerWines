import React from 'react';
import ItenListConteiner from './components/ItenListConteiner';
import Navbars from './components/Navbars';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';

function App() {
  const nombre='Diego';
  return (
    <>
    <div>
     <header>
     <Navbars/>
          </header>
     <ItenListConteiner greeting={nombre}></ItenListConteiner>
    </div>
          <br />
         
    <h1>Tenemos un Stock de 10 botellas</h1>
      <ItemCount />
      
      <br />

          <ItemList/>
    </>
  );
}

export default App;






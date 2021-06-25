import React from 'react';
import Navbars from './components/Navbars';
import ItemCount from './components/ItemCount';

import ItemDetailConteiner from './components/ItemDetailConteiner';
import ItemDetail from './components/ItemDetail';

function App() {
  const nombre='LOS MEJORES VINOS';
  return (
    <>
    <div>
     <header>
     <Navbars/>
          </header>
       
<ItemDetailConteiner greeting={nombre}> </ItemDetailConteiner>
    </div>
          <br />
          
          <ItemDetail/>
      
      <br />
<ItemCount/>
     
    </>
  );
}

export default App;






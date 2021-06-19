import React, { useEffect, useState } from "react";
import { Card, Button} from 'react-bootstrap';
import { getData } from './Item';

function ItemList() {
    let [productos, setProductos] = useState([]);

   
    useEffect(() => {
        const esperandoDatos = async () => {
            let data = await getData('')
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price:element.price,
                }
            })

            setProductos(aux);
       }

           esperandoDatos();
    }, [])

    
   
    return (
        <>
            {productos.map(element => {
                return (<div>
             
             <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src= {element.img} />
     <Card.Body>
                            <Card.Title>{element.title}
    
       </Card.Title>
       <Card.Text>
         
         Some quick example text to build on the card title and make up the bulk of
         the card's content.
       </Card.Text>
       <Button variant="primary">COMPRAR</Button>
     </Card.Body>
   </Card>
              </div>
         )}) }            
        </>
    );
    
}  export default ItemList;
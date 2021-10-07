import React from 'react';
import {useState} from 'react';
import Block from './Block.jsx';
import Form from './Form'


export default function Card(){

    const[cards,setCards]=useState([
        {
            title:'Himanshu Dulani',
            subt:'Open Choreography, Hip-Hop'
        },

        {
            title:'Baily Sok',
            subt:'Jazz, Tap, Hip-Hop, Lyrical'
        },

        {
            title:'Sean Lew',
            subt:'Ballet, Contemporary, Jazz, Tap, Lyrical'
        },

        {
            title:'Raghav Juyal',
            subt:'Slow-motion, Lyrical'
        },

        {
            title:'Akansha Sharma',
            subt:'Hip-Hop, Bharatnatyam'
        }

    ]);
   let arr=[];
    for(let i=0;i<cards.length;i++)
    {
       arr.push( <Block head={cards[i].title} subt={cards[i].subt} setCards={setCards} inc={i} cds={cards}  />)
    }
   

    return (
  
   <div>
   <Form className="Card" setCards={setCards} cds={cards}/>
   {
   arr.length>0?arr:<h1 className="heading">All Cards deleted</h1>
   }
   </div>
    );
}


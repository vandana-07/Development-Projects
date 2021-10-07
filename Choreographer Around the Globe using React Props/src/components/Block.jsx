import React from 'react'
import {useState} from 'react'


export default function Block(props)
{

    const {head,subt, inc ,cds,setCards}=props;

    let arr=cds;

    const [txt,setTxt]=useState("");
   const [txt1,setTxt1]=useState("");
   const [flag,setFlag]=useState(0);

   function edit1(e){
    setTxt(e.target.value);
   }

   function edit2(e){
    setTxt1(e.target.value);
   }

   function editHandler(e){
    
   setCards(arr.map((e,i)=>{
       if(inc===i)
       {
           return{'title':txt, 'subt':txt1}
        
       }
       return e;
   }))
   setFlag(0);
   setTxt("");
   setTxt1("");
   e.preventDefault();

   }
    
  
return (

        <div className="Card"> 

     {(flag===1)? <form onSubmit={editHandler}>
  <input type="text" id="editName" placeholder="Choreographer" onChange={edit1} value={txt} required />
  <input type="text" id="editStyle" placeholder="Dance form" onChange={edit2} value={txt1} required/>
  <button type="submit">Add</button>
    </form> : 
    <div>
    <div className="allBtn"> <i className="fas fa-trash dlt"onClick={
            ()=>{
                let a=arr.filter((el,i)=> i!==inc);
                props.setCards(a);
            }
            }></i>
              <i class="fas fa-pen edit"onClick={
            ()=>{
               setTxt(head);
               setTxt1(subt);
               setFlag(1);
            }
            }></i>
      </div>
      <h1 className="title">{head}</h1>
    
        <h2>Dance Styles: {subt}</h2>
    
        </div> }

        </div>

   
);

}
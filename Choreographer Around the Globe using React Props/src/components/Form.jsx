import {useState} from  'react';


export default function Form(props){

  const [text1 , setText]=useState("");
  const [value , setValue]=useState("");

    function inp1(e){
     setText(e.target.value);
    }
    function inp2(e){
        setValue(e.target.value);
    }

function formSubmit(e){
  props.setCards([...props.cds, {'title': text1, 'subt': value}]);
  setValue("");
  setText("");
  e.preventDefault();
}

    return(
<div>
    <form onSubmit={formSubmit} className="editor" autoComplete="off">
  <input type="text" id="name" placeholder="Choreographer" onChange={inp1} value={text1} required />
  <input type="text" id="style" placeholder="Dance form" onChange={inp2} value={value} required/>

  <button type="submit">Add</button>
    </form>
</div>
    )
}
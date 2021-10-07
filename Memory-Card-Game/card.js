
const cards=document.querySelectorAll('.memory-card');
let hasFlip=false;
let first,second;
let lock=false;
const parentClass=document.querySelector('.score-card');
const scoreClass=document.querySelector('.sco');
const moveClass=document.querySelector('.mov');

let score=0;
let move=0;

scoreClass.innerHTML=`<h1>Score: ${score}</h1>`;
 moveClass.innerHTML=`<h1>Moves: ${move}</h1>`;
parentClass.appendChild(scoreClass);
parentClass.appendChild(moveClass);

function flipfunc(){


  if(lock) return;
  if(this===first) return;
  console.log(this);
   this.classList.add('flip');
   

    if(hasFlip===false)
    {
    hasFlip=true;
    first=this;
    
    }
    else{
      hasFlip=false;
      second=this;
      console.log(first,second);
      if(first.dataset.frame === second.dataset.frame)
      {
               first.removeEventListener('click',flipfunc);
               second.removeEventListener('click',flipfunc);
              score++;
              move++;
              scoreClass.innerHTML=`<h1>Score: ${score}</h1>`;
              moveClass.innerHTML=`<h1>Moves: ${move}</h1>`;
             parentClass.appendChild(scoreClass);
             parentClass.appendChild(moveClass);
      }
    
        else{
         lock=true;
          setTimeout(()=>{
            first.classList.remove('flip');
            second.classList.remove('flip');
            lock=false;
        move++;
        scoreClass.innerHTML=`<h1>Score: ${score}</h1>`;
        moveClass.innerHTML=`<h1>Moves: ${move}</h1>`;
       parentClass.appendChild(scoreClass);
       parentClass.appendChild(moveClass);
           
          },1200);

   
         
        }

    }


  }

  (function shuffle()
  {
   cards.forEach(i=>{
     let randomPos= Math.floor(Math.random()*12);
     i.style.order=randomPos;
   })
  })();

  cards.forEach((it)=>{
    it.addEventListener('click',flipfunc);
  })
  
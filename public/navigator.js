
// fetching the mobile page location 

export function loadthemobile(){

   const f=document.getElementById('mobile');

   f.addEventListener('click',()=>{

      window.location.href='./mobile.html';

   });
}



// function for initial display and making it has toogle function  first internal storage

export function show(){
     let show=document.getElementById('closing');

    let man=document.getElementById('closing all');

    let make=document.getElementById('roter');


    show.addEventListener('click',()=>{

      if( man.style.display=='block'){
          man.style.display='none';

          make.classList.remove('rotate-180');
      }

      else{
          man.style.display='block';
          make.classList.add('rotate-180');

      }
    });
}
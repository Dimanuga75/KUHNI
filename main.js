let btn = document.getElementById('open-modal');
let modal1 = document.querySelector('.quest1');
let btn1 = document.querySelector('.forvard1');
let modal2 = document.querySelector('.quest2');
let back2 = document.querySelector('.back2')
let closeBtn1 = document.querySelector('.close1');
let closeBtn2 = document.querySelector('.close2');


// closeBtn.onclick =  function closeModal() {
//     modal1.classList.remove('modal_active');
//     modal2.classList.remove('modal_active');
// }
btn.onclick = () =>{
    modal1.classList.add('modal_active');

    closeBtn1.addEventListener('click', closeModal);
 function closeModal() {
     modal1.classList.remove('modal_active')
 }   
  
   
}
 btn1.onclick = () => {
    modal1.classList.remove('modal_active');
    modal2.classList.add('modal_active');
    closeBtn2.addEventListener('click', closeModal);
 function closeModal() {
     modal2.classList.remove('modal_active')
         
     }
     
 }
 back2.onclick = () => {
    modal1.classList.add('modal_active');
    modal2.classList.remove('modal_active');
     
 }
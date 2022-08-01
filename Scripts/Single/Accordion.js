export default function Accordion(){
  const items = document.querySelectorAll('.Faq__Quest');

  function Clear(){
    items.forEach(item => item.classList.remove('clicked'));
  }

  function ActiveClick(e){
    if(!e.target.classList.contains('clicked'))Clear();
    e.target.classList.toggle('clicked')
  }

  if(items.length){
    items.forEach(item => item.addEventListener("click", ActiveClick))
  }
}
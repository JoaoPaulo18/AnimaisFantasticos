export default function Nav(ClickItem, ChangeItem){
  const ClickItems = document.querySelectorAll(ClickItem);
  const ChangeItems = document.querySelectorAll(ChangeItem);

function ClearAll(){
  ChangeItems.forEach((item) => item.classList.remove('Active'))
}

function Changeitem(e,index){
 ClearAll();
  ChangeItems[index].classList.add("Active");
  // Da a direção de Animação
  // Conforme o colocado no HTML
  ChangeItems[index].style.animationDirection = `${ChangeItems[index].getAttribute('data-Anim')}`
}

if(ClickItems.length){
  ClickItems.forEach((Item,index) => Item.addEventListener("click",(e)=> {  
    Changeitem(e,index);
  }))
  }
}
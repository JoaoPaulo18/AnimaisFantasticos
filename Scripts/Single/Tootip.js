export default function Tooltip(){
  const ItemsTool = document.querySelectorAll('[data-Tooltip]');
  let Box;
  function GetInfos(){
   Box = CreateBox(this.dataset.text);

  this.addEventListener('mousemove',  MouseMove)

  MouseOut.Item = this;
  this.addEventListener('mouseout', MouseOut)
  }

  // Quando tiramos o mouse
  // Limpamos a box criada
  // E removemos os EventListeners
  // Para não pesar a página
  const MouseOut ={
    handleEvent(){
      Box.remove();
      this.Item.removeEventListener('mousemove',MouseMove)
      this.Item.removeEventListener('mouseout',MouseOut)
    }
  }

  // Quando movemos o mouse
  // Verifica se estamos perto
  // Das bordas da página 
  // E assim alteramos o estyle
  // Conforme a necessidade 
  function MouseMove(event){
    Box.style.top = event.pageY + 20 + 'px';
    
  if(event.pageX + 220 > window.innerWidth){
    Box.style.left = event.pageX - 160 + 'px';
  }else
      Box.style.left = event.pageX + 20 + 'px';
    }

  // Cria uma box com o texto
  // Que está em um atributo do item
  function CreateBox(text){
   const Box = document.createElement("div");
    Box.classList.add('tooltip');
    Box.innerText = text;
    document.documentElement.appendChild(Box);
    return Box; 
  }

  // Quando colocarmos o mouse
  // Sobre algum desses elementos
  // Iniciamos o código
  if(ItemsTool.length){
    ItemsTool.forEach(item => {
      item.addEventListener('mouseover', GetInfos)
    })
  }
}
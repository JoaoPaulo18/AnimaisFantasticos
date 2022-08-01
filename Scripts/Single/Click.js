import OutsideClick from '../Utilities/OutsideClick.js';
export default function ClickMenuBtn(element,ClassName){
  const Btn = document.querySelector(element);
  Btn.addEventListener('click',()=>{

    // Cria ou exclui a classe escolhida
    Btn.classList.toggle(ClassName);

    // So chama essas funções 
    // Se ao método toggle ser ativado
    // Ele adicionar a classe ao invés de remove-la
    if(Btn.classList.contains(ClassName)){

      // Verifica se clicamos no BTN do menu
      // Pois precisa de um código especifico
      // Para clicks Outside
      if(Btn.classList.contains('Menu__Btn')){
          const outside = new OutsideClick('html',Btn,'.Menu__Ul',()=>{
          Btn.classList.remove(ClassName);
    }) 
    outside.init();
      }

      // Caso não seja o Btn Menu
      // Faz uma simples implementação de click outside
      else{
        setTimeout(()=> document.documentElement.addEventListener('click', (e)=>{
          if(!Btn.contains(e.target)) Btn.classList.remove(ClassName)
        }))
      }
  }

  })
}
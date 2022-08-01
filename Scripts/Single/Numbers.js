export default function Numbers(){
    const section = document.querySelector('.NumerosAnimais');
    const numbers = document.querySelectorAll('.Animais__Numero');


    // Reiniciamos o InnerHTML dos números
    // Colocamos um intervalo em cada um
    // E quando atingir seu valor total
    // Limpa o intervalo
    if(section && numbers.length){
      function StartAnim(){
   numbers.forEach(num => {
         const total = num.innerHTML;
         const incremento = Math.floor(total / 100);
         let soma = 0;
         num.innerHTML = 0;
         const Interval = setInterval(()=>{
          soma += incremento;
          num.innerHTML = soma;
          if(soma >= total){
          num.innerHTML = total;
          clearInterval(Interval);
          }
         },25 * Math.random())
   });
      }


      // Coloca um Observer na página
      // Que fica observando a section
      // E caso mude algum atributo nela
      // Ele aciona a função
      function GetAnim(mutation){
        if(mutation[0].target.classList.contains('active')){
          Observer.disconnect();
          StartAnim();
        }
      }
      const Observer = new MutationObserver(GetAnim);
      Observer.observe(section, {attributes:true})
    }
}
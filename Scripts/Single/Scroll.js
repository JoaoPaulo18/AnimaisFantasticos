export default function Scrool(){
const Sections = document.querySelectorAll("[data-scroll]")
const windowMetade = window.innerHeight * 0.6;
let Positions = [];
let contagem = 0;

// Pega a posição da section 
// Em relação ao topo e diminui
// Pela metade do tamanho da tela
// E a coloca em um array
function GetPosition(section){
  Positions.push(section.offsetTop - windowMetade);
}

// Pegamos a posição do scroll
// E comparamos com a posição 
// De cada uma das posições no array
function GetScrollPos(){
  Positions.forEach((n,index) =>{
    if(window.scrollY  > n){
    Sections[index].classList.add('active')
  }
    if(Sections[Sections.length-1].classList.contains('active'))
    window.removeEventListener('scroll',GetScrollPos)
})

}

// Da inicio ao código 
// Pegando a posição de cada section
// E adicionando EventListener ao window
if(Sections.length){
  Sections.forEach(section => GetPosition(section));
  window.addEventListener('scroll', GetScrollPos)
}
}
export default function Data(Item){
  const item = document.querySelector(Item);
  const date = new Date();
  const Day = date.getDay();
  const Hour = date.getHours();

  // Pegamos os textos que deixamos
  // No elemento HTML, e transformamos
  // Em uma array para utilizarmos 
  // Um método para acharmos um item 
  // Dentro de arrays, caso não exista
  // nos retorna -1, o que nos serve de 
  // Parâmetro para sabermos sobre a data de hoje
  
  const isOpen = Array.from(item.dataset.days.split(',')).indexOf(`${Day}`) != -1  &&
  (Hour > item.dataset.hours.split(',')[0] && Hour < item.dataset.hours.split(',')[1]);
  if(isOpen)
  item.classList.add('Open')
}
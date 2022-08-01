export default function FetchBTC(link, Item){
  const item = document.querySelector(Item);
  if(item){
    fetch(link)
    .then((response)=>{
      response.json()
      .then((Response) => {
        item.innerHTML = `${(1000 / Response.BRL.sell).toFixed(4)}`
      })
    })
  }
}
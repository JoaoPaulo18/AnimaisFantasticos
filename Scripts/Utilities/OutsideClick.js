export default class OutsideClick{
  constructor(element,BtnEle,Container,CAllBACK){
    this.documentHTML = document.querySelector(element);
    this.Container = document.querySelector(Container);
    this.callBack = CAllBACK;
    this.Btn = BtnEle;
    this.Verification = this.Verification.bind(this)
  }

Verification(e){
  if(this.documentHTML.hasAttribute('outside') ){
    if(!this.Container.contains(e.target) || e.target == this.Btn){
    this.documentHTML.removeAttribute('outside');
    this.documentHTML.removeEventListener('click', this.Verification)
    this.callBack();
    }
  }
  else{
    this.documentHTML.setAttribute('outside','');  

  }
}

  init(){
    if(this.documentHTML){
    this.documentHTML.addEventListener('click', this.Verification)
    }
    return this
  }


}
import { LightningElement} from 'lwc';
export default class hellolwc extends LightningElement {
    fullname ="zero to hero"
    title="lwc"
    address={
        city:'Pune',
        Country:'India'
    }
    changeHandler(event){
        this.title= event.target.value
    }

    trackHandler(event){
        this.address.city= event.target.value
    }
   
}

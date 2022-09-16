import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible= false
    name
    handleclick(){
        this.isVisible=true

    }
    changeHandler(event){
        this.name=event.target.value

    }
    get hellomethod(){
         return this.name ==='hello'
    }
}
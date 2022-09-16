import { LightningElement, track } from 'lwc';

export default class Parentcomp extends LightningElement {
    @track parentvalue='second value'

    changehandler(){
        this.parentvalue='thirdvalue'
    }
}
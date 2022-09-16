import { LightningElement } from 'lwc';
import saveTodo from "@salesforce/apex/todo_newTodolistcontroller.saveTodo";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class todo_newTodolistcontroller extends LightningElement {
discription='';

isInvalid = false;
showSpinner = false;
handleInputChange(event){
this.discription = event.target.value;

if(this.discription == ''){
    this.isInvalid = true;
return;
}
console.log('this.discription',this.discription);
}

handleAdd(event){
  this.showSpinner = true;
    if(this.discription == ''){
     this.isInvalid = true;
        return;
}
saveTodo({ discription: this.discription })



            .then(result => {



                console.log('--success--')



                /*import { ShowToastEvent } from 'lightning/platformShowToastEvent';*/



                this.dispatchEvent(new ShowToastEvent({



                    title: 'title',



                    message: 'message',



                    variant: 'success' //variant can be error



                }));



                this.discription = ''



            })



            .catch(error => {



                this.error = error;



                this.property = undefined;



            }).finally(()=>{



                this.showSpinner = false



            });



        }



        }


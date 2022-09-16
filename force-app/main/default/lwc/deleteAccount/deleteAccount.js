import { LightningElement, wire } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getAccList from '@salesforce/apex/AccountController.getAccList';
import {refreshApex} from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class DeleteAccount extends LightningElement {
    accounts;
    error;
    wiredAccountsResults;
    @wire(getAccList)
    wiredAccounts(result){
        this.wiredAccountsResults=result;
        if(result.data){
            this.accounts=result.error
            this.error=undefined;
        } else if(result.error){
            this.error=result.error;
            this.accounts=undefined;
        }

    }
    deleteAccount(event){
        c
    }
}
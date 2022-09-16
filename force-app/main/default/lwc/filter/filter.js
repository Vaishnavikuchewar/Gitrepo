import { LightningElement,wire} from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import PRODUCT_OBJECT from '@salesforce/schema/Product2'
import FILTER_APARTMENT from '@salesforce/messageChannel/FilterApartment__c'
import {publish, MessageContext} from 'lightning/messageService'
//product schema
import CITY_FIELD from '@salesforce/schema/Product2.City__c'
//constant
const CITY_ERROR ='Error Loading Cities'
//Lightningmessag

export default class Filter extends LightningElement {


    filters={
        maxprice:50000
    }
    cityError= CITY_ERROR
    timer
    //load context
    @wire(MessageContext)
    messagecontext

    //fetching city picklist 
    @wire(getObjectInfo,{objectApiName:PRODUCT_OBJECT})
    productObjectInfo
    @wire(getPicklistValues,{
        recordTypeId:'$productObjectInfo.data.defaultRecordTypeId',
        fieldApiName:CITY_FIELD
        
    })cities
    
    //pricehandler 
    handleMaxprice(event){
        console.log(event.target.value)
        this.filters={...this.filters, "maxprice": event.target.value}
        this.sendDataToCarlist()
    }
    handlecheckbox(event){
        if(!this.filters.cities){
            const cities=this.cities.data.values.map(item=>item.value)
            this.filters={...this.filters, cities}
        }
        const{name,value}=event.target.dataset
     if(event.target.unchecked){
        if(this.filters[name].includes(value)){
            this.filters[name]=[...this.filters[name], value]
        }
     }
     else{
        this.filters[name]= this.filters[name].filter(item=>item !==value)
     }
          this.sendDataToCarlist() 
        }
        sendDataToCarlist(){
            window.clearTimeout(this.timer)
            this.timer=window.setTimeout(()=>{
                publish(this.messagecontext, FILTER_APARTMENT,{
                    filters:this.filters  
            })
            
        }, 400)
            
        }
        
    }

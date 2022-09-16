import { LightningElement, wire } from 'lwc';
import getproductsapp from '@salesforce/apex/ProductController.getproductsapp';
import Filtercity from '@salesforce/apex/ProductController.Filtercity';
export default class ApartmentList extends LightningElement {
products2=''
error
selectecity=''
@wire(getproductsapp)
 producthandler({data,error}){
    if(data){
     console.log(this.products2)
this.products2=data
    }
    else{
        console.log(this.error)
        this.error=error
    }
}
@wire(Filtercity,{city:'$selectecity'})
 productfilter

 get options(){
    return[
        {label:"Pune", value:"Pune"},
        {label:"Mumbai", value:"Mumbai"},
        {label:"Delhi", value:"Delhi"},
        {label:"Nagpur", value:"Nagpur"},
        {label:"Hydrabad", value:"Hydrabad"}
    ]
 }
 cityhandler(event){
    this.selectecity=event.target.value;
 }
}



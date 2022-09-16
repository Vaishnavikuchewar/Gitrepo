import { LightningElement, wire } from 'lwc';
import getproductsapp from '@salesforce/apex/ProductController.getproductsapp';
import Filtercity from '@salesforce/apex/ProductController.Filtercity';
//import product_image4 from '@salesforce/resourceUrl/product_image4';
export default class Wiremethod extends LightningElement {
 //product_image4url=product_image4;
 selectedcity=''
 product=''
 noCitySelected = true;
 products2=''
 error
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
 @wire (getproductsapp)
 apartments({data,error}){
    if(data){
     this.product=data
     console.log(this.product)
    }
    else{
        console.log(error)
    }
 }

 @wire(Filtercity,{city:'$selectedcity'})
 filteredproducts

 get cityoptions(){
    return[
        {label:"Pune", value:"Pune"},
        {label:"Mumbai", value:"Mumbai"},
        {label:"Delhi", value:"Delhi"},
        {label:"Nagpur", value:"Nagpur"},
        {label:"Hydrabad", value:"Hydrabad"}
    ]
 }
 cityhandler(event){
    if(this.selectedcity != null || this.selectedcity !=undefined){
    this.noCitySelected = false
    this.selectedcity=event.target.value;
    console.log('this.selectedcity===',this.selectedcity)
    }
 }
}
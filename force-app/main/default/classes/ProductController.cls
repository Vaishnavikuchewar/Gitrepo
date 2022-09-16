////******
public with sharing class ProductController{
    @AuraEnabled(cacheable=true)
    public static List<Product2> getproductsapp(){
        return[SELECT Id, Name, Available_From__c,IsActive,Available_Till__c,City__c, Duration_In_Months__c, Expected_Rent__c,No_of_Baths__c,No_of_Bedrooms__c,	Picture_URL__c,	ProductCode,Product_Type__c FROM Product2 WHERE Name LIKE 'A%'];
    }


    //ffffffffffffffffffffffffffffffffffffffffffffffff
    @AuraEnabled(cacheable=true)
    public static List<Product2> Filtercity(string city){
        return [SELECT Id,Name, City__c, Picture_URL__c, No_of_Bedrooms__c,No_of_Baths__c,Expected_Rent__c from Product2 where City__c=:city and Name LIKE 'A%' LIMIT 5];
    }
}
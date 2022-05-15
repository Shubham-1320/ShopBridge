import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";


@Injectable()
export class ProductService{
    productUrl : string = "http://localhost:3000/products"

    constructor(private http : HttpClient){}

    //post method
    postNewProduct(newProduct : any){
        return this.http.post( this.productUrl , newProduct,{
            observe : 'events'
        }).pipe(map((res:any)=>{
            return res
        }))
     }

     //get method
     
     fetchProductData(){
        return this.http.get(this.productUrl
        ).pipe(map((resData : any) => {
            const prodList : any[] = [];
            for(const key in resData){
                prodList.push({...resData[key]})
            }
            return prodList
        }))
     }

        //update product

     updateProductData(id: any , editProduct: any){
         return this.http.put(this.productUrl+`/${id}`, editProduct)
     }


     //delete product

     deleteProductData(id: any){
        return this.http.delete(this.productUrl+`/${id}`)
    }

  
     
}
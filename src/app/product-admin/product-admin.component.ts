import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit , AfterViewInit {
  productForm : FormGroup | any;
  editForm : FormGroup | any;
  productArr : any[] = [];
  err : any = null;
  _id : string |any;
  _title : string |any;
  _price : number |any;
  _description: string |any;
  _image : string |any;
  selectedProduct : any;


  constructor(private productServe : ProductService , private fb: FormBuilder, private router: Router) { }
  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'id' : new FormControl(),
      'title' : new FormControl('', Validators.required),
      'price' : new FormControl('', Validators.required),
      'description' : new FormControl('', Validators.required),
      'image' : new FormControl('', Validators.required)
    })

    this.getProductData()
    //initializing editProduct properties
    this._id = new FormControl(),
    this._title = new FormControl('', Validators.required),
    this._price = new FormControl('', Validators.required),
    this._description = new FormControl('', Validators.required),
    this._image = new FormControl('', Validators.required)

    this.editForm = this.fb.group({
      'id' : this._id,
      'title' : this._title,
      'price' : this._price,
      'description' : this._description,
      'image' : this._image
    }) 
    
  }
  
  //Adding new product
  onClickAdd(){
    let newProduct = this.productForm.value
    this.productServe.postNewProduct(newProduct).subscribe((result : any) => {
      console.log(result)
      this.productArr.push(this.productForm.value)
      this.getProductData()
      alert('Product is Added Successfully')
      this.productForm.reset()
    })
    
  }
  //fetching product
  getProductData(){
    this.productServe.fetchProductData().subscribe((data:any) => {
      console.log(data)
      this.productArr = data;
    },(error: any) => {
      this.err = error.message
      console.log(error)
    })
  }

//delete existing product
onDelete(deleteProduct: any){
  this.productServe.deleteProductData(deleteProduct.id).subscribe((data) => {
    console.log(data)
    this.getProductData()
    console.log('Product Deleted')
  })
}



  //on edit modal
  onEditModal(editProduct : any){
    console.log('edit is working')
    this._title.setValue(editProduct.title)
    this._price.setValue(editProduct.price)
    this._description.setValue(editProduct.description)
    this._image.setValue(editProduct.image)

    this.editForm.setValue({
      '_id' : this._id.setValue(editProduct.id).value,
      '_title' : this._title.setValue(editProduct.title).value,
      '_price' : this._price.value,
      '_description' : this._description.value,
      '_image' : this._image.value,
    })
  }

  //updating existing product
  onUpdate(){
    let editProduct = this.editForm.value;
    this.productServe.updateProductData(editProduct.id , editProduct).subscribe((data:any) => {
      console.log(data)
      this.getProductData()
      console.log('Product Deleted')
      this.editForm.reset()
    })
  }

  


}

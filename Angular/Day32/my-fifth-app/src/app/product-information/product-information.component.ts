import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rowspanValue = "5";
  colspanValue = "2";
  products = [{ name: "Mobile", brand: ["Vivo", "Oppo", "Oneplus"] },
              { name: "Laptop", brand: ["HP", "Dell", "Lenovo", "Acer"] }
  ]

}
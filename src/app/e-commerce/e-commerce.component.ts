import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {
  isGridView: boolean = true;
  isListView: boolean = false;
  listOfItems = [
    {id: 1, itemName: 'Handbag', price: 299}, {id: 2, itemName: 'Dress', price: 999},
    {id: 3, itemName: 'Shoes', price: 499}, {id: 4, itemName: 'Jacket', price: 899},
    {id: 5, itemName: 'Socks', price: 199}, {id: 6, itemName: 'Jewellery Box', price: 699},
    {id: 7, itemName: 'Earrings', price: 499}, {id: 8, itemName: 'Track', price: 799},
    {id: 9, itemName: 'Sunglasses', price: 999}, {id: 10, itemName: 'Handbag', price: 299},
    {id: 11, itemName: 'Dress', price: 999}, {id: 12, itemName: 'Shoes', price: 499},
    {id: 13, itemName: 'Jacket', price: 899}, {id: 14, itemName: 'Socks', price: 199},
    {id: 15, itemName: 'Jewellery Box', price: 699}, {id: 16, itemName: 'Earrings', price: 499},
    {id: 17, itemName: 'Track', price: 799}, {id: 18, itemName: 'Sunglasses', price: 999},
    {id: 19, itemName: 'Handbag', price: 299}, {id: 20, itemName: 'Dress', price: 999},
    {id: 21, itemName: 'Shoes', price: 499}, {id: 22, itemName: 'Jacket', price: 899},
    {id: 23, itemName: 'Socks', price: 199}, {id: 24, itemName: 'Jewellery Box', price: 699},
    {id: 25, itemName: 'Earrings', price: 499}, {id: 26, itemName: 'Track', price: 799},
    {id: 27, itemName: 'Sunglasses', price: 999}, {id: 28, itemName: 'Handbag', price: 299},
    {id: 29, itemName: 'Dress', price: 999}, {id: 30, itemName: 'Shoes', price: 499},
    {id: 31, itemName: 'Jacket', price: 899}, {id: 32, itemName: 'Socks', price: 199},
    {id: 33, itemName: 'Jewellery Box', price: 699}, {id: 34, itemName: 'Earrings', price: 499},
    {id: 35, itemName: 'Track', price: 799}, {id: 36, itemName: 'Sunglasses', price: 999},
    {id: 37, itemName: 'Handbag', price: 299}, {id: 38, itemName: 'Dress', price: 999},
    {id: 39, itemName: 'Shoes', price: 499}, {id: 40, itemName: 'Jacket', price: 899}
  ];
  selectedPrice?: number;
  priceList = [199, 299, 399, 499, 599, 699, 799, 899, 999];
  tempList = JSON.parse(JSON.stringify(this.listOfItems));
  constructor() { }

  ngOnInit(): void {
  }

  handlePriceFilter() {
    this.listOfItems = this.tempList;
    if(this.selectedPrice === undefined) {
      return this.listOfItems;
    }
    return this.listOfItems = this.listOfItems.filter(item => item.price === this.selectedPrice);
  }

  gridView() {
    this.isGridView = true;
    this.isListView = false;
  }

  listView() {
    this.isListView = true;
    this.isGridView = false;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] | null = null;
  @Output() onSelectProduct: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteProduct: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getProductById(id: number): void {
    this.onSelectProduct.emit(id);
  }

  deleteProductById(id: number): void {
    this.onDeleteProduct.emit(id);
  }
}

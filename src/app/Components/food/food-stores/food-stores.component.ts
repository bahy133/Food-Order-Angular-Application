import { Stores } from './../../../Models/stores';
import { StoresService } from './../../../Services/stores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-stores',
  templateUrl: './food-stores.component.html',
  styleUrls: ['./food-stores.component.scss'],
})
export class FoodStoresComponent implements OnInit {
  stores!: Stores[];
  constructor(private storeser: StoresService) {
    this.storeser.getallStores().subscribe((data) => {
      this.stores = data;
    });
  }

  ngOnInit(): void {}
}

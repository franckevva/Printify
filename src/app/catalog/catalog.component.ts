import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { CatalogItemModel } from '../models/catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {

  public list: CatalogItemModel[] = [];
  private subscription;
  public searchText = '';

  constructor(private catalogService: CatalogService) {
  }


  ngOnInit() {
    this.subscription = this.catalogService.getList()
      .subscribe(data => this.list = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

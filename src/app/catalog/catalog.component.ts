import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { CatalogItemModel } from '../models/catalog.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {

  public list: CatalogItemModel[] = [];
  private subscription;
  public searchText = '';

  constructor(private catalogService: CatalogService,
              private translate: TranslateService) {
  }


  ngOnInit() {
    this.catalogService.getList(this.translate.currentLang)
      .subscribe(data => this.list = data);

    this.subscription = this.translate.onLangChange.subscribe(translate => {
      this.catalogService.getList(translate.lang)
        .subscribe(data => this.list = data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

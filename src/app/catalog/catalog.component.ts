import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { CatalogItemModel } from '../models/catalog.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {

  public list$: Observable<CatalogItemModel[]>;
  private subscription;
  public searchText = '';

  constructor(private catalogService: CatalogService,
              private translate: TranslateService) {
  }


  ngOnInit() {
    this.list$ = this.catalogService.getList(this.translate.currentLang);

    this.subscription = this.translate.onLangChange
      .subscribe(translate => {
        this.list$ = this.catalogService.getList(translate.lang);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

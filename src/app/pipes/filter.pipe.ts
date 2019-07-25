import { Pipe, PipeTransform } from '@angular/core';
import { CatalogItemModel } from '../models/catalog.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: CatalogItemModel[], searchText: string): CatalogItemModel[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();


    return items.filter(item => {
      return item.title.toLocaleLowerCase().includes(searchText)
        || item.place.toLocaleLowerCase().includes(searchText);
    });
  }
}

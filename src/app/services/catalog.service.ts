import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogItemModel } from '../models/catalog.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {
  }

  public getList(lang: string = 'en'): Observable<CatalogItemModel[]> {
    return this.http.get(`/assets/data/catalog.${lang}.json`)
      .pipe(map((data: { data: CatalogItemModel[] }) => {
        return data.data;
      }));
  }
}

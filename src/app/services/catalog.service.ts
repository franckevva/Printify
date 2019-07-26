import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatalogItemModel } from '../models/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private listRU: CatalogItemModel[] = [
    {
      title: 'Китовая бухта. Тур на Шантарские острова с заброской на авто',
      place: 'Шантарские острова',
      image: 'https://www.russiadiscovery.ru/upload/files/Tur%20na%20Shantarskie%20ostrova-1_1543243826.jpg',
      level: 3,
      term: '11 дней',
      date: new Date('10-26-2019'),
      price: 135000
    },
    {
      title: 'Китовая бухта. Тур на Шантарские острова с заброской на авто',
      place: 'Шантарские острова',
      image: 'https://www.russiadiscovery.ru/upload/files/Tur%20na%20Shantarskie%20ostrova-1_1543243826.jpg',
      level: 3,
      term: '11 дней',
      date: new Date('10-26-2019'),
      price: 135000
    },
    {
      title: 'Китовая бухта. Тур на Шантарские острова с заброской на авто',
      place: 'Шантарские острова',
      image: 'https://www.russiadiscovery.ru/upload/files/Tur%20na%20Shantarskie%20ostrova-1_1543243826.jpg',
      level: 3,
      term: '11 дней',
      date: new Date('10-26-2019'),
      price: 45600
    }, {
      title: 'Китовая бухта. Тур на Шантарские острова с заброской на автою свой',
      place: 'Шантарские острова',
      image: 'https://www.russiadiscovery.ru/upload/files/Tur%20na%20Shantarskie%20ostrova-1_1543243826.jpg',
      level: 3,
      term: '11 дней',
      date: new Date('10-26-2019'),
      price: 45600
    }, {
      title: 'Китовая бухта. Тур на Шантарские острова с заброской на авто',
      place: 'Шантарские острова',
      image: 'https://www.russiadiscovery.ru/upload/files/Tur%20na%20Shantarskie%20ostrova-1_1543243826.jpg',
      level: 3,
      term: '11 дней',
      date: new Date('10-26-2019'),
      price: 45600
    },
  ];
  private listEN: CatalogItemModel[] = [
    {
      title: 'Китовая бухта. Tour to Shantarky island on the car',
      place: 'Shantarsky island',
      image: 'https://www.russiadiscovery.ru/upload/files/Tur%20na%20Shantarskie%20ostrova-1_1543243826.jpg',
      level: 3,
      term: '11 days',
      date: new Date('10-26-2019'),
      price: 135000
    },
  ];

  constructor() {
  }

  public getList(lang: string = 'en'): Observable<any[]> {
    switch (lang) {
      case 'en':
        return of(this.listEN);
      case 'ru':
        return of(this.listRU);

    }
  }
}

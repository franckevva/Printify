import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  protected languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'ru',
      name: 'Русский',
    },
    {
      code: 'by',
      name: 'Беларускі'
    }
  ];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'by']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru|by/) ? browserLang : 'en');
  }

}

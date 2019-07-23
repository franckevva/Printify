import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { ExpectationsComponent } from './expectations/expectations.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'catalog', pathMatch: 'full' },
      { path: 'catalog', component: CatalogComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      { path: 'expectations', component: ExpectationsComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'catalog' },
    ])
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

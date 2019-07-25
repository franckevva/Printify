import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { ExpectationsComponent } from './expectations/expectations.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogService } from './services/catalog.service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    AboutComponent,
    ExpectationsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ CatalogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

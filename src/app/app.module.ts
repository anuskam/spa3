import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios para utilizarlo en cualquier parte de nuestro proyecto
import { ComicsService } from './servicios/comics.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';

//Para utilizar el ngFor de search
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    HomeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ComicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HectogramToKilogramPipe } from './pipes/hectogram-to-kilogram.pipe';
import { DecimeterToMetersPipe } from './pipes/decimeter-to-meters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    HectogramToKilogramPipe,
    DecimeterToMetersPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

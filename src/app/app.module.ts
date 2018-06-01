import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { ForexService } from './services/forex.service';
//import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
    //ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ForexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
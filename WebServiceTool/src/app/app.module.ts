import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LOFApiComponent } from './lofapi/lofapi.component';
import { SSPDataComponent } from './sspdata/sspdata.component';
import { NCOGApiComponent } from './ncogapi/ncogapi.component';
import { ClearCacheComponent } from './clear-cache/clear-cache.component';
import { WBNDataComponent } from './wbndata/wbndata.component';
import { VZOTDataComponent } from './vzotdata/vzotdata.component';
import { SSPApiComponent } from './sspapi/sspapi.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {AppRoutingModule} from './app-routing/app-routing.module';


import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LOFApiComponent,
    SSPDataComponent,
    NCOGApiComponent,
    ClearCacheComponent,
    WBNDataComponent,
    VZOTDataComponent,
    SSPApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

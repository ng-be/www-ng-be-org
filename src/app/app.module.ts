import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
  AppComponent,
  HomeComponent,
];

const PROVIDERS = [

];

const IMPORTS = [
  BrowserModule.withServerTransition({appId: 'ngbe-app'}),
  RouterModule.forRoot([
    ...AppRoutes
  ]),
  SharedModule,
  TransferHttpCacheModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...IMPORTS,
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

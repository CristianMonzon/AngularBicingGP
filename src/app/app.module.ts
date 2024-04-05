import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { StationsComponent } from './stations/stations.component';
import { StationDetailComponent } from './station-detail/station-detail.component';

import { gpRoutesMap } from '../domain/routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(gpRoutesMap),
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    StationsComponent,
    StationDetailComponent
  ],
  providers:[ActivatedRoute],
  bootstrap: [AppComponent],
})

export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { RubriqueListComponent } from './rubrique/rubrique-list/rubrique-list.component';
import { RubriqueDetailsComponent } from './rubrique/rubrique-details/rubrique-details.component';
import { NavBarComponent } from './page-web/nav-bar/nav-bar.component';
import {
  DeleteDialogComponent,
  QualificatifListComponent,
  UpdateDialogComponent
} from './qualificatif/qualificatif-list/qualificatif-list.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {QualificatifService} from './qualificatif.service';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    RubriqueListComponent,
    RubriqueDetailsComponent,
    NavBarComponent,
    QualificatifListComponent,
    DeleteDialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule,
    RouterModule.forRoot([ { path: '', component: QualificatifService }, ]),
    MatDialogModule, BrowserAnimationsModule, MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent, UpdateDialogComponent]
})
export class AppModule { }

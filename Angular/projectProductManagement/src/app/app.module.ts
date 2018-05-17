import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductManagementService } from './product-management.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditComponent,
    NewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

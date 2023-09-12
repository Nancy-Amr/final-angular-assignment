import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

import { SearchComponent,filterNames } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { SearchphoneComponent, filterPhones } from './searchphone/searchphone.component';
import { PhonesearchPipe } from './phonesearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    filterNames,
    filterPhones,
    SearchPipe,
    DeleteComponent,
    EditComponent,
    SearchphoneComponent,
    PhonesearchPipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { SearchphoneComponent } from './searchphone/searchphone.component';

const routes: Routes = [
  {
  path: 'add',
  component: AddComponent
  },
  {
  path:'search',
  component: SearchComponent
  },
  {
    path:'delete',
    component: DeleteComponent
  },
  {
    path:'edit',
    component: EditComponent
  },

  {
    path:'searchphone',
    component:SearchphoneComponent
  }
        

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

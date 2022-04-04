import { MuralVagasComponent } from './modules/home/components/mural-vagas/mural-vagas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"mural", component: MuralVagasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

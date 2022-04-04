import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MuralVagasComponent } from './components/mural-vagas/mural-vagas.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
    FooterComponent,
    HomeComponent,
    MuralVagasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

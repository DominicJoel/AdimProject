import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from "./pages/pages.module"; //Estos son de los modulos que tenemos aparte que lo llamamos aqui
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent

  ],
  imports: [//Los modulos van en los imports
    BrowserModule,
    APP_ROUTES,//Las rutas principales
    PagesModule,//iMORTAMOS LOS MODULOS DE LAS PAGES AQUI EN EL MODULO PRINCIPAL PORQUE AQUI ES QUE USAMOS LAS PAGES
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

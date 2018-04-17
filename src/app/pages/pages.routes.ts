import { Routes,RouterModule } from "@angular/router";

// Componentes
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";


const PAGESROUTES:Routes = [
       {
           path : '',
           component: PagesComponent,
           children: [//Rutas Hijas del Pages Component donde esta el router Outlet
                { path: 'dashboard', component: DashboardComponent }, 
                { path: 'progress', component: ProgressComponent }, 
                { path: 'graficas1', component: Graficas1Component },
                { path: 'account-settings', component:AccountSettingsComponent }, 
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
           ] 
       }
];

 export const PAGES_ROUTES = RouterModule.forChild( PAGESROUTES ); //Usamos el forChild, porque esta es una ruta questara dentro de otra

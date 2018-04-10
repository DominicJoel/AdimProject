 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Rutas 
import { PAGES_ROUTES } from './pages.routes';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Componetes de la Pages
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from './graficas1/graficas1.component';  
import { ProgressComponent } from './progress/progress.component'; 
import { PagesComponent  } from "./pages.component";




@NgModule({
    declarations: [
        PagesComponent,//Esta es la principal donde se va a mover lo dash, graficas,  progress
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [ 
        CommonModule,
        SharedModule,//Como en el pages.component.html se usa los modulos de shared lo importamos aqui
        PAGES_ROUTES //Estas son las rutas de los pages que la importamos en su modulo
      ],
    exports: [//Los exports son como estamos en un modulo aparte si queremos que otros modulo diferente a este tenga acesso a estos componentes debempos ponerlo aqui
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    providers: [],
})
export class PagesModule {} 



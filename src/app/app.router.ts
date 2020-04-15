import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';

export const router: Routes =[
    { path: '', redirectTo: 'configuration', pathMatch: 'full' },
    { path: 'configuration',  component: ConfigurationComponent },
    { path: 'administration',  component: AdministrationComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


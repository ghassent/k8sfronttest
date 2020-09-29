import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { AppMaterialModule } from './app-material.module';
import { LoginComponent } from './main/page/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ListComponent } from './main/list/list.component';
import { AddLongueComponent } from './main/langue/add-longue/add-longue.component';
import { Error404Component } from './main/page/errors/error404/error404.component';
import { GoodByeComponent } from './main/page/good-bye/good-bye.component';
import { AddCompaniesComponent } from './main/list/add-companies/add-companies.component';
import { DetailCompaniesComponent } from './main/list/detail-companies/detail-companies.component';
import { ModifierCompaniesComponent } from './main/list/modifier-companies/modifier-companies.component';
import { ListLangueComponent } from './main/list-langue/list-langue.component';
import { DetailLangueComponent } from './main/list-langue/detail-langue/detail-langue.component';
import { DialogService } from './services/dialog.service';
import { ContactsComponent } from './main/contacts/contacts.component';
import { DetailcontactComponent } from './main/contacts/detailcontact/detailcontact.component';
import { QuiSommeNousComponent } from './main/qui-somme-nous/qui-somme-nous.component';
import { MentionslegaleComponent } from './main/mentionslegale/mentionslegale.component';
import { FondationComponent } from './main/fondation/fondation.component';

const appRoutes: Routes = [
    
    { path: '', component: ContactsComponent},
    // { path: 'dashbord', component: ListComponent},
    // { path: 'addLangue', component: AddLongueComponent},
    // { path: 'logout', component: GoodByeComponent},
    // {path: 'detailCompanies/:id', component: DetailCompaniesComponent}, 
    // {path: 'modifier/:id', component: ModifierCompaniesComponent},   
    // {path: 'listLangue/:id', component: DetailLangueComponent},
    // { path: 'localization', component: ListLangueComponent},  
    { path: 'contact', component: ContactsComponent}, 
    // { path: 'QuiSommeNous', component: QuiSommeNousComponent}, 
    // { path: 'app-mentionslegale', component: MentionslegaleComponent}, 
    // { path: '**', component: Error404Component},

];


@NgModule({
    declarations: [
        FuseConfirmDialogComponent,
        LoginComponent,
        ListComponent,
        AddLongueComponent,
        Error404Component,
        GoodByeComponent,
        AddCompaniesComponent,
        DetailCompaniesComponent,
        ModifierCompaniesComponent,
        ListLangueComponent,
        DetailLangueComponent,
        ContactsComponent,
        DetailcontactComponent,
        QuiSommeNousComponent,
        MentionslegaleComponent,
        FondationComponent,
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
     
    ],
    providers:[
        AuthGuardService,
        AuthService,
        DialogService
    ],
    entryComponents: [
        FuseConfirmDialogComponent,
        AddCompaniesComponent,
        DetailcontactComponent,
        FondationComponent,
    ],

})
export class AppRoutingModule {
}

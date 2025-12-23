import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';
import { Services } from './Pages/services/services';
import { Component } from '@angular/core';
import { Cloud } from './Pages/cloud/cloud';
import { Cyber } from './Pages/cyber/cyber';
import { Data } from './Pages/data/data';
import { Devops } from './Pages/devops/devops';


;


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:Home },
    {path:'about',component:About},
    {path:'services',component:Services},
    {path:'cloud',component:Cloud},
    {path:'cyber',component:Cyber},
    {path:'data',component:Data},
    {path:'devops',component:Devops},
    {path:'contact',component:Contact}
];



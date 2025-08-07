import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Add } from './pages/add/add';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    {
        path: '',
        component: Welcome,
        title: 'Welcome',
    },
    {
        path: 'add',
        component: Add,
        title: 'Add',
    },
    {
        path: 'settings',
        component: Settings,
    },
];

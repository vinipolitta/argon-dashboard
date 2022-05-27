import { HomeComponent } from './../../pages/home/home.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { RestaurantComponent } from 'src/app/pages/restaurant/restaurant.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'home',      component: HomeComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'restaurant',      component: RestaurantComponent },

    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];

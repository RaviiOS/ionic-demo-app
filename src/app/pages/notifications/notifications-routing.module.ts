import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPage } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'notifications',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'feed',
    //     loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
    //   },
    //   {
    //     path: 'notifications',
    //     loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule {}

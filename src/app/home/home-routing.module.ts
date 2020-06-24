import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FeedPage } from '../pages/feed/feed.page';
import { NotificationsPage } from '../pages/notifications/notifications.page';
import { SettingsPage } from '../pages/settings/settings.page';
import { MessagesPage } from '../pages/messages/messages.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'feed',
        component: FeedPage
      },
      {
        path: 'notifications',
        component: NotificationsPage
      },
      {
        path: 'settings',
        component: SettingsPage
      },
      {
        path: 'messages',
        component: MessagesPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/feed',
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {DetailsComponent} from './details/details.component';
import {PostsComponent} from './posts/posts.component';
import {ProfilesViewboxComponent} from "./profiles-viewbox/profiles-viewbox.component";
import {CautionBoxComponent} from "./caution-box/caution-box.component";
import {PotentialsBoxComponent} from "./potentials-box/potentials-box.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'profiles-viewbox',
    component: ProfilesViewboxComponent
  },
  {
    path: 'caution-box',
    component: CautionBoxComponent
  },
  {
    path: 'potentials-box',
    component: PotentialsBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

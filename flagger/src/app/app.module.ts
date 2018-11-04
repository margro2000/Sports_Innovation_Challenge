import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitProfileBoxComponent } from './twit-profile-box/twit-profile-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesViewboxComponent } from './profiles-viewbox/profiles-viewbox.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import {DetailsComponent} from "./details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    TwitProfileBoxComponent,
    ProfilesViewboxComponent,
    PostsComponent,
    PostComponent,
    PostContainerComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

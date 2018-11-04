import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TwitProfileBoxComponent } from './twit-profile-box/twit-profile-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesViewboxComponent } from './profiles-viewbox/profiles-viewbox.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TwitProfileBoxComponent,
    ProfilesViewboxComponent,
    PostsComponent,
    PostComponent,
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

import { PostService } from './services/post.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, HttpModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}

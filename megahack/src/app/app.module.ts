import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([ 
      {path: 'blog', component: BlogComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

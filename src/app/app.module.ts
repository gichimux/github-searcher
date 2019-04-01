import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { AppSearchFormComponent } from './app-search-form/app-search-form.component';
import { MyGitInfoComponent } from './my-git-info/my-git-info.component';
import { QueriedGitInfoComponent } from './queried-git-info/queried-git-info.component';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLandingPageComponent,
    AppSearchFormComponent,
    MyGitInfoComponent,
    QueriedGitInfoComponent,
    AppNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

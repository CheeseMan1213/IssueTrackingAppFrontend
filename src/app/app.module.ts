// Angular imports.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Ionic imports.
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// This app's imports.
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestModelComponent } from './test-model/test-model.component'

@NgModule({
  // 'declarations' brings in the stuff that I make.
  declarations: [
    AppComponent,
    HomeComponent,
    TestModelComponent
  ],
  entryComponents: [],
  // 'imports' brings in the stuff I bring in from elsewhere.
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'test-model', component: TestModelComponent },
      { path: '', redirectTo: 'test-model', pathMatch: 'full' },
      { path: '**', redirectTo: 'test-model', pathMatch: 'full' }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

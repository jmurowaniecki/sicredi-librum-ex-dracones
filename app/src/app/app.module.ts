import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screen/login/login.component';
import { StatusService } from './service/status.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PannelComponent } from './screen/pannel/pannel.component';
import { SidebarComponent } from './screen/pannel/sidebar/sidebar.component';
import { StageComponent } from './screen/pannel/stage/stage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PannelComponent,
    SidebarComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screen/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PannelComponent } from './screen/pannel/pannel.component';
import { SidebarComponent } from './screen/pannel/sidebar/sidebar.component';
import { StageComponent } from './screen/pannel/stage/stage.component';
import { DragonComponent } from './screen/pannel/dragon/dragon.component';
import { SoundService } from './service/sound.service';
import { AdminComponent } from './screen/pannel/admin/admin.component';
import { AdminFormComponent } from './screen/pannel/admin/adminform.component';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PannelComponent,
    SidebarComponent,
    StageComponent,
    DragonComponent,
    AdminFormComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SoundService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MachineStatusComponent } from './components/machine-status/machine-status.component';
import { UserINputFormComponent } from './components/user-input-form/user-input-form.component';
import { UIModule } from './modules/ui/ui.module';
import { machineStatusReducer } from './state/machine-status';

@NgModule({
  declarations: [AppComponent, UserINputFormComponent, MachineStatusComponent],
  imports: [
    BrowserModule,
    UIModule,
    StoreModule.forRoot(
      {
        machineStatus: machineStatusReducer,
      },
      {}
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

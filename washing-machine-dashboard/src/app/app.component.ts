import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllAvailableMachines,
  updateMachineStatus,
} from './state/machine-status';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}
  availableMachines$ = this.store.select(selectAllAvailableMachines);
  title = 'washing-machine-dashboard';

  onClick() {
    this.store.dispatch(updateMachineStatus({ machineId: '1', name: 'John' }));
  }
}

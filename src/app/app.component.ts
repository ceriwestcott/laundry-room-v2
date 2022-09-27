import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getAllMachinesSelector,
  updateMachineStatus,
} from './state/machine-status';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}
  availableMachines$ = this.store.select(getAllMachinesSelector);
  title = 'washing-machine-dashboard';

  onClick() {
    this.store.dispatch(updateMachineStatus({ machineId: '1', name: 'John' }));
  }
  onRentMachine(event$: any) {
    debugger;
    this.store.dispatch(
      updateMachineStatus({ machineId: event$.machineId, name: event$.name })
    );
  }
}

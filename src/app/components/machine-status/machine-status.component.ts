import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceState } from 'src/app/models/device-state.enum';
// import { DeviceState } from 'src/app/models/device-state.enum';
import { Machine } from 'src/app/state/machine-status';
import { RentMachineComponent } from '../rent-machine/rent-machine.component';

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.scss'],
})
export class MachineStatusComponent implements OnInit {
  @Input() machines: Machine | any;
  @Output() rentMachine = new EventEmitter();
  deviceState?: DeviceState = DeviceState.ON;
  constructor(public dialog: MatDialog) {}

  onClick(machineId: string, name: string) {
    let dialogRef = this.dialog.open(RentMachineComponent, {
      height: '400px',
      width: '600px',
    });
    // const payload = { machineId: machineId, name: name };
    // this.rentMachine.emit(payload as UpdateDevicePayload);
  }
  ngOnInit(): void {}
}

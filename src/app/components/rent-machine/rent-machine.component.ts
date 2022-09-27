import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  getAllNonInUseMachinesSelector,
  updateMachineStatus,
} from 'src/app/state/machine-status';

@Component({
  selector: 'app-rent-machine',
  templateUrl: './rent-machine.component.html',
  styleUrls: ['./rent-machine.component.scss'],
})
export class RentMachineComponent implements OnInit {
  allAvailableMachines$ = this.store.select(getAllNonInUseMachinesSelector);
  users = [
    { name: 'John', id: '1' },
    { name: 'Jane', id: '2' },
    { name: 'Jack', id: '3' },
    { name: 'Jill', id: '4' },
    { name: 'Jenny', id: '5' },
    { name: 'Jen', id: '6' },
    { name: 'Jenifer', id: '7' },
  ];
  rentMachineForm = new FormGroup({
    machineId: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  });
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.rentMachineForm.valid) {
      this.store.dispatch(
        updateMachineStatus({
          machineId: this.rentMachineForm.value.machineId ?? '',
          name: this.rentMachineForm.value.userId ?? '',
        })
      );
    }
    console.log('onSubmit');
  }
}

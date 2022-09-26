import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/app/state/machine-status';

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.scss'],
})
export class MachineStatusComponent implements OnInit {
  @Input() machines: Machine[] | any;
  constructor() {}

  ngOnInit(): void {}
}

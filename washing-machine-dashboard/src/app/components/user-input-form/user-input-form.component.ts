import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.scss'],
})
export class UserINputFormComponent implements OnInit {
  constructor() {
    this.stateOptions = [
      { label: 'Machine 2', value: 'on' },
      { label: 'Machine 2', value: 'off' },
      { label: 'Machine 2', value: 'arse' },
    ];
  }
  stateOptions: any[];

  ngOnInit(): void {}
}

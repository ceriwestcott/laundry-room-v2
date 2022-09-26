import { createAction, props } from '@ngrx/store';

export const getAllMachines = createAction('[Machine Status] Get All Machines');

export const getAllAvailableMachines = createAction(
  '[Machine Status] Get All Available Machines'
);

export const updateMachineStatus = createAction(
  '[Machine Status] Update Machine Status',
  props<{ machineId: string; name?: string }>()
);

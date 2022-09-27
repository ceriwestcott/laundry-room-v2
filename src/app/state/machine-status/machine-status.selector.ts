import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeviceState } from 'src/app/models/device-state.enum';
import { MachineStatusState } from '.';

const selectMachineStatus =
  createFeatureSelector<MachineStatusState>('machineStatus');

export const selectAllMachines = selectMachineStatus;

export const getAllMachinesSelector = createSelector(
  selectAllMachines,
  (state) => state.machines
);

export const getAllNonInUseMachinesSelector = createSelector(
  selectAllMachines,
  (state) => state.machines.filter((m) => m.isInUse === DeviceState.OFF)
);

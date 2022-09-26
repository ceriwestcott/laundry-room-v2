import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeviceState } from 'src/app/models/device-state.enum';
import { MachineStatusState } from '.';

const selectMachineStatus =
  createFeatureSelector<MachineStatusState>('machineStatus');

export const selectAllMachines = selectMachineStatus;
export const selectAllAvailableMachines = createSelector(
  selectAllMachines,
  (state) => state.machines.filter((m) => m.isInUse === DeviceState.OFF)
);

import { createReducer, on } from '@ngrx/store';
import { DeviceState } from 'src/app/models/device-state.enum';
import { initialState } from './machie-status.state';
import {
  getAllAvailableMachines,
  getAllMachines,
  updateMachineStatus,
} from './machine-state.actions';

export const machineStatusReducer = createReducer(
  initialState,
  on(getAllMachines, (state) => {
    return {
      ...state,
      machines: state.machines,
    };
  }),
  on(getAllAvailableMachines, (state) => {
    return {
      ...state,
      machines: state.machines.filter((m) => m.isInUse === DeviceState.OFF),
    };
  }),
  on(updateMachineStatus, (state, { machineId, name }) => {
    debugger;
    const machines = state.machines.map((m) => {
      if (m.id === machineId)
        return {
          ...m,
          isInUse: DeviceState.ON,
          currentUser: name,
        };
      return m;
    });

    return {
      ...state,
      machines,
    };
  })
);

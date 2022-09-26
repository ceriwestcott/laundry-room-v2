import { DeviceState } from 'src/app/models/device-state.enum';

export interface Machine {
  id: string;
  name: string;
  isInUse: DeviceState;
  currentUser?: string;
}

export interface MachineStatusState {
  machines: Machine[];
}

export const initialState: MachineStatusState = {
  machines: [
    {
      id: '0',
      name: 'Machine 1',
      isInUse: DeviceState.ON,
      currentUser: 'John Smith',
    },
    {
      id: '1',
      name: 'Machine 2',
      isInUse: DeviceState.OFF,
      currentUser: '',
    },
  ],
};

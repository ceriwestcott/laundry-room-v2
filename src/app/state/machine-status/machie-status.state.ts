import { DeviceState } from 'src/app/models/device-state.enum';
import { MachineType } from 'src/app/models/machine-type.enum';

export interface Machine {
  id: string;
  name: string;
  isInUse: DeviceState;
  currentUser?: string;
  device: MachineType;
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
      device: MachineType.WASHING_MACHINE,
    },
    {
      id: '1',
      name: 'Machine 2',
      isInUse: DeviceState.OFF,
      currentUser: '',
      device: MachineType.WASHING_MACHINE,
    },
    {
      id: '2',
      name: 'Machine 3',
      isInUse: DeviceState.OFF,
      currentUser: '',
      device: MachineType.DRYER,
    },
    {
      id: '3',
      name: 'Machine 4',
      isInUse: DeviceState.OFF,
      currentUser: '',
      device: MachineType.DRYER,
    },
  ],
};

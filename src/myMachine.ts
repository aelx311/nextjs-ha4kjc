import { ActorRefFrom, createMachine, StateFrom } from 'xstate';

export const myMachine = createMachine({
  id: 'myMachine',
  initial: `state1`,
  on: {
    button1Clicked: `state1`,
    button2Clicked: `state2`,
    button3Clicked: `state3`,
  },
  states: {
    state1: {},
    state2: {},
    state3: {},
  },
});

type MyMachineState = StateFrom<typeof myMachine>;
export type MyService = ActorRefFrom<typeof myMachine>;

export function selectIsState3(state: MyMachineState) {
  return state.matches('state3');
}

import { useActor } from '@xstate/react';
import * as React from 'react';
import { useContext } from 'react';
import { MyContext } from './contexts';

export const ComponentA = () => {
  const globalState = useContext(MyContext);
  const [state, send] = useActor(globalState.myService);

  return (
    <section>
      <h1>Component A</h1>
      <output>
        state: <strong>{state.value}</strong>
      </output>
      <button onClick={() => send('button1Clicked')}>BUTTON 1</button>
      <button onClick={() => send('button2Clicked')}>BUTTON 2</button>
      <button onClick={() => send('button3Clicked')}>BUTTON 3</button>
    </section>
  );
};

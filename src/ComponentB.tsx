import { useSelector } from '@xstate/react';
import * as React from 'react';
import { useContext } from 'react';
import { MyContext } from './contexts';
import { selectIsState3 } from './myMachine';

let renderCount = 0;

export const ComponentB = () => {
  const globalState = useContext(MyContext);
  const { myService } = globalState;
  const isState3 = useSelector(myService, selectIsState3);

  renderCount++;

  return (
    <section>
      <h1>Component B</h1>
      <output>
        isState3: <strong>{JSON.stringify(isState3)}</strong>
      </output>
      <output>
        renderCount: <strong>{renderCount}</strong>
      </output>
      <button onClick={() => myService.send('button3Clicked')}>BUTTON 3</button>
    </section>
  );
};

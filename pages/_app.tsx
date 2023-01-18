import { useInterpret } from '@xstate/react';
import * as React from 'react';
import { MyContext } from '../src/contexts';
import { myMachine } from '../src/myMachine';
import '../src/app.css';

export default function App({ Component, pageProps }) {
  const myService = useInterpret(myMachine);

  return (
    <MyContext.Provider value={{ myService }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

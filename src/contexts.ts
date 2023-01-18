import { createContext } from 'react';
import { MyService } from './myMachine';

interface MyContextType {
  myService: MyService;
}

export const MyContext = createContext({} as MyContextType);

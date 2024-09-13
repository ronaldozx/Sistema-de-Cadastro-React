import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Header } from './componentes/Header';
import { Main } from './componentes/Main';
import {ListaCadastros} from './componentes/Lista';


    


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>


        <Header/>
          <Main>
           
          </Main>
          <ListaCadastros />
      
      

  </React.StrictMode>
);

reportWebVitals();

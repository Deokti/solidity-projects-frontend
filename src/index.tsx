import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import 'macro-css';
import 'app/styles/index.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

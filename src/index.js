import ReactDoM from 'react-dom'
import { container } from 'webpack';
import App from './App';





const cointainer = document.getElementById('root');
const root = ReactDoM.createRoot(container);
root.render(App);
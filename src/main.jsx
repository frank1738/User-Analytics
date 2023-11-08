import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpQ3xbf1xzZFJMZV1bRnZPMyBoS35RdURiWXleeHVVRGFfWEJz'
);

import { ContextProvider } from './Context/ContextApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

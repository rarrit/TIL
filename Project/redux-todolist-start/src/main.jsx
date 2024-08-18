import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/config/configStore.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* [3] Provider로 App을 감싸준 후 내가 만든 config(store)를 Props를 통해 연동함 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

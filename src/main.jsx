import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CopilotKit publicApiKey="ck_pub_a4dac0dc2a105fef092a4005b6a9aa89"> 
        {/* {children} */}
        <App />
      </CopilotKit>
    </ThemeProvider>
  </React.StrictMode>
);

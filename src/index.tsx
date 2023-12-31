import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reactTutorial from "./Itay_Folder/react tutorial";
// import main_page from "./Pages/main_page";
import reportWebVitals from './reportWebVitals';
// import FirebaseTest from "./Achsaf_Folder/FirebaseTest";
// import Chwazi from "./Achsaf_Folder/Chwazi";
// import Demo from "./Achsaf_Folder/Demo";
// import Dugma from "./Pages/Dugma";
// import Survival_mission from "./Pages/Survival_mission";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Filters from "./Pages/Filters";
import Mainpage from "./Pages/Main_Page";
import App from "./App";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <App/>
          </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

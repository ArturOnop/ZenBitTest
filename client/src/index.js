import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background: #FFFFFF;
  }

  #root {
    overflow-x: hidden;
  }
`

const theme = {
    media: {
        phone: "(max-width: 600px)",
        tablet: "(max-width: 1300px)"
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Global/>
            <App/>
        </ThemeProvider>
    </Provider>
);

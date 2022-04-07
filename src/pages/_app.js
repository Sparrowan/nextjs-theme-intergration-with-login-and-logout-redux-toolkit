import '../styles/globals.css'
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from 'react';
import '../styles/topbar.css'
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "../themes";
import { LayoutProvider } from "../context/LayoutContext";



function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return <LayoutProvider>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </LayoutProvider>
}

export default MyApp

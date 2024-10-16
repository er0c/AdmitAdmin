import GlobalContext from "./GlobalContext";
import '../css/globals.css';

function MyApp({ Component, pageProps }) {
    return (
      <GlobalContext.Provider>
        <Component {...pageProps}/>
      </GlobalContext.Provider>
    );
  }

export default MyApp;

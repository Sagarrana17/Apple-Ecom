import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "../redux/strore"
import { Toaster } from "react-hot-toast";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    //Higher order Component
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

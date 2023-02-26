import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "../redux/strore"
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={strore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

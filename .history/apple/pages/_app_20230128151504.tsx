import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider strore={strore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

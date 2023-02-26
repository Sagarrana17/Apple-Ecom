import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider strore={strore}>
      <Component {...}
    </Provider>
  )
}

export default MyApp

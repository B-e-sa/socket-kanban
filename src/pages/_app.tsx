import { store } from '@/redux/store/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google';
import { Provider } from "react-redux";

const inter = Inter({
  weight: "300",
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        html {
          font-family: ${inter.style.fontFamily};
        }
        `}
      </style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

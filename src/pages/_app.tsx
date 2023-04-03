import { store } from '@/redux/store/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google';
import { Provider } from "react-redux";
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
      <DndProvider backend={HTML5Backend} >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </DndProvider>
    </>
  )
}

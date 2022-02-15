import "../styles/global.scss"
import type { AppProps } from 'next/app'
import {NextPageContext} from "next";
export async function getStaticProps(context:NextPageContext) {
  console.log("app")
  return {
    props: {}, // will be passed to the page component as props
  }
}
function MyApp({ Component, pageProps,router }: AppProps) {
  return (
      <Component {...pageProps} />
  )

}

export default MyApp

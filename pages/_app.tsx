import { AppProps } from 'next/app'
import Layout from '@components/Layout/layout'

// * IMPORT DEL CSS
import '../style.css'

//? SEMANTIC UI LIBRARY
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers - Themes - data
  // Layout que sea igual en todas las paginas
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

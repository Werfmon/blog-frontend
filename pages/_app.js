import '../styles/globals.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MyApp({ Component, pageProps }) {

  window.onload(() => {
    document.title = "ProeniX"
  })

  return <Component {...pageProps} />
}

export default MyApp

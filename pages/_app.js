import '../styles/globals.css'
import "../styles/swiper.css";

import LayoutOrigin from '../components/layoutOrigin';

const layouts = {
  L1: LayoutOrigin,
};

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return <Layout><Component {...pageProps} /></Layout>
}

export default App;

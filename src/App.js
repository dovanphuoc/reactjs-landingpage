import './assets/css/global.css'
import Container from './components/common/Container/Container'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import InsetHeader from './components/InsetHeader/InsetHeader'
import Newsletter from './components/Newsletter/Newsletter'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <InsetHeader></InsetHeader>
      <Container></Container>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar'
import Item from './components/Item'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar/>

      <section className="Section-Items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        
      </section>
      
      <Footer/>
    </main>
  );
}

export default App;

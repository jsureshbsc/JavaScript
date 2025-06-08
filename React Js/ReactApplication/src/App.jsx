
// import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
 let userName ="suresh";
  
  return (
   <>
    
    <div className='app'>
    <Header userName={userName}/>
    <Content/>
    <Footer/>
    </div>
   </>
  )
}

export default App

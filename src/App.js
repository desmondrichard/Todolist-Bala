import './App.css';
import Content from './Components/Body/Content';
import Search from './Components/Body/Search';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='divApp'>
      <div style={{ width: '75%', border: '1px dashed gray' }}>
        <Header title="Todo List App" />
        <Search />
        <Content />
        <Footer />
      </div>
    </div>

  );
}



export default App;

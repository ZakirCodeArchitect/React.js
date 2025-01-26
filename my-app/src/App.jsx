import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header title="Bird Store" main="Home" nav1="Categories" nav2="cart"/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

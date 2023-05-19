// Import data

// Import components
import './App.css';
import SearchBar from './component/SearchBar';
import SideBar from './component/SideBar';
import Gallery from './component/Gallery';
import Directory from './component/Directory';
import Posting from './component/Posting';


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar />
        <SideBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;

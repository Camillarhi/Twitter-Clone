import './App.css';
import Feed from './Feed/Feed';
import Sidebar from './Sidebar/Sidebar'
import Widget from './Widget/Widget';
function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* FEED */}
      <Feed />
      {/* WIDGETS */}
      <Widget />
    </div>
  );
}

export default App;

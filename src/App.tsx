import './App.css';
import './assets/addons.css';
import './assets/common.css';
import Index from './views/dashboard';

function App() {
  return (
    <div className="App">
      <div className="gorilladesk addons-page has-trialbar">
        <div className="addons-wrap container-wrap">
            <div className="addons-wrap__container addons-wrap__container-dashboard">
                <div className="tabs-dashboard accessible-tabs-container">
                    <Index/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import data from './data.js'
import Mage from './components/Mage';
import './App.css';

function App() {

  const mages = data.map(item => {
    return (
        <Mage
            key={item.name}
            {...item}
            
        />
    )
})



  return (
    <div className="App">
      <header className="App-header">

        <section className="cards-list">
                {mages}
        </section>
      </header>
    </div>
  );
}

export default App;

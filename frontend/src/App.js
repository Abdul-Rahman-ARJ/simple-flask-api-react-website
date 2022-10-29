import './App.css';

function App() {

  async function fetchMoviesJSON() {
    const response = await fetch(
      'http://127.0.0.1:5000/',
      {
        method: 'GET'
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  }



  return (
    <div className="App">
      <h1>Hello Its me</h1>
      <button onClick={fetchMoviesJSON}>Click me</button>
    </div>
  );
}

export default App;

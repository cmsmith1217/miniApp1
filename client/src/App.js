import logo from './logo.svg';
import './App.css';

function App() {

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <div className="App">
      <h2>Movie List</h2>
      <ul>{movies.map((movie) => (
        <li>Title: {movie.title}</li>
      ))}</ul>
    </div>
  );
}

export default App;

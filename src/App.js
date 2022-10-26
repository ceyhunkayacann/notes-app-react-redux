import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import NoteList from './components/NoteList/NoteList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='content'>
        <Form />
        <NoteList />
      </div>

    </div>
  );
}

export default App;

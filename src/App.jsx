import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gabryelle Silva"
        content="A UI library for building reusable user interface components"
      />
      <Post
        author="Ana Luiza"
        content="Over the years, there has been an increased demand for straight-forward ways to compose user-interfaces using JavaScript."
      />
      <Post
        author="Roberto Souza"
        content="React is of course not the only UI library out there. "
      />
    </div>
  )
};

export default App;

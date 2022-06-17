import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import { wrapper } from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
};

export default App;

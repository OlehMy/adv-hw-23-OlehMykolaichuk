import './components/style.css'
import Nav from './components/Nav';
import Contents from './components/Contents';
import {loadPosts} from './store'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className = "header flex">
        <Nav/>
      </header>
      <Contents/>
    </div>
  );
}

export default App;
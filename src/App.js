import CustomForm from './Form/Form';
import './App.css';
import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Create from './Createpost';
import PostDetails from './PostDetails';
import PostEdit from './PostEdit';
import Error from './Error';
import Organism from './Organism/Organism';
import Form from './Form/Form';
import Todo from './Todo/Todo';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mol">
         <Organism />
        </Route>
        <Route path="/form">
         <Form />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/custom">
          <CustomForm />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/PostDetails/:id">
          <PostDetails />
        </Route>
        <Route path="/PostEdit/:id">
          <PostEdit />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

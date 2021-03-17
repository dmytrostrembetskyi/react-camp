import { Route, Switch } from 'react-router';
import { InitAxios } from './api/HttpCommon';
import './App.css';
import { Home } from './components/home/Home';
import Layout from './components/Layout';
import { NotFound } from './components/NotFound';
import CreateTask from './components/tasks/CreateTask';
import EditTask from './components/tasks/EditTask';
import TaskList from './components/tasks/TaskList';

function App() {

  InitAxios();

  return (
    <Layout>
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/tasks'> <TaskList /> </Route>
        <Route path='/tasks/create'> <CreateTask /> </Route>
        <Route path='/tasks/:id/edit'> <EditTask /> </Route>
        <Route path='*' > <NotFound /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;
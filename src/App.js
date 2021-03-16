import { Route, Switch } from 'react-router';
import { InitAxios } from './api/HttpCommon';
import './App.css';
import { Home } from './components/home/Home';
import Layout from './components/Layout';
import CreateTask from './components/tasks/CreateTask';
import EditTask from './components/tasks/EditTask';
import TaskList from './components/tasks/TaskList';

function App() {

  InitAxios();

  return (
    <Layout>
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route path='/tasks/create'> <CreateTask /> </Route>
        <Route path='/tasks/:id/edit'> <EditTask /> </Route>
        <Route path='/tasks'> <TaskList /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;
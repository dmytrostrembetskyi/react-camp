import { Route, Switch } from 'react-router';
import { InitAxios } from './api/HttpCommon';
import './App.css';
import { AuthorizedRoute } from './components/auth/AuthorizedRoute';
import Login from './components/auth/Login';
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
        <AuthorizedRoute exact path='/tasks'> <TaskList /> </AuthorizedRoute>
        <AuthorizedRoute path='/tasks/create'> <CreateTask /> </AuthorizedRoute>
        <AuthorizedRoute path='/tasks/:id/edit'> <EditTask /> </AuthorizedRoute>
        <Route path='/login'> <Login /> </Route>
        <Route path='*' > <NotFound /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;
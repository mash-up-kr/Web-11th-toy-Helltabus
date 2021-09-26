import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Footer, Header, Profile, Setting } from './components';

function App() {
	return (
		<>
			<Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/settings" component={Setting}/>
            <Route path="/aritcle" />
            <Route path="/profile" component={Profile}/>
            <Route path="/editor" />
            <Redirect to="/error"/>
          </Switch>
      </BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/body';
import Login from './components/login';
import Profile from './components/profile';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Feed from './components/feed';
import Connection from './components/Connection';
import Request from './components/Request';

function App() {
  return (
    <>
    <Provider store={appStore} > 
      {/* All the Routing works relative to this path */}
      <BrowserRouter basename='/'> 
        <Routes>
          <Route path ="/" element={<Body />}>
            <Route path ="/feed" element={<Feed />} />
            <Route path ="/login" element={<Login />} />
            <Route path ="/profile" element={<Profile />} />
            <Route path ="/connections" element={<Connection />} />
            <Route path ="/requests" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App

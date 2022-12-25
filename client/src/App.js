import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute } from './pages'
import {
  Profile,
  SharedLayout,
} from './pages/dashboard'
import PageContainer from './components/PageContainer'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />} />
        </Route>
        <Route path='/signup' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/test' element={<PageContainer />} />
        <Route path='*' element={<Error />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

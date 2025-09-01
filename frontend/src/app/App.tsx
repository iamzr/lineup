import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from '../features/user/components/UserPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="*" element={<div><h1>404 Not Found</h1><p>Go to /users/2 for example.</p></div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

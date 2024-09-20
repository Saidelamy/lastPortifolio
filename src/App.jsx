import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectDetails from './Pages/ProjectDetails';
import AppLayout from './Routes/AppLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="project/:productId" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectDetails from './Pages/ProjectDetails';
import AppLayout from './Routes/AppLayout';

const App = () => {
  return (
    <>
      <div className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="project/:productId" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
export default App;

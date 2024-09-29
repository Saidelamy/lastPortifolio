import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './Routes/AppLayout';
import Spinner from './Ui/Spinner';

// const Home = lazy(() => import('./Pages/Home'));
const ProjectDetails = lazy(() => import('./Pages/ProjectDetails'));

import Home from './Pages/Home';
// import ProjectDetails from './Pages/ProjectDetails';

const App = () => {
  return (
    <>
      <div className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="project/:productId" element={<ProjectDetails />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
export default App;

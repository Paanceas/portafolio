import { Route, Routes } from 'react-router-dom';
import { ScrollTopBehavior } from '../components';
import { Home, NotFound } from '../view';

export const PortafolioRouter = () => {
  return (
    <>
      <ScrollTopBehavior />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

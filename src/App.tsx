import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/open-pull-requests" element={<OpenPullRequests />} />*/}
      {/* <Route path="/personal-commits" element={<PersonalCommits />} />*/}
    </Routes>
  </BrowserRouter>
);

export default App;

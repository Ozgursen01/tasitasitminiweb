import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../src/container/MainLayout';
import KVKKScreen from '../src/container/KVKKScreen';
import PrivacyPolicyScreen from '../src/container/PrivacyPolicyScreen';
import UserDeleteScreen from '../src/container/UserDeleteScreen';
import Home from '../src/container/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="KVKK" index element={<KVKKScreen />} />
          <Route path="PrivacyPolicy" index element={<PrivacyPolicyScreen />} />
          <Route path="UserDelete" index element={<UserDeleteScreen />} />
        </Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;

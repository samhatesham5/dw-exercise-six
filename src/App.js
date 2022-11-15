import './App.css';
import React from "react"; 
//Importing the router
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
//Importing our pages
import CreatePage from './pages/CreatePage.js';
import LoginPage from './pages/LoginPage.js';
import UserProfile from './pages/UserProfile.js';
import Header from './components/Header.js';

//Creating our paths for our pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfile />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/create",
    element: <CreatePage /> 
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      {/*Using react router in the browser*/}
      <RouterProvider router={router} />
  
     
    </div>
  );
}

export default App;

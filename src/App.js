//Standard React Stuff
import './App.css';
import React from "react"; 
import { useEffect, useState } from "React"; 

//Importing the router
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

//Importing our pages
import CreatePage from './pages/CreatePage.js';
import LoginPage from './pages/LoginPage.js';
import UserProfile from './pages/UserProfile.js';
import Header from './components/Header.js';

//Initalize firebase
import { initializeApp } from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhSYajHWQHWJfQJ3qTEHakR60-GrbyQBI",
  authDomain: "six-exercise.firebaseapp.com",
  projectId: "six-exercise",
  storageBucket: "six-exercise.appspot.com",
  messagingSenderId: "1062910567996",
  appId: "1:1062910567996:web:9b339941106c9872208539"
};

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
  //Making sure we initalize firebase one time
  const [appInitialized, setAppInitalized] = useState (false);
  //Checking if the information is loading, user is logged in, and we get user info
  const [isLoading, setIsLoading] = useState (true);
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [userInfo, setUserInfo] = useState ({});

  useEffect(()=> {
    //Initalize firebase
    initializeApp(firebaseConfig);
    setAppInitalized(true);
  }, []); 

  useEffect(() => {
    //If user is logged in (app is initalized), then run the following code
    if (appInitialized) {
      //Firebase abstraction (copied from firebase) -- just know that this should return a user's information as an object
      const auth = getAuth();
      onAuthStateChanged(auth, (user)=> {
        //If the user exist in firebase...
        if (user){
          //Set our user info
          setUserInfo(user);
          //Check off that they're signed in
          setIsLoggedIn(true);
        }
        //Assume user is signed out (or doesn't have an account)
        else {
          //To avoid getting an error, send back empty object
          setUserInfo({});
          setIsLoggedIn(false);
        }
        //Finished loading 
        setIsLoading(false);

      })
    }
    //If not, skip it

  }, [appInitialized]); 

  return (
    <div className="App">
      <Header />
      {/*Using react router in the browser*/}
      <RouterProvider router={router} />
  
     
    </div>
  );
}

export default App;

import TopBar from "./components/Topbar";
import Stories from "./components/Stories";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { useState } from "react";



function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);

  return (
    <>
    <TopBar/>
    <Stories user = {userData} storiesMock = {storiesData}/>
    </>
  )
}

export default App

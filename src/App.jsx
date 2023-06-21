
import { useState, useEffect } from "react";

import TopBar from "./components/Topbar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Camera from "./components/Camera";


function App() {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [section, setSection] = useState('home');

  useEffect(() => {
    fetch('https://api.npoint.io/dd14d7df53a92e1dc176').
      then(res => res.json()).
      then((data) => setStories(data));
    console.log("effect stories");
  }, [])

  useEffect(() => {
    fetch('https://api.npoint.io/64dabff75c5bf76b0c7c').
      then(res => res.json()).
      then((data) => setPosts(data));
    console.log("effect post");
  }, [])

  useEffect(() => {
    fetch('https://api.npoint.io/ac0a7069ec4e4f36e1c1').
      then(res => res.json()).
      then((data) => setUser(data));
    console.log("effect user");
  }, [])

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
            posts.length?  () => <Posts posts={posts}/>:null
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1>TVVVVV</h1>;
      case "messages":
        return <h1>MESSAGGGGIIIIII</h1>;
    }
  };

  return (
    <>
      <TopBar />
      {onSectionRender()};
    </>
  )
}

export default App

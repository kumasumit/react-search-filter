import {getPosts} from "../api/axios";
import {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import PostsPage from "./PostsPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(()=>{
    getPosts().then(data=>{
      setPosts(data)
      setSearchResults(data);
    })
  },[])


  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults}/>
      <PostsPage searchResults={searchResults}/>
    </>
  );
}

export default App;

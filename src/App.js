import "./App.css";
import{useEffect,useState}from"react";
import axios from "axios"

function App(){

  const[users,setUsers]=useState([])
 
  useEffect(()=>{
   
       axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((users) => setUsers(users.data))
         .catch((err) => console.log(err));
    
  },[])
 console.log(users);
  return <div className="App">
    {
      users.map((user)=>{
        <div>
          <h2>{user.id}</h2>
        </div>;
      })
     
    }
  </div>;
}

export default App;

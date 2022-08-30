import logo from './logo.svg';
import { Ist } from "./components/IstComponent";
import StaticTableClass from './components/StaticTableClass';
import {Table} from './components/StaticTableFunction';
import Form from './components/Form';
import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const usersData=[
    {
      id:1,
      name:"Sam",
      username:'samee',
      email:'Sam@test.com',
      phone:'012381239299',
    },
    {
      id:2,
      name:"Saya",
      username:'saya',
      email:'saya@test.com',
      phone:'23469323244',
    },
    {
      id:3,
      name:"varun",
      username:'varunnn',
      email:'var@test.com',
      phone:'02131236763',
    },
    {
      id:4,
      name:"ten",
      username:'tenu',
      email:'ten@test.com',
      phone:'02734673264',
    },
    {
      id:5,
      name:"june",
      username:'juneee',
      email:'jun@test.com',
      phone:'01238723644',
    },
  ]
  const [users,setUsers] = useState(usersData)
  const removeUser = (index) =>{
    console.log(index)
      setUsers(
        users.filter((item,i)=>{
          return item.id !== index
        })
      )
  }

  const submitUser = (user) =>{
    console.log(user,"userApp")
    setUsers([...users,user])
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
      setUsers([...users,...data])

      console.log(data,"kjsahdjkhdkjsad")
    })
  },[]);
  return (
    <div className="container">
      <Ist/>
      <h3>Table Using Class Component With Static Data</h3>
      <StaticTableClass/>
      <br/>
      <h3>Table Using Functional Component With Props</h3>
      <Table data={users} deleteUser={removeUser}/>
      <Form data={users} submitUser={submitUser}/>
    </div>
  );
}

export default App;

import React from 'react';
import "./Form.css";
import {useState} from 'react'

const Form = (props) => {
    // const [data, setData] = useState(props.data);
    const [formData, setFormData] = useState({
        id:'',
        name:'',
        username:'',
        email:'',
        phone:''
    });
    // const[warn,setWarn] = useState('')
    const {name,username,email,phone} = formData
    const handleChange = (e) =>{
        // const name = e.target.name
        // const value =e.target.value
       setFormData({
         ...formData,[e.target.name]:e.target.value
       })
       console.log(formData)
       
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.submitUser(formData)
       setFormData({
           name:'',
           username:'',
           email:'',
           phone:'',
       })
       
    }
    return (
        <div>
            {/* <p>{warn}</p> */}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
                <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange}/>
                <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange}/>
                <input type="text" placeholder="phone#" name="phone" value={phone} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;

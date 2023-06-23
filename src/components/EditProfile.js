import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { profiles } from './Context/Profiles';
import { useNavigate, useParams } from 'react-router-dom';

function EditProfile() {

  let Pdata = useContext(profiles)
  let nav = useNavigate()
  let params = useParams()

let handleSubmit = () =>{
  let oldArr = [...Pdata.users]
  let newArr = {name,rollNo,userName}
  if(params.id!=undefined){
    oldArr.splice(params.id,1,newArr)
    Pdata.setUsers(oldArr)
    nav('/profile')
  }
}

  let [name,setName] = useState("") 
  let [rollNo,setRoll] = useState("")
  let [userName,setUserName] = useState("")

  useEffect(()=>{
    if(params.id!=undefined){
      setName(Pdata.users[params.id].name)
      setRoll(Pdata.users[params.id].rollNo)
      setUserName(Pdata.users[params.id].userName)
    }
  },[])
  return <>
    <div className='container-fluid'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Roll-no</Form.Label>
          <Form.Control type="text" placeholder="Enter Roll-no" value={rollNo} onChange={(e)=>setRoll(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>handleSubmit()}  >
          Submit
        </Button>
      </Form>
    </div>
  </>
}

export default EditProfile
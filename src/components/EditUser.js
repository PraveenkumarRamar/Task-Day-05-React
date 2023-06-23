import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from './Context/Users';


function EditUser() {

    let userData = useContext(user)
    let nav =useNavigate()
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [gender,setGender] = useState("")
    let [role,setRole] = useState("")
    let [qualification,setQualification] = useState("")
    let [mobile,setMobile] = useState("")
    let [From,setFrom] = useState("")

    let handleSubmit = () =>{
        let editUser = {name,age,gender,role,qualification,mobile,From};
        let newArr = [...userData.data]
        if(params.id!=undefined){
            newArr.splice(params.id,1,editUser)
            userData.setData(newArr)
            nav('/users')
        }
    }

    let params = useParams()
    useEffect(()=>{
        if(params.id!=undefined){
                setName(userData.data[params.id].name)
                setAge(userData.data[params.id].age)
                setFrom(userData.data[params.id].From)
                setGender(userData.data[params.id].gender)
                setQualification(userData.data[params.id].qualification)
                setRole(userData.data[params.id].role)
                setMobile(userData.data[params.id].mobile)
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
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="Enter From" value={From} onChange={(e)=>setFrom(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter role" value={role} onChange={(e)=>setRole(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control type="text" placeholder="Enter qualification" value={qualification} onChange={(e)=>setQualification(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={()=>handleSubmit()}  >
                    Submit
                </Button>
            </Form>
        </div>
    </>
}

export default EditUser
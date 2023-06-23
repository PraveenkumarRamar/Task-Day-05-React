import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from './Context/Users';


function CreateUser() {
let userData = useContext(user)
    let nav = useNavigate()

    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [gender, setGender] = useState("")
    let [role, setRole] = useState("")
    let [qualification, setQualification] = useState("")
    let [mobile, setMobile] = useState("")
    let [From, setFrom] = useState("")

    const handleSubmit = () => {
        let newArr = {name,age,gender,role,qualification,mobile,From}
        let oldArr = [...userData.data]
        oldArr.push(newArr)
        userData.setData(oldArr)
        nav('/users')
    }
    return <>
        <div className='container-fluid'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"  onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="Enter From"  onChange={(e) => setFrom(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter age"  onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter gender"  onChange={(e) => setGender(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter role"  onChange={(e) => setRole(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control type="text" placeholder="Enter qualification"  onChange={(e) => setQualification(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile" onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => handleSubmit()}  >
                    Submit
                </Button>
            </Form>
        </div>
    </>
}

export default CreateUser
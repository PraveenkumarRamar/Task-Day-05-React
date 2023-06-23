import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { user } from './Context/Users';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ListUser() {
    let userData = useContext(user)
    let nav = useNavigate()
    return <>
        <div className='container-fluid' >
            <Table striped bordered hover style={{textAlign:"center"}} >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Qualification</th>
                        <th>Mobile</th>
                        <th>From</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.data.map((e,i)=>{
                            return <tr key={i} >
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.gender}</td>
                                <td>{e.role}</td>
                                <td>{e.qualification}</td>
                                <td>{e.mobile}</td>
                                <td>{e.From}</td>
                                <td><Button variant='primary' onClick={()=>nav(`/edit-user/${i}`)}>Edit</Button>
                                &nbsp; &nbsp;
                                <Button variant='danger' onClick={()=>{
                                    let newArr = [...userData.data]
                                    newArr.splice(i,1)
                                    userData.setData(newArr)
                                }}>Delete</Button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </>
}

export default ListUser
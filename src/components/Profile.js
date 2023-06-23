import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { profiles } from './Context/Profiles';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Profile() {
    let PUsers = useContext(profiles)
    let nav = useNavigate()
    return <>
        <div className='container-fluid' >
            <Table striped bordered hover style={{textAlign:"center"}} >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Roll-No</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PUsers.users.map((e, i) => {
                            return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.rollNo}</td>
                                    <td>{e.userName}</td>
                                    <td><Button variant='primary' onClick={()=>nav(`/edit-profile/${i}`)} >Edit</Button>
                                    &nbsp; &nbsp;
                                    <Button variant='danger' onClick={()=>{
                                        let newArr = [...PUsers.users]
                                        newArr.splice(i,1)
                                        PUsers.setUsers(newArr)
                                    }} >Delete</Button> </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </>
}

export default Profile
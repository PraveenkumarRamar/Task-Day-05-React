import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';

function SideBar() {
    let nav = useNavigate()
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Task CRUD <sup>2</sup></div>
            </div>


            <li className="nav-item active">
                <div className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span onClick={()=>nav('/dashboard')} style={{cursor:"pointer"}}>Dashboard</span>
                </div>
            </li>
            
            {/* <Button variant='danger'>Logout</Button> */}
        </ul>
    </>
}

export default SideBar
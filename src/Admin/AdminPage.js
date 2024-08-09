import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const AdminPage = () => {

    let navigate = useNavigate()

    function logout(e) {
        e.preventDefault()
        localStorage.clear();
        navigate("/login")
    }

  return (
    <div className="row">
            <div className="col-lg-2">

                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-1 mt-4">
                            <NavLink to={"/admin"}>
                            <button style={{backgroundColor:"#436EEE"}} className="list-group-item list-group-item-action py-4 ripple">
                                    <h3><a href="#" className='text-dark'><i className="fas fa-chart-area fa-fw me-3"></i><span>Dashboard</span></a></h3>
                                </button>
                                </NavLink>

                            
                                <NavLink to="/admin/products"> 
                                <button className="list-group-item list-group-item-action py-4 ripple">
                                    <h3><a className='text-dark' href="#"><i className="fa-solid fa-bag-shopping me-4"></i><span>Products</span></a></h3>
                                </button>
                                </NavLink>
                            
                            <NavLink to="/admin/addproduct">
                            <button className="list-group-item list-group-item-action py-4 ripple">
                                    <h3><a className='text-dark' href="#"><i className="fas fa-chart-bar fa-fw me-3"></i><span>Add Product</span></a></h3>
                                </button>
                                </NavLink>

                                
                             
                            <Link ddata-toggle="tooltip" data-placement="bottom" to={"/admin/order"}>
                            <button className="list-group-item list-group-item-action py-4 ripple">
                                    <h3><a className='text-dark' href="#"><i className="fas fa-building fa-fw me-3"></i><span>Order</span></a></h3>
                                </button>
                            </Link>
                            <Link ddata-toggle="tooltip" data-placement="bottom" title="Admin / Logout">
                                <button className="list-group-item list-group-item-action py-4 ripple" onClick={(e) => logout(e)}>
                                    <h3><a href="#"><i className="fa-solid fa-right-from-bracket me-3 "></i><span>Logout</span></a></h3>
                                </button>
                            </Link>

                        </div>
                    </div>
                </nav>

            </div>
            <div className="col-lg-10">
                <Outlet />
            </div>
        </div>
  )
}

const Wrapper = styled.section`

button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

`;

export default AdminPage
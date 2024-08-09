import React from 'react'
import { Button } from "../styles/Button";
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
            <br />
            <p ddata-toggle="tooltip" data-placement="bottom" title="Admin/Dashboard" className="bread"><span><Link to={"/admin"} style={{color:"#8758f5"}}>Admin</Link></span> / <span>Dashboard</span></p><br />

            <div className="row admin-main-card">

                <div className="col-lg-4">
                    <br />
                    <div ddata-toggle="tooltip" data-placement="bottom" title="User" className="card rounded-pill shadow" >
                        <div className="card-body">
                            <h5 style={{ fontSize: "100px", textAlign: "center" }} className="card-title"><i className="fa-solid fa-users"></i></h5>
                            <hr />
                            <Link to={"/"}>
                            <Button style={{ marginLeft: "38%", backgroundColor:"#8758f5" }} className='btn admin-card-btn'>User</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"><br />
                    <div ddata-toggle="tooltip" data-placement="bottom" title="Product List" className="card rounded-pill shadow">
                        <div className="card-body">
                            <h5 style={{ fontSize: "100px", textAlign: "center" }} className="card-title"><i className="fa-solid fa-bag-shopping"></i></h5>
                            <hr />
                            <Link to={"/admin/dashboardproduct"}>
                                <Button style={{ marginLeft: "38%", backgroundColor:"#8758f5" }} className='btn admin-card-btn'>Product</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"><br />
                    <div ddata-toggle="tooltip" data-placement="bottom" title="User Order List" className="card rounded-pill shadow">
                        <div className="card-body">
                            <h5 style={{ fontSize: "100px", textAlign: "center" }} className="card-title"><i className="fa-brands fa-first-order-alt"></i></h5>
                            <hr />
                            <Link to={'/admin/OrderSec'}>
                                <Button style={{ marginLeft: "38%", backgroundColor:"#8758f5" }} className='btn admin-card-btn'>Order</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Main
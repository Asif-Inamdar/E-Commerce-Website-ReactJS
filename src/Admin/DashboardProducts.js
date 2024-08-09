import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Flip, toast } from 'react-toastify';

export default function DashboardProducts() {

  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined)

  useEffect(() => {
    loadData();
    toast.success('Added To Product!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip
    });

  }, []);

  function loadData() {
    axios.get("https://6622912627fcd16fa6ca3836.mockapi.io/ReactJs4/")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data);
        setLoading(true);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError("Unable to Fetch Product Data")
        setLoading(true);
      });
  }

  function handleDelete(e, id) {
    e.preventDefault();
    axios.delete("https://6622912627fcd16fa6ca3836.mockapi.io/ReactJs4/" + id)
      .then((res) => {
        toast.error("The Product Has Been Remove 🗑️", {
          position: "top-right",
          autoClose: 2000
        })
        console.log(res.data);
        loadData();
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  }
  return (<><br />
    <p ddata-toggle="tooltip" data-placement="bottom" title="Admin/Product" className="bread"><span><Link style={{ color: "#8758f5" }} to={"/admin"}>Admin</Link></span> / <span>Product's</span></p>
    <h3 style={{marginLeft:"45%"}} className='product-table mb-4'>[Products Table]</h3>
    {

      !error
        ?

        <table className="table admin-laptop-product">
          <thead>
            <tr style={{ backgroundColor: "#436EEE" }} className=' text-center'>
              <th scope="col">Sr No</th>
              <th scope="col">Categoey</th>
              <th scope="col">Name</th>
              <th scope="col">company</th>
              <th scope="col">Price</th>
              {/* <th scope="col">MRP</th> */}
              <th scope="col">Image</th>
              <th className='w-25' scope="col">Discription</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {
            loading
              ?

              <tbody>
                {newData.map((eachData, i) => (
                  <tr className='text-center border' key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{eachData.category}</td>
                    <td>{eachData.name}</td>
                    <td>{eachData.company}</td>
                    <td>{eachData.price}</td>
                    {/* <td><del>{eachData.mrp}</del></td> */}
                    <td>
                      <img style={{ width: "70px" }} src={eachData.image} alt="" />
                    </td>
                    <td>{eachData.description}</td>
                    <td>
                      <Link to={"/admin/addproduct/" + eachData.id}>
                        {/* <button style={{color:"#8758f5", fontSize:"15px"}} className='btn me-1'><i style={{color:"#fc0303", fontSize:"15px"}} className='btn' class="fa-solid fa-pencil"></i></button> */}
                        <i style={{color:"#8758f5", fontSize:"15px"}} className="fa-solid fa-pencil me-4 mt-5"></i>
                      </Link>
                      <i style={{color:"#fc0303", fontSize:"15px",cursor:"pointer"}} className="fa-solid fa-trash-can" onClick={(e) => handleDelete(e, eachData.id)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
              :

              <div class="loader"></div>


          }
        </table>
        :

        <div className="alert alert-success">
          <strong>{error} ! </strong><a href="" className="alert-link">Error Link</a>
        </div>
    }
  </>

  )
}

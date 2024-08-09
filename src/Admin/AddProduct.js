import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import axios from 'axios';

const AddProduct = () => {
    let { id } = useParams()
    const [data, setData] = useState({
        name: "",
        category: "",
        company: "",
        colors: "",
        price: "",
        image: "",
        description: ""
    });

    let navigate = useNavigate()

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    };

    function handleSubmit(e) {
        e.preventDefault();

        // if(data.title.trim() === ""){
        //   setTitelError("Please Select Title And Submite")
        // }
        // if(data.category.trim() === ""){
        //   setModelError("Please Select model And Submite")
        // }
        // if(data.price.trim() === ""){
        //   setPriceError("Please Select Price And Submite")
        // }
        // if(data.mrp.trim() === ""){
        //   setMrpError("Please Select MRP And Submite")
        // }
        // if(data.image.trim() === ""){
        //   setImageError("Please Select Image And Submite")
        // }
        // if(data.discription.trim() === ""){
        //   setDiscriptionError("Please Select Discription And Submite")
        // }

        if (id === undefined) {
            axios.post("https://6622912627fcd16fa6ca3836.mockapi.io/ReactJs4/", data)
                .then((res) => {
                    // console.log(res.data);
                    navigate("/admin/products");
                    setData({
                        name: "",
                        category: "",
                        company: "",
                        colors: "",
                        price: "",
                        image: "",
                        description: ""
                    })
                })
        } else {
            axios.put("https://6622912627fcd16fa6ca3836.mockapi.io/ReactJs4/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    navigate("/admin/products")
                    setData({
                        name: "",
                        category: "",
                        company: "",
                        colors: "",
                        price: "",
                        image: "",
                        description: ""
                    })
                })
        }
    };

    useEffect(() => {

        if (id !== undefined) {
            axios.get("https://6622912627fcd16fa6ca3836.mockapi.io/ReactJs4/" + id)
                .then((res) => {
                    console.log(res.data);
                    setData({
                        name: res.data.name,
                        category: res.data.category,
                        company: res.data.company,
                        colors: res.data.colors,
                        price: res.data.price,
                        image: res.data.image,
                        description: res.data.description
                    })
                })
        }
    }, [])

    return (
        <div className='bg-light mt-4'>

            <p ddata-toggle="tooltip" data-placement="bottom" title="Admin / Add Poroduct" class="bread m-3"><span><Link to={"/admin"}>Admin</Link></span> / <span>Add Laptop</span></p><br /><br />
            <form className=''>
                <div style={{ fontSize: "12px" }} className='row'>
                    <div className='col-lg-4'>
                        <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Name :</label>
                        <input onChange={(e) => {
                            handleChange(e)
                        }} value={data.name} className='w-100 ms-1' type="text" id="name" placeholder="Brand Name" name="Brand Name" />

                    </div>
                    <div className='col-lg-4'>
                        <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Category :</label>
                        {/* <input  className='w-100 ' type="text"  placeholder="category"  /> */}
                        <select onChange={(e) => {
                            handleChange(e)
                        }} value={data.category} style={{height:"5rem",border:"solid 0.1px #6254F2", fontSize:"12px"}} class="contact-form w-100 " id="category" name="Categoey" aria-label="Default select example">
                            <option selected> SELECT CATEGORY</option>
                            <option>mobile</option>
                            <option>laptop</option>
                            <option>computer</option>
                            <option>accessories</option>
                            <option>watch</option>
                        </select>
                    </div>
                    <div className='col-lg-4'>
                        <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Colors :</label>
                        <input onChange={(e) => {
                            handleChange(e)
                        }} value={data.colors} className='w-100 ms-1' type="text" id="colors" placeholder="Colors" name="Colors" />
                    </div>
                    <div style={{ marginTop: "4%" }} className='row'>
                        <div className='col-lg-4'>
                            <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Company </label>
                            <input onChange={(e) => {
                                handleChange(e)
                            }} value={data.company} className='w-100' type="text" id="company" placeholder="MRP" name="MRP" />
                        </div>
                        <div className='col-lg-4'>
                            <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Price </label>
                            <input onChange={(e) => {
                                handleChange(e)
                            }} value={data.price} className='w-100' type="number" id='price' placeholder="Price" name="Price" />
                        </div>
                        <div className='col-lg-4'>
                            <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Image URL </label>
                            <input onChange={(e) => {
                                handleChange(e)
                            }} value={data.image} className='w-100' type="text" id="image" placeholder="Image" name="Image" />
                        </div>
                    </div>
                    <div style={{ marginTop: "4%" }} className='row'>
                        <div className='col-lg-12'>
                            {/* <label className='ms-3 text' style={{ fontSize: "17px" }} htmlFor="">Discription :</label> */}
                            <textarea onChange={(e) => {
                                handleChange(e)
                            }} value={data.description} className='w-100'
                                name="Message"
                                cols="50"
                                rows="5" id="description"
                                placeholder="Enter Brand Description"></textarea>
                        </div>
                    </div>
                    <Button style={{ width: "15%" }} className="btn hireme-btn mt-5">
                        <NavLink onClick={(e) => handleSubmit(e)} to='/admin/products' >SUBMIT </NavLink>
                    </Button>
                </div>
            </form>
        </div>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form, form-select {
        max-width: 50rem;
        margin: auto;

        .contact-inputs, form-select {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default AddProduct
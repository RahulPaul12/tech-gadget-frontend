import { Button} from 'react-bootstrap';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Addproduct.css';
const Addproduct = () => {
   
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
     console.log('hit');
        
        axios.post('https://tech-gadget-backend.onrender.com/products', data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
        })
    }

    
    return (
        <div className="addservice pt-5 img">
            <h2 style={{textAlign:'center'}}>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price" />
      <input  {...register("img")} placeholder="image url" />
      <input type="submit"  className="btn-regular" title="Add"/>
    </form>
        </div>
    );
};

export default Addproduct;
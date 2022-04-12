import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddWatch.css';
const AddWatch = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/clock',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-menu'>
            <h1 className='text-center fw-bold mb-5 mt-5 text-white'>Please Add a Clock !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Clock Name" />
      <input {...register("description",)} placeholder="Clock Description"/>
      <input type="number" {...register("price", )} placeholder="Clock Price"/>
      <input {...register("img",)} placeholder="Clock Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddWatch;
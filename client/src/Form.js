import React from 'react'
import { useForm } from 'react-hook-form';

export const Form = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
    // Send data to Flask API using fetch or axios
    
    }

  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('title' , {required:true}) } type="text"/>
                    <input {...register('image' , {required:true}) } type="file"/>
                    <button type="submit">Upload</button>
        </form>

    </div>
  )
}

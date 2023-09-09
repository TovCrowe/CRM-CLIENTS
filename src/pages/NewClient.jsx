import { useNavigate, Form, useActionData, redirect } from "react-router-dom"

import Error from "../components/Error";
import { addClient } from "../data/client";
import FormClients from "../components/FormClients";

export async function action({request}){
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get("email")
  //validation
  const errors = [];
  if(Object.values(data).includes('')){
    errors.push('All fields are need it');
  }
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!regex.test(email)){
    errors.push("The Email is not valid")
  }
  if(Object.keys(errors).length){
    return errors;
  }
  await addClient(data)
  return redirect("/");
}


function NewClient() {
  const navigate = useNavigate();
  const errors = useActionData();
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
        <p className='mt-3'>Fill all the fields to register a new client</p>

        <div className='flex justify-end'>
          <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={( ) => navigate(-1)}>
            Back
          </button>
        </div>
        <div className=" mt-20 bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
          {errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error> )}
          <Form
            method="post"
          >
          <FormClients/>

          <input type="submit" 
                className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                value="Register client"
          />
          </Form>
        </div>

    </>
    )
}

export default NewClient
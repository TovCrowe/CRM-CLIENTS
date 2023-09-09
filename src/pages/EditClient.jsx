import React from "react";
import { getClient, updateClient  } from "../data/client";
import FormClients from "../components/FormClients";
import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import Error from "../components/Error";

export async function loader({ params }) {
  const client = await getClient(params.clientId);
  if (Object.keys(client).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Client not found",
    });
  }
  return client;
}


export async function action({ request, params }) {

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
   await updateClient(params.clientId, data);
   return redirect("/");

}

function EditClient() {
  const navigate = useNavigate();
  const client = useLoaderData();
  const errors = useActionData()
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Fill all the fields to edit the client</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className=" mt-20 bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error> )}
        <Form method="post">
          <FormClients client={client} />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="edit client"
          />
        </Form>
      </div>
    </>
  );
}

export default EditClient;

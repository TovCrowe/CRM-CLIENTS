import { useNavigate, Form, redirect } from 'react-router-dom';
import { deleteClient } from '../data/client'

export async function action({ params }) {
  deleteClient(params.clientId)
  return redirect('/')
}

function Client({ client }) {
    const { name, company, email, phone, id } = client;
    const navigate = useNavigate();
    return (
      <tr className='border-b'>
        <td className='p-6 space-y-2'>
          <p className='text-2xl text-gray-800'>{name}</p>
          <p>{company}</p>
        </td>
        <td className='p-6'>
          <p className='text-gray-800'>
            <span className='text-gray-800 uppercase font-bold'>Email:</span>{' '}
            {email}
          </p>
          <p className='text-gray-800'>
            <span className='text-gray-800 uppercase font-bold'>Phone:</span>{' '}
            {phone}
          </p>
        </td>
        <td className='p-6 flex'>
          <button
            type='button'
            className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
            onClick={() => navigate(`/clients/${id}/edit`) }
          >
            Edit
          </button>
          <Form 
            method='post'
            action={`/clients/${id}/delete` }
            onSubmit={(e) => {
              if(!confirm('Are you sure you want to delete this register?')){
                e.preventDefault();
              }
            }}
          >
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'

          >
            Delete
          </button>
          </Form>
        </td>
      </tr>
    );
  }

export default Client
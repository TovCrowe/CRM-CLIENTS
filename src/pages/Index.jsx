import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";
import { getClients } from "../data/client";
export function loader() {
  const clients = getClients();
  return clients;
}

function Index() {

  const dataClients = useLoaderData();

  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
    <p className='mt-3'>List of clients</p>
    {dataClients.length ? (
      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="p-2">Client</th>
            <th className="p-2">Contacts</th>
            <th className="p-2">Accions</th>
          </tr>
        </thead>
        <tbody>
          {dataClients.map( client => (
            <Client
              client={client}
              key={client.id} 
            />
          ))}
        </tbody>
      </table>
    ) : (
      <p> Theres not registred clients</p>
    )}
    </>
  )
}

export default Index
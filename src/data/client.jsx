export async function getClients(){
    const response = await fetch(import.meta.env.VITE_API_URL);
    const result = await response.json();
    console.log(response)
    return result;
}

export async function getClient(id){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await response.json();
    return result;
}


export async function addClient(data){
   try{
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await response.json();
   } catch (error){
    console.log(error);
   }
}

export async function updateClient(id, data){
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })
        await response.json();
   } catch (error){
    console.log(error);
   }
}
export async function deleteClient(id) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Client successfully deleted
            console.log('Client deleted');
        } else {
            // Handle error here, e.g., log an error message
            console.error('Failed to delete client');
        }
    } catch (error) {
        console.error(error);
    }
}
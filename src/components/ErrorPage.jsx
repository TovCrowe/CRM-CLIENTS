import {useRouteError} from "react-router-dom"
function ErrorPage() {
    const error = useRouteError();
  console.error(error);
  return (
    <div className="space-y-8">
        <h1 className="text-center font-black text-4xl text-blue-900">CRM - Clients</h1>
        <p className="text-center text-2xl text-gray-500">Theres an error</p>
        <p className="text-center text-gray-500">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
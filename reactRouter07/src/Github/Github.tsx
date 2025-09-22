import { useLoaderData } from "react-router-dom"
function Github() {
    const data = useLoaderData()
    
    
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">Welcome to my Github Profile!</h1>
      <h1 className="text-xl font-bold">
        My github username is:{" "}
        <span className="text-3xl text-red-600">{data?.name}</span>
      </h1>
      <h1 className="text-lg">My followers are: {data?.followers}</h1>
      <h1 className="text-lg">
        {data?.followers < 5 ? "Your followers are low" : "You are improving"}
      </h1>
    </div>
  );
}

export default Github


export const githubLoader = async () => {
    const resp = await fetch('https://api.github.com/users/DevMazharPro')
    return resp.json()
}
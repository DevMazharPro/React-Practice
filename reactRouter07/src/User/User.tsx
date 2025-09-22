import { useParams } from "react-router-dom"

function User() {
  const {username} = useParams()

  return (
    <div className="text-center bg-slate-300 text-xl font-black">
      User: <span className="font-mono text-3xl text-white">{username}</span>
    </div>
  );
}

export default User
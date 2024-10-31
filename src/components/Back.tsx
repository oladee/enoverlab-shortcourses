import { useNavigate } from "react-router-dom"

const Back = () => {
    const navigate = useNavigate()
  return (
    <div className="px-5 flex justify-end py-10 lg:py-16 lg:px-16">
      <button onClick={()=>{navigate(-1)}} className="w-32 border text-sm font-medium border-[#2D2F31] rounded-md py-2">
        &lt; Back
      </button>
    </div>
  )
}

export default Back

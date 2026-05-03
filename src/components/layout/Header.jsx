import user from "../../assets/imgs/icons/user-icon.svg"
import savat from "../../assets/imgs/icons/savat-icon.svg"
export default function Header() {
  return (
  <div>
    <header className="flex w-[100] gap-5 m-11 bg-white" style={{ marginTop: "1.5rem", marginLeft: "18rem ", marginRight:"2rem",height:"60px", display:"flex", alignItems:"center", justifyContent:"space-around", borderRadius:"10px"  }} >
      <input style={{border:"1px solid black", width:"428px", color:"black", borderRadius:"20px", display:"flex", alignItems:"center", height:"40px", padding:"10px"}} type="text" placeholder='Search...' />
      <div className="flex gap-5">
        <img src={user} alt="" /> 
        <button className="w-[80px] h-30px  "style={{backgroundColor:"#285A43", width:"50px", height:"50px", padding:"10px", borderRadius:"10px"}} >
          <img src={savat} alt="" />
        </button>
      </div>
    </header>
  </div>
  )
}

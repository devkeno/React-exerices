import { Link } from "react-router-dom";
 const Navbar = () => {
    const handleClick = () => {console.log("Keno laptope")}
    const mojklik = (name) => {console.log(name);}
    return ( 
        <nav className="navbar">
            <h1>Welcome to Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                    <button onClick={handleClick}>Klikni me</button>
                    <button onClick={()=>{mojklik("Kenan")}}>Moj Klik</button>
                </div>
        </nav>
     );
}
 
export default Navbar;
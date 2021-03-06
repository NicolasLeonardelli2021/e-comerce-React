import{Link} from 'react-router-dom';

export const Navbar = () =>{
   
   return(
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary  ">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
        <Link className="nav-link active text-white" aria-current="page" to="/productos/audioVideo">Audio y Video</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/productos/gaming">Gaming</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/productos/celularTablet">Celular y Tablet</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="/productos/computacion" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Computacion
          </Link>
        </li>
        <li className="nav-item ">
         <Link className="nav-link  text-white"to="/productos/hogarOficina" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Hogar y Oficina
           </Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link d text-white"to="/productos/herramientas" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Herramientas
           </Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link  text-white" to="/productos/redCables" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Red y Cables
           </Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link d text-white" to="/productos/vehiculos" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Vehiculos
           </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   ) 
}


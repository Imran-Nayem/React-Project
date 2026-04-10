const NavBar = ({ cartCount }) => {
  return (
    <div className="navbar border-b max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <p className=" text-purple-600 px-3 py-2 ">
            AI WORLD
          </p>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        {/* ekhane majhe hidden boshbe case:responsive */}
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Feature</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5 flex">
         <div className="relative cursor-pointer hover:scale-110 transition">
          <span className="text-xl"> 🛒 </span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {cartCount}
          </span>
        </div>
        <a>Login</a>
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
        

      </div>
      
    </div>
  );
};

export default NavBar;
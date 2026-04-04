const NavBar = () => {
  return (
    <div className="navbar border-b">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <p>Ai hublo</p>
        </div>
      </div>
      <div className="navbar-center  md:flex">
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
        <a>Login</a>
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
        

      </div>
      
    </div>
  );
};

export default NavBar;
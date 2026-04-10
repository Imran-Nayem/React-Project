const Pricing = () => {
  return (
    <div className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4"> Simple, Transparent Pricing </h2>
        <p className="text-gray-500 mb-12"> Choose the plan that fits your needs. </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="p-8 rounded-2xl border hover:shadow-lg transition">
       <h3 className="text-xl font-bold"> Starter </h3>
       <p className="text-3xl font-bold mt-4"> $0 <span className="text-sm"> /month </span> </p>
       <ul className="mt-4 text-gray-500 space-y-2">
            <li> ✔ Access to free tools </li>
            <li> ✔ Basic templates </li>
            <li> ✔ Community support </li>
      </ul>

      <button className="mt-6 w-full border py-2 rounded-lg hover:bg-gray-100"> Get Started </button>
      </div>

     <div className="p-8 rounded-2xl bg-blue-600 text-white shadow-lg scale-105">
        <p className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full inline-block mb-2"> Most Popular </p>
        <h3 className="text-xl font-bold"> Pro </h3>
        <p className="text-3xl font-bold mt-4"> $29 <span className="text-sm"> /month </span> </p>
           <ul className="mt-4 space-y-2">
            <li> ✔ All premium tools </li>
            <li> ✔ Unlimited templates </li>
            <li> ✔ Priority support </li>
           </ul>
      <button className="mt-6 w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100"> Start Trial </button>
      </div>

     <div className="p-8 rounded-2xl border hover:shadow-lg transition">
          <h3 className="text-xl font-bold"> Enterprise </h3>
          <p className="text-3xl font-bold mt-4"> $99 <span className="text-sm"> /month </span> </p>
          <ul className="mt-4 text-gray-500 space-y-2">
            <li> ✔ Team collaboration </li>
            <li> ✔ Custom integrations </li>
            <li> ✔ Dedicated support </li>
          </ul>
          <button className="mt-6 w-full border py-2 rounded-lg hover:bg-gray-100"> Contact Sales </button>
     </div>

    </div>
    </div>
  );
};

export default Pricing;
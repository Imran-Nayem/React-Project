const Steps = () => {
  return (
    <div className="py-20 px-6 bg-white text-center">
    
      <h2 className="text-3xl md:text-4xl font-bold mb-4"> Get Started in 3 Steps </h2>
      <p className="text-gray-500 mb-12"> Start using premium digital tools in minutes, not hours. </p>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
     <div className="p-8 rounded-2xl border hover:shadow-lg transition">
     <div className="text-blue-600 text-3xl font-bold mb-4"> 01 </div>

      <h3 className="text-xl font-semibold mb-2">Create Account</h3>
      <p className="text-gray-500"> Sign up for free in seconds. No credit card required. </p>
    </div>

    <div className="p-8 rounded-2xl border hover:shadow-lg transition">
    <div className="text-blue-600 text-3xl font-bold mb-4"> 02 </div>
      <h3 className="text-xl font-semibold mb-2"> Choose Products </h3>
      <p className="text-gray-500"> Browse our catalog and select tools that fit your needs. </p>
    </div>

    <div className="p-8 rounded-2xl border hover:shadow-lg transition">
    <div className="text-blue-600 text-3xl font-bold mb-4"> 03 </div>
      <h3 className="text-xl font-semibold mb-2"> Start Creating </h3>
      <p className="text-gray-500"> Download and start using your tools immediately. </p>
    </div>
    </div>
    </div>
  );
};

export default Steps;
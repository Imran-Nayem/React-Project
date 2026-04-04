const StatsSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-center">
        
        {/* Item 1 */}
        <div className="flex-1 space-y-2">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm opacity-80">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-12 w-[1px] bg-white/30"></div>

        {/* Item 2 */}
        <div className="flex-1 space-y-2">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm opacity-80">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-12 w-[1px] bg-white/30"></div>

        {/* Item 3 */}
        <div className="flex-1 space-y-2">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;

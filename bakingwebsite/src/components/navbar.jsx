
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-orange-50 shadow-sm position: fixed w-full z-10">
      <h1 className="text-2xl font-serif font-bold text-orange-700">Khosla Bites Bakery</h1>
      <div className="space-x-6 font-medium text-gray-600">
        <a href="#" className="hover:text-orange-500">Menu</a>
        <a href="#" className="hover:text-orange-500">Our Story</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
          Cart (0)
        </button>
      </div>
    </nav>
  );
}
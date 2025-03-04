const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-medium text-black">
        Hello <br />
        <span className="text-3xl font-extrabold">Sarthak✌️</span>
      </h1>
      <button className="cursor-pointer rounded-sm bg-black px-5 py-2 text-white shadow hover:bg-gray-800">
        Log out
      </button>
    </div>
  );
};

export default Header;

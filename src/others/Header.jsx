const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-extrabold">Sarthak✌️</span>
      </h1>
      <button className="rounded-sm bg-red-500 px-5 py-2 text-white">
        log out
      </button>
    </div>
  );
};

export default Header;

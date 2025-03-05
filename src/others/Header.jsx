import Button from "../components/Button/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-medium text-black">
        Hello <br />
        <span className="text-3xl font-extrabold">Sarthak✌️</span>
      </h1>
      <Button text="Log Out" className="rounded"/>
    </div>
  );
};

export default Header;

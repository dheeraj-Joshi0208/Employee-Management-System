import Button from "../components/Button/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6">
      <h1 className="text-lg font-medium text-black sm:text-xl md:text-2xl lg:text-3xl">
        Hello <br className="xs:hidden" />
        <span className="text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
          ✌️
        </span>
      </h1>
      <Button
        text="Log Out"
        className="rounded px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:px-4 md:text-base"
      />
    </div>
  );
};

export default Header;

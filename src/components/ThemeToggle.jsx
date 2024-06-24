import { UseGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { handleToggleDarkTheme, isDarkTheme } = UseGlobalContext();
  return (
    <button className="dark-toggle" onClick={handleToggleDarkTheme}>
      {!isDarkTheme ? (
        <BsFillMoonFill className="toggle-icon" />
      ) : (
        <BsFillSunFill className="toggle-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;

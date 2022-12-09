import { ProgressBar } from "../components";
import logo from "../assets/images/logo.svg";

const SplashScreen = (): JSX.Element => {
  return (
    <div className="flex justify-center flex-col p-5 m-5">
      <img src={logo} alt="socially" />
      <ProgressBar />
    </div>
  );
};

export default SplashScreen;

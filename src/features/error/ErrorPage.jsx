import { useTheme } from "../../context/ThemeContext";

function ErrorPage() {
  const { theme } = useTheme();

  return (
    <div
      className={` flex h-[100vh] items-center justify-center theme-${theme} bg-mainBg text-textColor`}
    >
      <p className=" text-2xl font-bold">
        404 NOT FOUND!!
      </p>
    </div>
  );
}

export default ErrorPage;

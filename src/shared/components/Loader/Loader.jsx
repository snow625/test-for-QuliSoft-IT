import { createPortal } from "react-dom";
import style from "./loader.module.css";
import { RotatingLines } from "react-loader-spinner";

const loaderRoot = document.getElementById("loader-root");

const Loader = () => {
  return createPortal(
    <div className={style.overlay}>
      <div className={style.loader}>
        <RotatingLines
          strokeColor="#fc842d"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>,
    loaderRoot
  );
};
export default Loader;

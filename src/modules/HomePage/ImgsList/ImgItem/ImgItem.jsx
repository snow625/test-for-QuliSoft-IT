import { Link, useLocation } from "react-router-dom";
import { memo } from "react";

import style from "./imgItem.module.css";

const ImgItem = (props) => {
  const { ulr, imgName, altForImg, id, userName } = props;
  const from = useLocation();

  return (
    <li className={style.item}>
      <Link to={`/imgs/${id}`} state={{ from }}>
        <img
          className={style.icon}
          src={ulr}
          alt={altForImg}
          width="250"
          height="200"
        />
        <div className={style.textWrapper}>
          <p>{imgName}</p>
          <p className={style.authorName}>{`Author: ${userName}`}</p>
        </div>
      </Link>
    </li>
  );
};

export default memo(ImgItem);

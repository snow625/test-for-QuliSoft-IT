import ImgItem from "./ImgItem";
import style from "./imgsList.module.css";

const ImgList = ({ items }) => {
  const elements = items.map((el) => {
    const { id, ...rest } = el;
    return <ImgItem key={id} id={id} {...rest} />;
  });

  return <ul className={style.list}>{elements}</ul>;
};

export default ImgList;

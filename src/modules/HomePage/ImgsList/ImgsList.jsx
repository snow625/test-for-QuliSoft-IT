import ImgItem from "./ImgItem";
import PropTypes from "prop-types";

import style from "./imgsList.module.css";

const ImgList = ({ items }) => {
  const elements = items.map((el) => {
    const { id, ...rest } = el;
    return <ImgItem key={id} id={id} {...rest} />;
  });

  return <ul className={style.list}>{elements}</ul>;
};

ImgList.defaultProps = {
  items: [],
};

ImgList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ulr: PropTypes.string.isRequired,
      imgName: PropTypes.string.isRequired,
      altForImg: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    })
  ),
};

export default ImgList;

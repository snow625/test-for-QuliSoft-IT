import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImgById } from "../../shared/services/API/unsplash";
import {
  loadingSetState,
  errorSetState,
} from "../../shared/services/utils/halperFunctions";
import initialState from "./initialState";
import Button from "../../shared/components/Button";
import Loader from "../../shared/components/Loader";
import style from "./singleImgPage.module.css";

const SingleImgPage = () => {
  const [state, setState] = useState(initialState);
  const { item, error, loading } = state;

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.from || "/";

  useEffect(() => {
    const fetchImg = async () => {
      setState(loadingSetState);
      try {
        const data = await getImgById(id);
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
            item: {
              src: data.urls.full,
              alt: data.alt_description,
              userName: data.user.first_name || data.user.name,
            },
          };
        });
      } catch (error) {
        setState(errorSetState);
      }
    };
    if (id) {
      fetchImg();
    }
  }, [id]);

  const goBack = () => navigate(prevPageLocation);

  const altForImg = () => {
    return item.alt ? item.alt : `photo by ${item.userName} `;
  };

  return (
    <>
      <div className={`container ${style.singleContainer}`}>
        <div className={style.buttonWrapper}>
          <Button onClick={goBack} type="button" text="Back" />
        </div>

        {!error && !loading && (
          <img src={item.src} alt={altForImg()} width="100%" height="100%" />
        )}
        {error && <p className={style.error}>img not found, press "Back"</p>}
      </div>
      {loading && <Loader />}
    </>
  );
};
export default SingleImgPage;

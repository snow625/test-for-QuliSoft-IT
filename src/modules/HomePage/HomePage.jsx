import SearchForm from "./SearchForm";
import ImgList from "./ImgsList";
import initialState from "./initialState";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getRandomImgs,
  getImgByQwery,
} from "../../shared/services/API/unsplash";
import {
  cleanedData,
  loadingSetState,
  errorSetState,
} from "../../shared/services/utils/halperFunctions";
import Button from "../../shared/components/Button";
import Loader from "../../shared/components/Loader";

import style from "./homePage.module.css";

const HomePage = () => {
  const [state, setState] = useState(initialState);

  useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  let searchFotoName = searchParams.get("qwery");

  useEffect(() => {
    const fetchFotosByQwery = async () => {
      setState(loadingSetState);
      try {
        const data = await getImgByQwery(searchFotoName, state.page);
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
            totalPages: data.total_pages,
            items: [...prevState.items, ...cleanedData(data.results)],
          };
        });
      } catch (error) {
        setState(errorSetState);
      }
    };

    const fetchRandomFotos = async () => {
      setState(loadingSetState);
      try {
        const data = await getRandomImgs();
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
            items: cleanedData(data),
          };
        });
      } catch (error) {
        setState(errorSetState);
      }
    };

    searchFotoName ? fetchFotosByQwery() : fetchRandomFotos();
  }, [searchFotoName, state.page]);

  const handleClick = () =>
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));

  const handleSublit = useCallback(
    (data) => {
      if (data.search.trim() !== searchFotoName) {
        setState(initialState);
        setSearchParams({ qwery: data.search.trim() });
      }
    },
    [searchFotoName, setSearchParams]
  );

  const { items, totalPages, page, error, loading } = state;

  const itemsCheckup = () => {
    if (items.length > 0) {
      return <ImgList items={items} />;
    }
    if (items.length === 0 && !loading) {
      return (
        <p className={style.badReqest}>{`
Nothing found for your request: "${searchFotoName}"`}</p>
      );
    }
  };

  return (
    <>
      <div className={`container ${style.homePageContainer}` }>
        <SearchForm onSubmit={handleSublit} />
        {itemsCheckup()}
        {totalPages > page && (
          <Button type="button" text="Find more" onClick={handleClick} />
        )}
        {error && <p>Sorry, some networ Error</p>}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default HomePage;

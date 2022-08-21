import fields from "./fields";
import initialState from "./initialState";
import Button from "../../../shared/components/Button";
import PropTypes from "prop-types";
import useForm from "../../../shared/hooks/useForm";

import style from "./searchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { search } = state;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        onChange={handleChange}
        value={search}
        {...fields}
      />
      <Button type="sumbit" text="Find" />
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { selectFilterValue } from "../../redux/filters/selector";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const searchValue = useSelector(selectFilterValue);

  const debounced = useDebouncedCallback(
    (value) => handleChangeQuery(value),
    500
  );

  const handleChangeQuery = (newQuery) => {
    dispatch(changeFilter(newQuery));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-searchName`}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        onChange={(event) => debounced(event.target.value)}
        name="searchName"
        id={`${id}-searchName`}
        defaultValue={searchValue}
      />
    </div>
  );
}

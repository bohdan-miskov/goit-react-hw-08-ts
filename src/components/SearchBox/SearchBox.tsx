import { useId } from "react";
import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { selectFilterValue } from "../../redux/filters/selector";
import { changeFilter } from "../../redux/filters/slice";
import { useAppDispatch } from "../../hooks/redux";

export default function SearchBox() {
  const dispatch = useAppDispatch();
  const id = useId();
  const searchValue = useSelector(selectFilterValue);

  const debounced = useDebouncedCallback(
    (value) => handleChangeQuery(value),
    500
  );

  const handleChangeQuery = (newQuery: string) => {
    dispatch(changeFilter(newQuery));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}-searchName`}>
        Find contacts by name or number
      </label>
      <input
        className={css.input}
        type="text"
        onChange={(event) => debounced(event.target.value)}
        name="searchName"
        id={`${id}-searchName`}
        defaultValue={searchValue}
        placeholder="Search John or +380..."
      />
    </div>
  );
}

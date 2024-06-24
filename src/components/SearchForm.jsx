import { UseGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchQueryValue } = UseGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSearchValue = e.target.elements.search.value.trim();
    if (newSearchValue) setSearchQueryValue(newSearchValue);
  };
  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Cat"
        className="form-input search-input"
      />
      <button className="btn">Search</button>
    </form>
  );
};

export default SearchForm;

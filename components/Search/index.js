function Search({ type, name, id, label, placeholder, handleCity }) {
  function handleChange(e) {
    const value = e.target.value;
    handleCity(value);
  }

  return (
    <>
      <label>
        {label}
        <input
          onChange={handleChange}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

export default Search;

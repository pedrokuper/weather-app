function Search({ type, name, id, label, placeholder }) {
  function handleChange(e) {
    const value = e.target.value;
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

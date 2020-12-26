function Search({ type, name, id, label }) {
  <div>
    <label>
      {label}
      <input type={type} name={name} id={id} />
    </label>
  </div>;
}

export default Search;

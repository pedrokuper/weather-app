function Button({ name, handleWeather }) {
  function handleClick() {
    handleWeather();
  }

  return <button onClick={handleClick}>{name}</button>;
}

export default Button;

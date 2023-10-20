const Mask = () => {
  const [hasError, setHasError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length < 10) setHasError(true);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      {hasError && <Tooltip/>}
    </div>
  )
}
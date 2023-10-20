const Password = () => {
  const [isShowEyeIcon, setIsShowEyeIcon] = useState(false);
  const [hasError, setHasError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length < 6 && !/[a-zA-Z\$\s\.]/.test(value)) {
      setHasError(true);
    }
  }

  const toggleEyeIcon = () => setIsShowEyeIcon(value => !value);

  return (
    <div onClick={toggleEyeIcon}>
      <input type="password" onChange={handleChange}/>
      {isShowEyeIcon && <Icon icon="eye"/>}
      {hasError && <Tooltip/>}
    </div>
  )
}
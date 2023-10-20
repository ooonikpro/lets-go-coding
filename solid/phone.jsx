const Phone = ({ value, onChange }) => {
  // +7 (XXX) XXX-XX-XX
  const handleChange = (value) => {
    onChange(value.replace(/\D/, '')); // 7XXXXXXXXXX
  }

  return <Mask mask="phone" value={value} onChange={handleChange}/>
}
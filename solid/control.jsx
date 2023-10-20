import { useEffect } from "react";

const InputDadata = ({ value, onChange, httpClient, responseMapFn, createUrlFn }) => {
  const [localValue, setLocalValue] = useState(value);
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setLocalValue(e.target.value);
  }

  const handleClick = (option) => {
    setLocalValue(option.label);

    onChange(option.value);
  }

  const request = async () => {
    const data = await httpClient.request(createUrlFn(localValue));

    if (Array.isArray(data)) {
      setOptions(data.map(responseMapFn));
    }
  }

  useEffect(() => {
    request();
  }, [localValue]);

  return (
    <div>
      <input type="text" value={localValue} onChange={handleChange}/>

      <div>
        {
          options.map((option) => (<p onClick={() => handleClick(option)}>{option.label}</p>))
        }
      </div>
    </div>
  )
}

const createInputFIODadata = ({ httpClient }) => {
  const responseMapFn = (data) => data.map((item) => ({
    label: item.fio,
    value: item.fio
  }))
  const createUrlFn = (value) => `/dadata?q=${value}`

  return ({ value, onChange }) => (
    <InputDadata
      value={value}
      onChange={onChange}
      httpClient={httpClient}
      responseMapFn={responseMapFn}
      createUrlFn={createUrlFn}
    />
  )
}

const createInputPassportDadata = ({ httpClient }) => {
  const responseMapFn = (data) => data.map((item) => ({
    label: item.passport,
    value: item.code
  }))
  const createUrlFn = (value) => `/dadata?passport=${value}`

  return ({ value, onChange }) => (
    <InputDadata
      value={value}
      onChange={onChange}
      httpClient={httpClient}
      responseMapFn={responseMapFn}
      createUrlFn={createUrlFn}
    />
  )
}

const createInputINNDadata = ({ httpClient }) => {
  const responseMapFn = (data) => data.map((item) => ({
    label: item.inn,
    value: item.inn
  }))
  const createUrlFn = (value) => `/dadata?inn=${value}`

  return ({ value, onChange }) => (
    <InputDadata
      value={value}
      onChange={onChange}
      httpClient={httpClient}
      responseMapFn={responseMapFn}
      createUrlFn={createUrlFn}
    />
  )
}

const InputFIO = createInputFIODadata({ httpClient });
const InputPassport = createInputPassportDadata({ httpClient });
const InputINN = createInputINNDadata({ httpClient });

const Form = () => {
  return (
    <div>
      <InputFio value={} onChange={}/>
      <InputPassport value={} onChange={}/>
      <InputINN value={} onChange={}/>
    </div>
  )
}
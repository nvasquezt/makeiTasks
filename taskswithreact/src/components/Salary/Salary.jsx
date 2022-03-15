/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

function Salary() {
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({});
  const [salary, setSalary] = useState(0);
  const [hours, setHour] = useState(0);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    // console.log(value,name)

    // if (name=== 'hours'){
    //     setHour(value)
    // } else{
    //     setSalary(value)
    // }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCalculate = () => {
    setTotal(form.hours * form.salary);
  };

  return (
    <div>
      <h1>Salary</h1>
      <div>
        <input type="number" name="hours" placeholder="enter hours" onChange={handleChange} />
        <input type="number" name="salary" placeholder="enter Rate by Hour" onChange={handleChange} />
        <input type="number" name="tax" placeholder="enter Tax" onChange={handleChange} />

        <button type="button" onClick={handleCalculate}>Calculate</button>
        <h1>
          El salario es de:
          {' '}
          {total}
        </h1>

      </div>
    </div>
  );
}

export default Salary;

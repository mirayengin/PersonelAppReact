// import axios from 'axios'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const BASE_URL = "http://127.0.0.1:8000";
const Home = () => {
  const [getDepartments, setGetDepartments] = useState([]);
  const navigate = useNavigate()
  const getData = async () => {
    const { data } = await axios(`${BASE_URL}/api`);
    console.log(data);
    setGetDepartments(data)
  };

  const handleDepartmant = (e) => {
    console.log(e.target.innerText);
    const departments = getDepartments.filter((item) => item.name === e.target.innerText)
    // departments[0]?.name && navigate(`${BASE_URL}/${departments[0].name}`)
    departments[0]?.name && navigate(`${departments[0].name}`)
    console.log(departments[0].name);

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table>
        <th>
          <td>Departments Name</td>
          <td>Personel Count Of Departments</td>
        </th>
        {getDepartments?.map((item, indeks) => {
          return (
            <tr key={indeks} onClick={handleDepartmant}>
          <td>{item.name }</td>
          <td>{item.personal_count}</td>
        </tr>
          )
        })}
      </table>
    </div>
  );
};

export default Home;

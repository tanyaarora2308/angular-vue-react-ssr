import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setData(response.data);
        console.log(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getData();
  }, []);

  return (
    <div >
      <br/>
      <h1 style={{textAlign:"center"}}>Server Side Rendering React</h1>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ol>
        {data &&
          data.map((props) => (
            <li key={props.id}>
              <p><span style={{fontWeight:"700"}}>{props.name}:</span> {props.address.street} {props.address.suite} {props.address.city}</p>
            </li>
          ))}
      </ol>
    </div>
  );
}

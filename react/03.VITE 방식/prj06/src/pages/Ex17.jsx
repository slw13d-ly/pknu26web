import { useState } from "react";
import axios from "axios";

const Ex17 = () => {
    const [sdata, setSdata] = useState({ username:"", password:""})
    const [mydata, setMyData] = useState("")
    
    const handleInput = e => {
        setSdata(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const sendPost = () => {
        axios.post("/data", sdata).then(result => console.log(result.data));
    }

  return (
    <div>
      <h1>17. Axios로 데이터 통신</h1>
      <h2>nodejs 위에서 bulid하여 동작</h2>
      <div>
        <div>
          <div>서버로 보내는 값:</div>
          <label htmlFor="sendMsg">아이디:</label>
          <input type="text" id="sendMsg" name="username" onChange={handleInput} value={sdata.username}/><br />
          <label htmlFor="password">패스워드:</label>
          <input type="password" id="password" name="password" onChange={handleInput} value={sdata.password}/><br />
          <button onClick={sendPost}>전송</button>
        </div>
        <div>username: {sdata.username}</div>
        <div>password: {sdata.password}</div>
        <hr />
        <div>
          <div>서버에서 받은 값:</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Ex17;

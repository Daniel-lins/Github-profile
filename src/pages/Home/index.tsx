import react, { useState, useEffect } from "react";
// import { GitInformation } from "./styles";

import { getUserData } from "../../services/api";

export interface UserData {
  login: string;
  avatar_url: string;
}

export const Home = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [user, setUser] = useState("");

  const getUser = async () => {
    try {
      const data = await getUserData(user);
      console.log(userData);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="teste">
      {" "}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="insira aqui o user do seu GitHub "
      />
      <button type="button" onClick={() => getUser()}></button>
      <div>
        {userData.map((c) => (
          <div>
            <p>Nome {c.login} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

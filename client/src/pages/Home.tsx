import React from "react";
import { useSelector } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";

import { selectUserDetails } from '../store/selctors';

const Home: React.FC<RouteComponentProps> = () => {
  
  const user = useSelector(selectUserDetails);
  
  return (
    <div>
      <h1>Home</h1>
      <br/>
      <h4>Wellcome {user?.name}</h4>
    </div>
  );
};

export default Home;

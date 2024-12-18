import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

function RetailerRoute() {

    const { currentUser } = useSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser.type !== "retailer") navigate("/");
    }, []);

  return (
    currentUser ? <Outlet /> : "Not Validated"
  )
}

export default RetailerRoute;

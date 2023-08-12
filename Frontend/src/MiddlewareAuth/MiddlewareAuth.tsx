import { getAuth } from "firebase/auth";
import React, { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MiddlewareAuth({ children }: { children: PropsWithChildren }) {
  const Auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  useEffect(() => {
    if (
      location.indexOf("/company") !== -1 &&
      location !== "/company/access" &&
      Auth.currentUser === null
    ) {
      navigate("/");
    }
  }, [location]);

  return children;
}

export default MiddlewareAuth;
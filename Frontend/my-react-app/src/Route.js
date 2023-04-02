import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import MyPage from "../MyPage/mypage";
const ROUTES = [
    {path: "/mypage", key: "MYPAGE", component: () => <MyPage /> }
]
export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
      
      
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
    
      
      </Switch>
    </Router>
  );
}
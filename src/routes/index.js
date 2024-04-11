import React from "react";
import { Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig";

const AppRoutes = () => {
  const renderRoute = (route) => {
    const { path, component: Component } = route;

    const renderComponent = () => {
      return <Component />;
    };

    return <Route key={path} path={path} element={renderComponent()} />;
  };

  return <Routes>{routesConfig.map((route) => renderRoute(route))}</Routes>;
};

export default AppRoutes;

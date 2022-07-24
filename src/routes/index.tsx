import { useRoutes } from "solid-app-router"
import { Component } from "solid-js"
import { protectedRoutes } from "./Protected"

export const AppRoutes: Component = () => {
    const routes = useRoutes(protectedRoutes);

    console.log(routes);

    return (
        <>{routes}</>
    );
}

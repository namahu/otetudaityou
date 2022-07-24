import { Calendar } from "../feature/calendar";
import { useRoutes } from "solid-app-router"
import { Component } from "solid-js"
import { protectedRoutes } from "./Protected"
import { publicRoutes } from "./public";

export const AppRoutes: Component = () => {

    const commonRoute = [{
        path: "/",
        component: Calendar
    }];

    const routes = useRoutes([...protectedRoutes, ...publicRoutes, ...commonRoute]);

    return (
        <>{routes}</>
    );
}

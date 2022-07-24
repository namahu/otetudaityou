import { Login } from "../feature/auth";
import { RouteDefinition } from "solid-app-router";

export const publicRoutes: RouteDefinition[] = [
    {
        path: "/auth/login",
        component: Login
    }
];

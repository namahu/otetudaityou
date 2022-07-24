import { Component, lazy } from "solid-js";
import { Outlet, Route, RouteDefinition, RouteProps, Router, Routes, useRoutes } from "solid-app-router";

import { MainLayout } from "../components/Layout";

import { Calendar } from "../feature/calendar";

const App: Component = () => {
    return (
        <MainLayout>
            <div>
                <h1>protected</h1>
            </div>
            <Outlet />
        </MainLayout>
    );
}

export const protectedRoutes: RouteDefinition[] = [
    {
        path: "/app",
        component: App,
        children: [
            { path: "/calendar", component: Calendar }
        ]
    }
];

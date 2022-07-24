import { Component, JSX } from "solid-js";

type LayoutProps = {
    children: JSX.Element;
};

export const MainLayout: Component<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}

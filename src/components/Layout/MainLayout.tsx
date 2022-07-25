import { Component, JSX } from "solid-js";

import styles from "./MainLayout.module.css";

type LayoutProps = {
    children: JSX.Element;
};

export const MainLayout: Component<LayoutProps> = ({ children }) => {
    return (
        <>
            <main class={styles.main_container}>
                {children}
            </main>
        </>
    );
}

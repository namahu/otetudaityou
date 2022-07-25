import { Component, JSX } from "solid-js";

import styles from "./MainLayout.module.css";

type LayoutProps = {
    children: JSX.Element;
};

const Header = () => {
    return (
        <header class={styles.site_header}>
            <div class={styles.site_title}>
                Title
            </div>
        </header>
    );
}

export const MainLayout: Component<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main class={styles.main_container}>
                {children}
            </main>
        </>
    );
}

import { Component } from "solid-js";

import styles from "./Calendar.module.css";
import { CalendarBody } from "./CalendarBody";

export const Calendar: Component = () => {
    return (
        <>
            <h1>calendar</h1>
            <table class={styles.calendar_container}>
                <thead>
                    <tr>
                        <th>日</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                    </tr>
                </thead>
                <tbody>
                    <CalendarBody year={2022} month={7} />
                </tbody>
            </table>
        </>
    );
}

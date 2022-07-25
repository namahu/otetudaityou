import { Component } from "solid-js";
import { createCalendarBody } from "../api/createCalendarBody";

import styles from "./Calendar.module.css";

export const Calendar: Component = () => {
    const calendarBody = createCalendarBody(2022, 7);
    console.log(calendarBody);
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
                    {calendarBody.map((row) => {
                        return (
                            <tr>
                                {row.map((col) => {
                                    return (
                                        <td>
                                            {col}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

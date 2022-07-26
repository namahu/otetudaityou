import { Component } from "solid-js";

export type CalendarBodyProps = {
    year: number;
    month: number;
}

const createCalendarDate = (year: number, month: number) => {
    const firstDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0).getDate();

    const firstDayOfWeek = firstDate.getDay();

    let countDate = 1;
    let element = [];

    for (let row = 0; row < 6; row++) {
        const rowElement = [];
        for (let col = 0; col < 7; col++) {
            if (row === 0 && col < firstDayOfWeek) {
                rowElement.push("");
            } else if (countDate > lastDate) {
                rowElement.push("");
            } else {
                rowElement.push(countDate);
                countDate++;
            }
        }
        element.push(rowElement);
    }
    return element;
}

const openDateView = (date: number) => {
    console.log(date);
}

export const CalendarBody: Component<CalendarBodyProps> = ({
    year,
    month
}) => {
    const calendarDate = createCalendarDate(year, month);

    return (
        calendarDate.map((row) => {
            return (
                <tr>
                    {row.map((col) => {
                        if (typeof col !== "number") {
                            return <td></td>;
                        }
                        return (
                            <td onClick={() => {
                                openDateView(col);
                            }}>
                                {col}
                            </td>
                        );
                    })}
                </tr>
            );
        })
    );
}

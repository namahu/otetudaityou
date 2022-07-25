export const createCalendarBody = (year: number, month: number) => {
    // 月の最初の曜日と最後の日を求める

    const firstDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0).getDate();

    const firstDayOfWeek = firstDate.getDay();

    let countDate = 1;
    let element = [];

    for (let row = 0; row < 6; row++) {
        const rowElement = [];
        for (let col = 0; col < 7; col++) {
            if (row === 0 && col < firstDayOfWeek) {
                // 月の最初の曜日までは空白を表示
                rowElement.push("");
            } else if (countDate > lastDate) {
                // 月の最後の日までは空白を表示
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

export const initialState = {
    packages: [
        {
            id: 1,
            name: "Нямушка",
            with: "с фуа-гра",
            info: "<b>10</b> порций<br/>мышь в подарок",
            volumeDigits: "0,5",
            volumeUnit: "кг",
            hover: false,
            selected: false,
            disabled: false,
            textDescription: "Сказочное заморское яство",
            textDescriptionSelectedHover: "Котэ не одобряет?",
            textCallSelected: "Печень утки разварная с артишоками.",
            textCallDisabled: "Печалька, с фуа-гра закончился.",
        },
        {
            id: 2,
            name: "Нямушка",
            with: "с рыбой",
            info: "<b>40</b> порций<br/><b>2</b> мыши в подарок",
            volumeDigits: "2",
            volumeUnit: "кг",
            hover: false,
            selected: true,
            disabled: false,
            textDescription: "Сказочное заморское яство",
            textDescriptionSelectedHover: "Котэ не одобряет?",
            textCallSelected: "Печень утки разварная с артишоками.",
            textCallDisabled: "Печалька, с фуа-гра закончился.",
        },
        {
            id: 3,
            name: "Нямушка",
            with: "с курой",
            info: "<b>100</b> порций<br/><b>5</b> мышей в подарок<br/>заказчик доволен",
            volumeDigits: "5",
            volumeUnit: "кг",
            hover: false,
            selected: false,
            disabled: true,
            textDescription: "Сказочное заморское яство",
            textDescriptionSelectedHover: "Котэ не одобряет?",
            textCallSelected: "Печень утки разварная с артишоками.",
            textCallDisabled: "Печалька, с фуа-гра закончился.",
        }
    ]
}
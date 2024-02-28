import { useEffect, useState } from 'react'

export const UseCurrencyInfo = (currency) => {
    const currencyGetUri = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(currencyGetUri).then((res) => res.json()).then((res) => setData(res[currency]));
        console.log(data, "inside");
    }, [currency])
    console.log(data, "outside");
    return data;
}

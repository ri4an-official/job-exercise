import { useEffect, useState } from "react"
import {
    setLettersCount,
    setStartWidth,
    setWidth,
    setWordsCount,
} from "../models/setting"

export const Setting = ({ title, values }: { title: string; values: number[] }) => {
    const [value, setValue] = useState(values[0])
    useEffect(() => {
        switch (title) {
            case "Количество слов":
                setWordsCount(value)
                break
            case "Стартовое расстояние":
                setStartWidth(value)
                break
            case "Количество букв в словах":
                setLettersCount(value)
                break
            case "Расстояние":
                setWidth(value)
                break
        }
    }, [value])
    return (
        <span
            style={{
                display: "inline-block",
                width: "50%",
                borderWidth: "100px",
                borderRadius: "15px",
                borderColor: "black",
            }}
        >
            <h3>{title}</h3>
            <p>
                {values.map((n) => (
                    <span>{n} </span>
                ))}
            </p>
            <input
                value={value}
                onChange={(e) => setValue(+e.target.value)}
                type="range"
                step={values[2] - values[1]}
                min={values[0]}
                max={values[values.length - 1]}
            />{" "}
            {value}
        </span>
    )
}

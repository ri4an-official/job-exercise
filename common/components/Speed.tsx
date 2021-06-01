import { useState } from "react"

export const Speed = () => {
    const [value, setValue] = useState(1)
    return (
        <>
            <h1>Скорость: {value} сек.</h1>
            <button onClick={() => setValue(value > 1 ? value - 0.5 : 1)}>-</button>
            <button onClick={() => setValue(value + 0.5)}>+</button>
        </>
    )
}

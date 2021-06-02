import { useStore } from "effector-react"
import { $speed, setSpeed } from "../models/setting"

export const Speed = () => {
    const speed = useStore($speed)
    return (
        <>
            <h1>Скорость: {speed} сек.</h1>
            <button onClick={() => setSpeed(speed > 1 ? speed - 0.5 : 1)}>-</button>
            <button onClick={() => setSpeed(speed + 0.5)}>+</button>
        </>
    )
}

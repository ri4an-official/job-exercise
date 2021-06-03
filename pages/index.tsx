import Router from "next/router"
import Head from "next/head"
import { Setting } from "../common/components/Setting"
import { Speed } from "../common/components/Speed"
import { useStore } from "effector-react"
import {
    $lettersCount,
    $speed,
    $startWidth,
    $width,
    $wordsCount,
} from "../common/models/setting"
import { range } from "lodash"
export default () => {
    const wordsCount = useStore($wordsCount)
    const lettersCount = useStore($lettersCount)
    const width = useStore($width)
    const startWidth = useStore($startWidth)
    const speed = useStore($speed)
    return (
        <>
            <Head>
                <title>Поле зрения</title>
            </Head>
            <main>
                <h1 className="center">Тренажер игры "Поле Зрения"</h1>
                <p className="center">
                    <Setting title="Количество слов" values={range(1, 11)} />
                    <Setting title="Стартовое расстояние" values={range(5, 41, 5)} />
                    <Setting title="Количество букв в словах" values={range(3, 13)} />
                    <Setting title="Расстояние" values={range(5, 41, 5)} />
                </p>
                <Speed />
                <button
                    style={{ width: "60px", height: "30px" }}
                    onClick={() => {
                        Router.push(
                            `/start?wordsCount=${wordsCount ?? 5}
                            &lettersCount=${lettersCount ?? 6}
                            &startWidth=${startWidth ?? 50}
                            &width=${width ?? 100}
                            &speed=${speed ?? 1}`
                        )
                    }}
                >
                    Start
                </button>
            </main>
        </>
    )
}

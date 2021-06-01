import Router from "next/router"
import Head from "next/head"
import { Setting } from "../common/components/Setting"
import { Speed } from "../common/components/Speed"
import { useStore } from "effector-react"
import {
    $lettersCount,
    $startWidth,
    $width,
    $wordsCount,
} from "../common/models/setting"
export default () => {
    const wordsCount = useStore($wordsCount)
    const lettersCount = useStore($lettersCount)
    const width = useStore($width)
    const startWidth = useStore($startWidth)
    return (
        <>
            <Head>
                <title>Поле зрения</title>
            </Head>
            <main style={{ padding: "1rem", textAlign: "center" }}>
                <h1 style={{ textAlign: "center" }}>Тренажер игры "Поле Зрения"</h1>
                <p style={{ textAlign: "center" }}>
                    <Setting
                        title="Количество слов"
                        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    />
                    <Setting
                        title="Стартовое расстояние"
                        values={[5, 10, 15, 20, 25, 30, 35, 40]}
                    />
                    <Setting
                        title="Количество букв в словах"
                        values={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    />
                    <Setting
                        title="Расстояние"
                        values={[5, 10, 15, 20, 25, 30, 35, 40]}
                    />
                </p>
                <Speed />
                <button
                    style={{ width: "60px", height: "30px" }}
                    onClick={() => {
                        Router.push(
                            `/start?countWords=${wordsCount}
                            &countLetters=${lettersCount}
                            &startWidth=${startWidth}
                            &width=${width}`
                        )
                    }}
                >
                    Start
                </button>
            </main>
        </>
    )
}

import { useRouter } from "next/router"
import Head from "next/head"
import { useEffect, useState } from "react"
import { words } from "./../common/models/data.json"
export default () => {
    const { query } = useRouter()
    const [index, setIndex] = useState(0)
    const filterWords = words
        .filter((w) => w.length === +query.wordsCount)
        .sort((_) => Math.random() - 0.5)
        .slice(0, +query.wordsCount + 1)
    const [word, setWord] = useState(filterWords[0])
    useEffect(() => {
        const t = setInterval(() => {
            if (index < filterWords.length) {
                setIndex(index + 1)
                console.log("Index:", index)
                setWord(filterWords[index])
            } else clearInterval(t)
        }, +query.speed * 1000)
    }, [])
    return (
        <p>
            <Head>
                <title>Start</title>
            </Head>
            <p className="show center">
                {index <= +query.wordsCount ? (
                    <>
                        <span className="left word">
                            {word.substring(0, Math.floor(word.length / 2))}
                        </span>
                        <b> | </b>
                        <span className="right word">
                            {word.substring(Math.floor(word.length / 2), word.length)}
                        </span>
                    </>
                ) : (
                    <>
                        <img src="" alt="Finish" />
                        <br />
                        <b>Отличная работа!</b>
                    </>
                )}
            </p>
        </p>
    )
}

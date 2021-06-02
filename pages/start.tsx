import { useRouter } from "next/router"
import { words } from "./../common/models/data.json"
import Head from "next/head"
import { useState } from "react"
export default () => {
    const { query } = useRouter()
    const [showWord, setShowWord] = useState("вселенная")
    const [index, setIndex] = useState(0)
    const filterWords = words
        .filter((w) => w.length === +query.lettersCount)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)
    return (
        <p>
            <Head>
                <title>Start</title>
            </Head>
            <h2>{index + " " + +query.speed}</h2>
            <pre>{JSON.stringify(query, null, 2)}</pre>
            <p>
                <span>{showWord?.substring(0, Math.floor(showWord.length / 2))}</span>
                <span> - </span>
                <span>
                    {showWord?.substring(
                        Math.floor(showWord.length / 2),
                        showWord.length
                    )}
                </span>
            </p>
        </p>
    )
}

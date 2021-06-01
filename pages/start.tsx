import { useRouter } from "next/router"

export default () => {
    const { query } = useRouter()
    return Object.keys(Array(1000).fill(0))
        .reverse()
        .map((k) => <li>{k}</li>)
}

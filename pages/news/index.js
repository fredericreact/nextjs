import Link from 'next/link'
import {Fragment} from 'react'

const NewsPage = () => {
    return (
    <Fragment>
    <h1>The News Page</h1>
    <ul>
    <li>
        <Link href='/news/nextjs-is-great'>
            Nextjs is great
        </Link>
    </li>
    <li>Something Else</li>
    </ul>
    </Fragment>
    )
}

export default NewsPage;
# NextJS

The React Framework for Production

React is a javascript library

Framework vs Library : Framework is bigger and gives clear rules on how to write code and structure files

NextJS solves common problem and makes building React apps easier

Key feature 1 : Server-side rendering : Page pre-rendered : good for SEO and initial loading
Key feature 2 : File-based Routing : Define pages and routes with files and folder instead of code
Key feature 3 : Fullstack capabilities : Easily add backend code to your Next / React apps

![image](https://user-images.githubusercontent.com/104289891/211045518-f5ab5fb4-1b5d-44ff-a420-e388296e69c0.png)


## Create New Next.js Project and App

```javascript
npx create-next-app@latest
```

## run server

```javascript
npm run dev
```

## Extract Dynamic pages with parameters

```javascript
import { useRouter } from 'next/router'
 
const DetailPage = () => {
    const router = useRouter();
 
    const newsId = router.query.newsId;
 
    return <h1>The Detail Page</h1>
}
 
export default DetailPage;

```

## Linking Between Pages

```javascript
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

```

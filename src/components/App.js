import React from 'react'

import Accordion from './Accordion'
import Search from './Search'

export default () => {

    const items = [
        {title:"What is React?", content:"React is a JavaScript front-end framework"},
        {title:"Why use React?", content:"React is the favorite JS library among engineers"},
        {title:"How you use React?", content:"You use it by creating components"},
    ]

    return (
        <div>
            <Search />
            {/* <Accordion items={items}/> */}
        </div>
    )
}
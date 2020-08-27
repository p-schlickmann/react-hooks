import React, {useState} from 'react'

import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'

export default () => {

    const items = [
        {title:"What is React?", content:"React is a JavaScript front-end framework"},
        {title:"Why use React?", content:"React is the favorite JS library among engineers"},
        {title:"How you use React?", content:"You use it by creating components"},
    ]

    const options = [
        {label: 'The color Red', value: 'red'},
        {label: 'The color Blue', value: 'blue'},
        {label: 'The color Green', value: 'green'},
    ]

    const [selected, setSelected] = useState(null)

    return (
        <div className='ui container'>
            <Dropdown 
            options={options} 
            label="Select a color"
            setSelected={setSelected}
            selected={selected}
            />
            {/* <Search /> */}
            {/* <Accordion items={items}/> */}
        </div>
    )
}
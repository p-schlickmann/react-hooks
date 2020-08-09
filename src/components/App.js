import React, {useState} from 'react'

import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'
import Nav from './Nav'
import Header from './Header'


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
            <Header />
            <Nav path="/translate">
                <Translate />
            </Nav>
            <Nav path="/">
                <Accordion items={items}/>
            </Nav>
            <Nav path='/search'>
                <Search />
            </Nav>
            <Nav path='/dropdown'>
                <Dropdown 
                options={options} 
                label="Select a color"
                setSelected={setSelected}
                selected={selected}
                />
            </Nav>
        </div>
    )
}
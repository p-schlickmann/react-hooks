import React, { useState } from 'react'


const Accordion = (props) => {
    const [activeIndex, setIndex] = useState(null)

    

    const renderedItems = props.items.map((item, index) => {
        const isActive = index===activeIndex ? 'active' : '' 
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${isActive}`} onClick={() => setIndex(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${isActive}`}>
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>    
    )
}

export default Accordion

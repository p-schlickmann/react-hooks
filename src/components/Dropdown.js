import React, {useState, useEffect, useRef} from 'react'


const Dropdown = ({options, label, setSelected, selected}) => {

    const [isOpen, setDropdown] = useState(false)
    const ref = useRef()

    const renderedOptions = options.map(option => {
        if(selected){
            if (option.value === selected.value) {
                return null
            }
        }
        return (
            <div 
            key={option.value} 
            className="item" 
            onClick={() => setSelected(option)}>
                {option.label}
            </div>
        )
    })

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return
            }
            setDropdown(false)
            }
        
        document.body.addEventListener('click', onBodyClick)

        return document.body.removeEventListener('click', onBodyClick)
        
    }, [])

    return (
        <div className='ui form' ref={ref}>
        <div className="field">
            <label className='label'>
                {label}
            </label>
            <div className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`} onClick={() => setDropdown(!isOpen)}>
                <i className="dropdown icon"></i>
                <div className="text" onClick={() => setDropdown(!isOpen)}>
                    { !selected ? label : selected.label }
                </div>
                <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dropdown

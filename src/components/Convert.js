import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Convert = ({language , text}) => {
    const [translatedText, setTranslated] = useState('')
    const [previousTimeout, setNewTimeout] = useState(null)

    useEffect(() => {
        
        if (language && text) {
            const getResponse = async () => {
                const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {} , {
                    params: {
                        q: text,
                        target: language.value,
                        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM' 
                    }
                })
                if (!response.error){
                    setTranslated(response.data.data.translations[0].translatedText)
                } else {
                    setTranslated('')
                }
                
            }
            setNewTimeout(
                setTimeout(() => {
                    text && language ? getResponse() : setTranslated('') 
                }, 500)
            ) 
        } 

        return clearTimeout(previousTimeout)
        
    }, [language, text])

    return (
        <div>
            {translatedText}
        </div>
    )
}


export default Convert

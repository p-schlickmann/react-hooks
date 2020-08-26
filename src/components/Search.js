import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [previousTimeout, setNewTimeout] = useState(null)
    
    useEffect(() => {
        clearTimeout(previousTimeout)
        const search = async () => {
            const result = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                  action: 'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: term,
                },
              })
            setResults(result.data.query.search)        
        }
        setNewTimeout(
            setTimeout(() => {
                term ? search() : setResults([]) 
            }, 500)
        ) 
        
    }, [term])

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid}className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Read</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}>
                    </span>
                    
                </div>
            </div>
        )
    })

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Search:</label>
                    <input type="text" value={term} 
                        onChange={(e) => setTerm(e.target.value)}>
                    </input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search

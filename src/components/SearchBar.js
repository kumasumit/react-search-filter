import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const SearchBar = ({posts, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault();
    const handleChange = (e) =>{
        //if search input is empty
        if(!e.target.value){
            return setSearchResults(posts)
        }
        //if search input is not empty
        else{
            const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
            setSearchResults(resultsArray)
        }

    }
  return  (
    <header>
        <form className = "search" onSubmit={handleSubmit}>
            <input 
               className='search__input'
            //    value={searchText}
               onChange={handleChange}
               type="text"
               id="search"
             />  
            <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    </header>
  )
}
 
export default SearchBar
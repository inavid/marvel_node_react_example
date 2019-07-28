import React from 'react'
import CharacterRow from '../CharacterRow/CharacterRowContainer'
import PaginateContainer from '../Pagination/PaginationContainer';
import Loading from '../Loading/LoadingContainer';

const HomeDumb = (props) => {
  return(
    <div className="homeContainer">
      <div className="box">
        <div className="container-1">
            <span className="icon"><i className="fa fa-search"></i></span>
            <input  
              type="search" 
              name="search"
              className="searchInput"
              placeholder="Search..."
              onChange={props.handleSearch} 
            />
        </div>
      </div>
      {
        (props.is_loading) ?
          <Loading />
        : 
          props.xmen.map(row => {
            return <CharacterRow 
              key={row.id}
              character={row}
              handleRowClick={props.handleRowClick}
            />
          })
      }
      <PaginateContainer 
        pageCount={props.pageCount}
        handlePaginationClick={props.handlePaginationClick}
      />
    </div>
  )
}

export default HomeDumb
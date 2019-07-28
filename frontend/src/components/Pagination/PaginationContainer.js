import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

class PaginateContainer extends Component {
    render(){
        return(
            <div className="center">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.props.pageCount}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={0}
                    onPageChange={this.props.handlePaginationClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}

export default PaginateContainer
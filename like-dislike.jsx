import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';





function utils(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
return _(items).slice(startIndex).take(pageSize).value();

}


class Like extends React.Component {
		state = {isLiked : true}
	
	handleClick = () => {
		!this.state.isLiked ? this.setState({isLiked : true}) : this.setState({isLiked : false})
		}


    render() {
        let classes = "fa fa-heart";
        if(this.state.isLiked) classes += "-o"
        return(
            <i onClick = {this.handleClick} style = {{cursor : 'pointer'}} className={classes} aria-hidden="true"></i>
        )
    } }

const Pagination = (props) => {
    const {pageSize, currentPage, ItemsCount, onPageChange} = props;
    const pagesCount = Math.ceil(ItemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1,pagesCount + 1);
    return <nav>
        <ul className="pagination">
       {pages.map(page => 
        <li key = {page} onClick = {()=> onPageChange(page)} 
        className= {page === currentPage ?  "active page-item" : "page-item"}>
        <a className="page-link">{page}</a></li>
        )}
            
        </ul>
    </nav>
    ;
}

class Movies extends Component {
    state = {
        currentPage : 1,
        pageSize : 3,
        listItems : ['Pen', 'Copy', 'Eraser','Marker', 'Ink','A4 Paper','Pencil', 'Cutter']
    }



    handleDelete = (index) => {
        const newItems = this.state.listItems.filter((m,i) => i !== index);
        this.setState({listItems : newItems})
    }
    handlePageChange = (page) => {
        this.setState({currentPage : page})
    }

    render() {
        const {pageSize, currentPage, listItems : allItems} = this.state;
        const listItems = utils(allItems, currentPage, pageSize)
        const count = this.state.listItems.length;
        if(count === 0) return <p>There are no items in the database.</p> 
        return (
            <React.Fragment>
            <p>There are {count} items in the database.</p>
            <table className="table">
                <thead>
                    <tr >
                        <th>Items</th>
                        <th></th>
                        <th></th>
                    </tr>
             </thead>
                <tbody>
                {listItems.map((item, index)=>  
                     <tr key = {index}>
                     <td>{item}</td>
                     <td><Like/></td>
                     <td><button onClick = {()=>this.handleDelete(index)} className = "btn btn-danger sm">Delete</button></td>
                 </tr>
                    )}
                </tbody>
            </table>
            <Pagination pageSize = {pageSize}
             currentPage = {currentPage} 
             ItemsCount = {count}
             onPageChange = {this.handlePageChange}/>

            </React.Fragment>
            
        );
    }
}
Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    ItemsCount:PropTypes.number.isRequired,
     onPageChange : PropTypes.func.isRequired
};
 const Main = () => {
         return(
            <main className = "container">
            <Movies />
             </main>
         )
 }
export default Main;

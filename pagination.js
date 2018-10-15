import React, { Component } from 'react';
import _ from 'lodash';


function Utils(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
return _(items).slice(startIndex).take(pageSize).value();
}

const Pagination = (props) => {
    const {pageSize, currentPage, itemsCount, onPageChange} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);
    if(pagesCount === 1) return null;
   return <nav>
       <ul className="pagination">
       {pages.map(page => 
           <li key = {page} className={page === currentPage ? "page-item active" :"page-item"}>
           <a onClick = {()=>onPageChange(page)} 
           className= "page-link">{page}</a></li>
        )}
       </ul>
   </nav>;
}


class Movies extends Component {
    state = {
        pageSize : 3,
        currentPage : 1,
        listItems : ['Apple','Ball', 'Banana', 'Orange', 'Lemon', 'PineApple', 'Grapes', 'Shampoo']
    }
    handleDelte = (index) => {
        const newItems = this.state.listItems.filter((m, i) => i !== index);
        this.setState({listItems: newItems})
    }
    handlePageChange = (page) => {
        this.setState({currentPage : page})
    }
    render() {
        const {listItems : allItemss, pageSize, currentPage} =this.state;
        const listItems = Utils(allItemss,currentPage, pageSize)
        const count = this.state.listItems.length;
        if(count === 0) return <p>There are no items in the store.</p>
        return (
            <React.Fragment>
            <p>There are {count} items in the store.</p>
           <table className="table">
               <thead>
                   <tr>
                       <th>Items</th>
                       <th></th>
                    </tr>
               </thead>
               <tbody>
                   {listItems.map((item, index) => 
                   <tr key = {index}>
                       <td>{item}</td>
                       <td><button onClick = {()=>this.handleDelte(index)} className = "btn btn-danger sm">Delete</button></td>
                   </tr>
                    )}
               </tbody>
           </table>
           <Pagination pageSize = {pageSize} 
           currentPage = {currentPage} 
           itemsCount = {count}
           onPageChange = {this.handlePageChange}/>
            </React.Fragment>
        );
    }
}
const Main = () => {
    return <main className = "container">
    <Movies/>
    </main>
}

export default Main;

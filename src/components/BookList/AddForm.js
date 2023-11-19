import React, { Component } from 'react'
import Book from './Book'
import "./AddForm.css";

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [
                
            ],

            title: '',
            author: '',
            year: '',
        }

    }
    titleCHangeHandler(e){
        this.setState({title: e.target.value})

    }
    authorChangeHandler(e){
        this.setState({author: e.target.value})

    }
    yearChangeHandler(e){
        this.setState({year: e.target.value})

    }
    submitHandler(e){
        e.preventDefault();
       
        let newArtikel = <Book title={this.state.title} author={this.state.author} year={this.state.year} />
        
      

        if(this.state.author.length !==0 && this.state.title.length !==0 && this.state.title.length !==0 ) {
            return(this.setState({
                books:[...this.state.books, newArtikel],author:"",title:"",year:""
           
            })
            )
        }


       
    }

   


    render() {
       
    
      
        return (
            <>
                <form onSubmit={(e)=>{this.submitHandler(e)}} id="book-form" autocomplete="off">
                    {}
                   
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" onChange={(e)=>{this.titleCHangeHandler(e)}} value={this.state.title} id="title" className="form-control" />
                        {(this.state.title.length === 0 ) && 
                            <span className='warning' id="title">Please enter a Title</span> 
                        }       
                    </div>

                    <div className="form-group">
                        <label for="author">Author</label>
                        <input type="text" value={this.state.author} onChange={(e)=>{this.authorChangeHandler(e)}}  id="author" className="form-control" />
                        {( this.state.author.length === 0 ) && 
                            <span className='warning' id="author">Please enter a Author</span> 
                        }
                    </div>

                    <div className="form-group">
                        <label for="year">Year</label>
                        <input type="text" value={this.state.year} onChange={(e)=>{this.yearChangeHandler(e)}}  id="year" className="form-control" />
                        {( this.state.year.length === 0 ) && 
                            <span className='warning' id="yeare">Please enter a Year</span> 
                        }
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table class="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books}
                    </tbody>
                </table>


            </>
        )
    }
}

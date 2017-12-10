import React, { Component } from 'react';
import {Table} from 'react-bootstrap'

class ReviewTable extends Component {

    renderTable(){
        let movieData = JSON.parse(localStorage.getItem('movieData'));
        let tableRows = [];
        let idx = 0;
        for(let i=0; i < movieData.length; i++){
            if(movieData[i].reviews.length > 0){
                for(let j=0; j < movieData[i].reviews.length; j++){
                    tableRows.push(<tr key={idx}>
                        <th>{movieData[i].reviews[j].movieTitle}</th>
                        <th>{movieData[i].reviews[j].username}</th>
                        <th>{movieData[i].reviews[j].review}</th>
                    </tr>);
                    idx++;
                }
            }
        }
        return tableRows;
    }

    render() {
        return (
            <div className="reviewTable">
                <Table bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Username</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ReviewTable;

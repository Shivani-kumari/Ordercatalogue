import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} products</div>
               
                <div className="filter-size">
                    Filter
                    <select value = {this.props.size} 
                    onChange ={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Red">Red</option>
                        <option value="pink">pink</option>
                        <option value="bule">bule</option>
                        <option value="green">green</option>
                        
                    
                    </select>
                    
                </div>
            </div>
        )
    }
}

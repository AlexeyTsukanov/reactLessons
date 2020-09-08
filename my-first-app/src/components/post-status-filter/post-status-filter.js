import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Like'}
        ];
    }

    render(){
        const {filter, onFilterSellect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const classList = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                        key={name} 
                        className={`btn ${classList}`}
                        onClick={() => onFilterSellect(name)}>{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

import React from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots'
import SearchBox from './SearchBox';
import './App.css';
class App extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            robots : robots,
            searchfiled : ''
        }
    }

    onSearchChange = (event)  =>    {
        this.setState({searchfiled : event.target.value})    
    }

    render() 
    {
        const filteredRobots = this.state.robots.filter(robots => {
           return robots.name.toLowerCase().includes(this.state.searchfiled.toLocaleLowerCase());
        })

        return(
            <div>
                <h1 className='tc sans-serif'> ROBOFRIENDS </h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Cardlist robots={filteredRobots}/>
            </div>
        );
    }
}   

export default App;
const SearchBox = ({filteredRobots, searchChange}) => {
    return(
        <div className='ma2 tc'>
            <input  type='search'
                    className='bn pa2 bg-light-blue'
                    placeholder='search robots'
                    onChange = {searchChange}
            />
        </div>
    );
}
export default SearchBox;
const Search = (props: SearchProps) => (
  <div className="search">
    <div className="search__filter">
      <span className="search__badge">{props.results.length}</span>
      <input className="search__input" type="search" value={props.searchText} placeholder="Filter podcasts..." onChange={(e) => props.handleChange(e)} />
    </div>
  </div>
)

export default Search;
const Search = (props: SearchProps) => (
  <>
    <span>{props.results.length}</span>
    <input type="search" value={props.searchText} placeholder="Filter podcasts..." onChange={(e) => props.handleChange(e)} />
  </>
)

export default Search;
export class NotesFilter extends React.Component {
  state = {
    filterBy: {
      search: "",
      type: "",
    },
  };

  handleChange = ({ target }) => {
    const { onSetFilter } = this.props;
    this.setState(
      (prevState) => ({
        filterBy: { ...prevState.filterBy, [target.name]: target.value },
      }),
      () => onSetFilter(this.state.filterBy)
    );
  };

  render() {
    let { search, type } = this.state.filterBy;
    return (
      <section className="filter-container">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <select name="type" value={type} onChange={this.handleChange}>
          <option value="">All</option>
          <option value="note-txt">Text</option>
          <option value="note-img">Images</option>
          <option value="note-todos">Todo</option>
          <option value="note-vid">Videos</option>
        </select>
      </section>
    );
  }
}

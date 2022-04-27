export class TextNote extends React.Component {
  state = {
    note: this.props.note,
  };
  render() {
    let { note } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div>
        <h1>{note.info.txt}</h1>
      </div>
    );
  }
}

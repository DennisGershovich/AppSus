export class VideoNote extends React.Component {
  state = {
    note: this.props.note,
  };
  render() {
    let { note } = this.state;
    if (!note) return <React.Fragment></React.Fragment>;
    return (
      <div>
        <iframe
          src={`${note.info.url}`}
        ></iframe>
      </div>
    );
  }
}

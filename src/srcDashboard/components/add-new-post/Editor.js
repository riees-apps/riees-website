import React, {Component} from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '',}
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
      this.setState({ editorHtml: html });
  }
  
  render() {
    return (
      <ReactQuill
        onChange={this.handleChange}
        value={this.state.editorHtml}
        className="add-new-post__editor mb-1"
      />
    );
  }
}

export default Editor;

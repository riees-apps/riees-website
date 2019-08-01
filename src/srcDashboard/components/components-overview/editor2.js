import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor2 extends React.Component {
    constructor (props) {
      super(props)
      this.state = { editorHtml: '', theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
        this.setState({ editorHtml: html });
    }
    
    handleThemeChange (newTheme) {
      if (newTheme === "core") newTheme = null;
      this.setState({ theme: newTheme })
    }
    
    render () {
      return (
        <div>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            toolbar='false'
            modules={Editor2.modules}
            formats={Editor2.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />
          <div className="themeSwitcher">
            <label>Theme </label>
            <select onChange={(e) => 
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div>
         </div>
       )
    }
  }
  
  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  Editor2.modules = {
    toolbar: false,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor2.formats = [
   
  ]
  
  /* 
   * PropType validation
   */
  Editor2.propTypes = {
    placeholder: PropTypes.string,
  }

export default Editor2
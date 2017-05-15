import React, { Component } from 'react';
import './ImageEditor.css';

class ImageEditor extends Component {
    constructor(props)
    {
        super(props);
        this.state =  {
            imageLink: '',
            sourceLink: '',
            sourceText: '',
            comment: ''
        };
        this.handleImageLinkChange = this.handleImageLinkChange.bind(this);
        this.handleSourceLinkChange = this.handleSourceLinkChange.bind(this);
        this.handleSourceTextChange = this.handleSourceTextChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleImageAdd = this.handleImageAdd.bind(this);
    };

    handleImageLinkChange(event) {
        this.setState({ imageLink: event.target.value });
    };
    handleSourceLinkChange(event) {
        this.setState({ sourceLink: event.target.value });
    };
    handleSourceTextChange(event) {
        this.setState({ sourceText: event.target.value });
    };
    handleCommentChange(event) {
        this.setState({ comment: event.target.value });
    };

    handleImageAdd() {
        const newImage = {
            imageLink: this.state.imageLink,
            sourceLink: this.state.sourceLink,
            sourceText: this.state.sourceText,
            comment: this.state.comment
        };
        this.props.onImageAdd(newImage);
        this.setState({ imageLink: '', sourceLink: '', sourceText: '', comment: '' });
    };

    render() {
        return (
            <div className="upload_form">
                <input
                    type="text"
                    className="upload_form__control"
                    placeholder="Image link"
                    value={this.state.imageLink}
                    onChange={this.handleImageLinkChange}
                />
                <input
                    type="text"
                    className="upload_form__control"
                    placeholder="Source link"
                    value={this.state.sourceLink}
                    onChange={this.handleSourceLinkChange}
                />
                <input
                    type="text"
                    className="upload_form__control"
                    placeholder="Source text"
                    value={this.state.sourceText}
                    onChange={this.handleSourceTextChange}
                />
                <textarea
                    className="upload_form__control"
                    rows={1}
                    placeholder="Comment"
                    value={this.state.comment}
                    onChange={this.handleCommentChange}
                />
                <button
                    className="upload_form__control"
                    onClick={this.handleImageAdd}
                >
                    Upload
                </button>
            </div>
        );
    }
}

export default ImageEditor;

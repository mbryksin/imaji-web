import React, { Component } from 'react';
import './ImagesGrid.css';

class ImagesGrid extends Component {
    render() {
        return (
            <div className="content_grid">
                <div className='content_element'>
                    <img className='content_image' src="https://d13yacurqjgara.cloudfront.net/users/134836/screenshots/3045524/michael.jpg"/>
                    <span className='small__centred'>
                        <small className="comment">Image 1</small>
                        <a className='link_s' href="https://dribbble.com/shots/3045524-Michael">Michael by Calvin Chopp</a>
                    </span>
                </div>
                <div className='content_element'>
                    <img className='content_image' src="https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/2471960/epic_themontues-green-copy.gif"/>
                    <span className='small__centred'>
                        <small className="comment">Image 2</small>
                        <a className='link_s' href="https://dribbble.com/shots/2472295-Camera-Natrium">Epicurrence // The Montuesby ∆ Studio–JQ ∆</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default ImagesGrid;

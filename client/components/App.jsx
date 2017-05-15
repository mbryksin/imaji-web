import React, { Component } from 'react';
import NavBar from './NavBar';
import ImagesGrid from './ImagesGrid';
import ImageEditor from './ImageEditor';
import './App.css';

class App extends Component {
    handleImageAdd(data){
        console.log(data);
    }

    render() {
        return (
            <div className="app_root">
                <NavBar />
                <div className='content'>
                    <ImageEditor onImageAdd={this.handleImageAdd}/>
                    <div className='tags_container'>
                        <span>
                          <a className='tag' href= "">#bauhaus</a>
                        </span>
                        <span>
                          <a className='tag' href= "">#colors</a>
                        </span>
                        <span>
                          <a className='tag' href= "">#style</a>
                        </span>
                        <span>
                          <a className='tag' href= "">#patterns</a>
                        </span>
                        <span>
                          <a className='tag' href= "">#animation</a>
                        </span>
                    </div>
                    <ImagesGrid />
                </div>
            </div>
        );
    }
}

export default App;

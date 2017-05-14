import React, { Component } from 'react';
import NavBar from './NavBar';
import ImagesGrid from './ImagesGrid';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app_root">
                <NavBar />
                <div className='content'>
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

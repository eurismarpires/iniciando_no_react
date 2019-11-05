import React from 'react';
import Post from './Post'

export default class App extends React.Component{

    render(){
        return (
            <div>
            <h1>Hello World!!!</h1>
            <Post title="React é muito bão"/>
            <Post title="React é bão dimais da conta"/>
            <Post title="React é muito doido"/>
            <Post title="React faz coisas incríveis"/>
            <Post title="Chega de post"/>
            </div>
        );
        
    }
}
import React from 'react';
import Comment from './Comment';
export default class Post extends React.Component{
   
    //o método constructor será executado toda vez que um novo post for instanciado
    constructor(props){ //passa a propriedade para a ...
        super(props);  //...classe pai
        console.log(this.props);
        this.state = {
            comments: [],
            newCommentText: ''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextchange = this.handleTextchange.bind(this)
    }
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value ={this.state.newCommentText}
                    onChange={this.handleTextchange}
                    />
                    <button type="submit">Comentar</button>
                </form>
               
                {
                    this.state.comments.map((comment, index) => {
                        return <Comment key={index} text={comment.text}/>
                    })
                }
            
            </div>
            
        );
    }
    handleSubmit(e){
        this.setState({
            comments:[
                ...this.state.comments,
                {text: this.state.newCommentText}
            ]
        })
        this.setState({ newCommentText: ''})
        e.preventDefault();

    }
    handleTextchange(e){
        this.setState({newCommentText: e.target.value})
    }
}

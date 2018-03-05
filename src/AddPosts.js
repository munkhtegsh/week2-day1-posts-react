import React from 'react';
// import './AddPosts.css'

export default class AddPosts extends React.Component {
    add() {
        let author = this.refs.author.value; //refs is the key that object containing
        let title = this.refs.title.value;
        let text= this.refs.text.value;

        let newPost = {
            author,
            title,
            text
        };

        this.props.add(newPost);
    }
    
    //ref is like a uniq id in react; 
    render() {
        return (
            <div>
                <input type="text" ref="author" placeholder="Author"/> 
                <input type="text" ref="title" placeholder="Title"/>
                <input type="text" ref="text" placeholder="Text"/>
                <button onClick={() => this.add()}>Add</button>
            </div>
        )
    }
}

//Most important rule don't forget to bind the fn in the parent
//1. Passing fn to  the child in the parent
//2. Create onClick fn using cb in the child
//3. Create another fn in the child
    //4. Call this.props.function() in there
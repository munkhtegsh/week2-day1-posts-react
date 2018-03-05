import React from 'react';
import './People.css'

export default class People extends React.Component {
    render() {

        let {posts} = this.props; //use it  

        let peopleJSX = posts.map((person) => {
            return (
                <div className="card">
                    <div><strong>{person.author}</strong></div>
                    <div>{person.title}</div>
                    <div>{person.text}</div>
                </div>
            )
        })

        return (
            <div>
                {peopleJSX}
            </div>
        )
    }

}
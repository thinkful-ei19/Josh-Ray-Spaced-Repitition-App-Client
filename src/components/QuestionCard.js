import React from 'react';
import './QuestionCard.css';

export default class QuestionCard extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
    return (
        <form className="question">
        <p>What is the English equivalent of the Dothraki word (insert.word.here)?</p>
        <input type="text" placeholder="Answer" /> 
        <br />
        <button type="submit" className="submit">Submit</button>
        </form>
    )};
}
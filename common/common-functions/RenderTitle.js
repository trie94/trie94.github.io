import React from 'react';

export default function RenderTitle(props) {

    const isPastwork = (props.props.isPastwork !== null || props.isPastwork !== undefined || props.props.isPastwork === true) ? true : false;

    let urlHelper = (window.location.href).replace('/works', '');

    if (!isPastwork) {
        console.log("what");
        return <div className="work-title"><a href={urlHelper + props.props.link}>
            {props.props.title}</a></div>
    } else {
        return <div className="work-title">
            {props.props.title}</div>
    }


    return null;
}
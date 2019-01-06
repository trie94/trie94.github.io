import React from 'react';

export default function RenderPrototype(props) {
    let proto = props.props;

    if (proto === null || proto === undefined)
        return null;

    if (proto.indexOf("gif" || "png" || "jpg" || "jpeg") !== -1) {
        return <img className="content-full-img" src={props.props} />
    }
    else {
        return <div className="video-wrapper">
            <iframe className="work-video" src={props.props} allowFullScreen="allowFullScreen" /></div>
    }
}
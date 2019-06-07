import React from 'react';

export default function RenderPrototype(props) {
    let proto = props.props;

    if (proto === null || proto === undefined) {
        return null;
    }

    if (proto.includes("gif") || proto.includes("png") || proto.includes("jpg") || proto.includes("jpeg")) {
        return <div className="content-full-img-wrapper"><p></p><img className="content-full-img" src={props.props} />
        </div>
    }
    else {
        return <div className="video-wrapper">
            <iframe className="work-video" src={props.props} allowFullScreen="allowFullScreen" /></div>
    }
}
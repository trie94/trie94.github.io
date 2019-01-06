import React from 'react';
import GetLink from './GetLink'
;
export default function RenderLinks(props) {

    const hasLink = (props.props) ? true : false;

    let prototypeName = (props.prototypeName === undefined || props.prototypeName === null) ?
        prototypeName = "Prototype" : props.prototypeName;



    if (hasLink)
        return <GetLink props={props.props} name={prototypeName} />;

    return null;
}
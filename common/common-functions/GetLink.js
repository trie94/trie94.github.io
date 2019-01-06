import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';

export default function GetLink(props) {
    let string = props.props;
    const substring = "github.com";
    let title = title;
    let name = ' ' + props.name;

    if (string.indexOf(substring) !== -1) {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Repo
            &nbsp;&nbsp;&nbsp;</a>;
    }
    else {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faHandPointRight} />
            {name}
            &nbsp;&nbsp;&nbsp;</a>;
    }
}
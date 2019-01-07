import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function GetLink(props) {
    let string = props.props;
    const gitHub = "github.com";
    const twitter = "twitter.com";
    let title = title;
    let name = ' ' + props.name;

    if (string.indexOf(gitHub) !== -1) {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Repo
            &nbsp;&nbsp;&nbsp;</a>;
    }
    else if (string.indexOf(twitter) !== -1) {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faTwitter} /> Twitter Thread
        &nbsp;&nbsp;&nbsp;</a>;
    }
    else {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faHandPointRight} />
            {name}
            &nbsp;&nbsp;&nbsp;</a>;
    }
}
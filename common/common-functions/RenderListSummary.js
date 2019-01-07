import React from 'react';

export default function RenderListSummary(props) {
    let content = props.props;
    let urlHelper = (window.location.href).replace('/works', '');

    if (content.link === null || content.link === undefined) {
        return <div className="work-summary post">
            <p>{content.summary}</p>
            <p>{content.list_summary}</p>
        </div>
    } else if (content.src.indexOf("https://") !== -1) {
        return <div className="work-summary post">
            <a href={content.link}>
                <p>{content.summary}</p>
                <p>{content.list_summary}</p>
            </a>
        </div>

    } else {
        return <div className="work-summary post">
            <a href={urlHelper + content.link}>
                <p>{content.summary}</p>
                <p>{content.list_summary}</p>
            </a>
        </div>
    }
}
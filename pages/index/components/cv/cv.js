import React from 'react';
import './cv.scss';
import resume from '../../../../assets/pdfs/resume.pdf';

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };

        this.buttonStyle = {
            // margin: "20px 15px",
            width: window.innerWidth,
            height: "100px",
            color: "#000",
            fontSize: "16px",
            borderColor: "#000",
            borderWidth: "2px"
        }
        this.style = { color: "#fff" }
    }

    render() {
        return (
            <a href={resume} target="_blank" style={this.style}>
                <div className='cv components row'>
                    <button className="download" style={this.buttonStyle} >
                        Download CV </button>
                </div>
            </a>
        )
    }
}

export default CV;
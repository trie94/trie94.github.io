import React from 'react';
import './cv.scss';
import resume from '../../../assets/pdfs/resume.pdf';

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

        this.downloadResume = this.downloadResume.bind(this);
    }

    downloadResume() {
        if (this.state.isClicked === false) {
            this.setState({ isClicked: true });
            console.log(this.state.isClicked);
        }
        window.open(resume);
    }

    componentDidUpdate() {
        console.log("did update");
    }

    render() {
        return (
            <div className='cv components row'>
                <button className="download" href={resume}
                    style={this.buttonStyle} onClick={this.downloadResume}>
                    Download CV
                </button>
            </div>
        )
    }
}

export default CV;
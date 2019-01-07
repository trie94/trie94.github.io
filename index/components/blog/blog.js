import React from 'react';
import './blog.scss';
import sketchbook from '../../../assets/imgs/thumbnails/sketchbook.png';
import sketchbook_hover from '../../../assets/imgs/thumbnails/sketchbook_hover.png';
import sandbox from '../../../assets/imgs/thumbnails/sandbox.png';
import sandbox_hover from '../../../assets/imgs/thumbnails/sandbox_hover.png';
import pastwork from '../../../assets/imgs/thumbnails/pastwork.png';
import pastwork_hover from '../../../assets/imgs/thumbnails/pastwork_hover.png';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='blog'>
                <div id="small-stuff" className="titles"> SMALL STUFF</div>
                <div className='row'>
                    <div className='blog1'>
                        <Thumb img={sketchbook} hoverimg={sketchbook_hover}
                        link ="https://www.instagram.com/crushed157/" title="DRAWINGS"/>
                    </div>
                    <div className='blog2'>
                        <Thumb img={sandbox} hoverimg={sandbox_hover}
                        link="https://trie94.github.io/sketchbook" title="CODING SKETCHES"/>
                    </div>
                    <div className='blog3'>
                        <Thumb img={pastwork} hoverimg={pastwork_hover}
                        link="/past-work" title="PAST WORK"/>
                    </div>
                </div>
            </div>
        )
    }
}

class Thumb extends React.Component{
    constructor(props){
        super(props);
        this.state={ isHovering: false };
        this.hover = this.hover.bind(this);
        this.notHover = this.notHover.bind(this);
        this.img = this.props.img;
    }

    hover(){
        if(this.state.isHovering === false){
            this.setState({isHovering: true})
        }
    }

    notHover(){
        if(this.state.isHovering === true){
            this.setState({isHovering: false})
        }
    }

    render() {
        this.img = this.state.isHovering? this.props.hoverimg : this.props.img;

        return (
            <a href={this.props.link} target="_blank" style={this.style}>
            <img className="thumb-img" src ={this.img}
            onMouseEnter={this.hover} onMouseLeave={this.notHover} />
            <p className="thumb-text">{this.props.title}</p></a>
        );
    }
}

export default Blog;
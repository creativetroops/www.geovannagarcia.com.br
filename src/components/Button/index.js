import React, { Component } from 'react'
import $ from 'jquery'
import './button.css'

class Button extends Component {
    buttonClick(type, event){
        if(type != null){
            switch(type){
                case 'goto-contact':
                    $("html, body").stop().animate({
                        scrollTop: $("#contact").offset().top
                    }, 1000);
                break;
                default: break;
            }
        }
    }
    render() {
        return (
            <button id={this.props.id} className={`button button-${this.props.type} ${this.props.sr}`} onClick={this.buttonClick.bind(this, this.props.action || null)}>
                {this.props.label}
            </button>
        );
    }
}

export default Button
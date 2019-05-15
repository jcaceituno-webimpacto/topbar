import React, { Component } from 'react';


export default class TopBar extends Component {
    static defaultProps = {
        image: "",
        text: ""
    }

    static uiSchema = {
        images: {
            items: {
                image: {
                    'ui:widget': 'image-uploader',
                },
            },
        },
    }


    static getSchema = (props) => {
        return {
            properties: {
                text: {
                    title: 'Texto',
                    type: 'string',
                    default: 'Texto del topbar'
                },
                image: {
                    default: '',
                    title: 'Icono',
                    type: 'string',
                    widget: {
                        'ui:widget': 'image-uploader',
                    }
                },
            },
            title: 'Topbar',
            type: 'object',
        }
    }


    render() {
        const {image}=this.props;
        const {text}=this.props;

        return (
            <div>
                <img src={image}/><span>{text}</span>
            </div>
        )
    }
}
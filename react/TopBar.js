import React, { Component } from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import { ExtensionPoint, useRuntime } from 'vtex.render-runtime'


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
            <div className={classnames(styles.topbar,'pv3')}>
                <div className="flex items-center">
                    <img src={image}/><span>{text}</span>
                </div>

                <div className={styles.loginTopbar}>
                    <ExtensionPoint id="loginjc"/>
                </div>
            </div>
        )
    }
}
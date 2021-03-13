import React, { PureComponent } from 'react'
import image from './../image.png';
export default class Header extends PureComponent {
    render() {
        return (
            <div>
                <img src={image} alt="logo" />
            </div>
        )
    }
}

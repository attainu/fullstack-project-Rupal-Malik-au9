import React, { PureComponent } from 'react'
import image from './../image.png';
export default class Header extends PureComponent {
    render() {
        return (
            <div style={{width:"100%"}}>
                <img src={image} alt="logo" />
            </div>
        )
    }
}

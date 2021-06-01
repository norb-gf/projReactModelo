import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='container-header'>
                <header>
                    <nav className="navbar navbar-expand- navbar-dark bg-dark">
                    <div><a href="/" id="app-home" className="navbar-brand">Home</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;
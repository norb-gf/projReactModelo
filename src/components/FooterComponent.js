import React, { Component } from 'react'
import '../assets/css/styles.css'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span>Mensagem de rodapé</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;
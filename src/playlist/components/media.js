import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {

    /* constructor(props) {
        super(props)
        console.log("Componente es creado")
        alert("componente es creado")
    }

    componentWillMount() {
        console.log("Componente se va a montar")
        alert("el componente se va a montar")
    } */

    state = {
        ...this.props
    }

    handleClick = event => {
        this.state.handleOpenModal(this.state)
    }

    render() {
        const { title, author, cover, alt} = this.state

        return (
            <div className="Media" onClick={ this.handleClick }>
                <div className="Media-cover">
                    <img
                        className="Media-image"
                        src={ cover } 
                        alt={ alt }
                        width={260}
                        height={160} 
                    />
                    <h3 className="Media-title"> { title } </h3>
                    <p className="Media-author"> { author } </p>
                </div>
            </div>
        )
    }

    /* componentDidMount() {
        console.log("componente montado")
    } */

    /* componentWillReceiveProps() {
        console.log("cambios")
    }

    shouldComponentUpdate(props, state) {
        console.log(props, state, "should componente update")
        return true
    }

    componentWillUpdate() {
        console.log("componente se va a actualizar")
    }

    componentDidUpdate() {
        console.log("componente se actualizo")
    } */
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    alt: PropTypes.string
}

export default Media
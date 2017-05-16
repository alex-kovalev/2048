import React from 'react'


class Tile extends React.Component {
    render() {
        const style = {
            fontSize: 60 - this.props.tile.value.toString().length * 4
        }
        const className = `tile tile-${this.props.tile.x}-${this.props.tile.y}`
        return(
            <div className={className} style={style}>
                {this.props.tile.value}
            </div>
        )
    }
}

export default Tile

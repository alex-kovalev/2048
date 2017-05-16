import React from 'react'

import Cell from './Cell'
import Tile from './Tile'


class Board extends React.Component {
    render() {
        const cells = [...Array(16).keys()].map(i =>
            <Cell key={i} index={i} />
        )
        const tiles = this.props.tiles.map(tile =>
            <Tile key={tile.id} tile={tile} />
        )
        return (
            <div className="board-container">
                {tiles}
                {cells}
            </div>
        )
    }
}

export default Board
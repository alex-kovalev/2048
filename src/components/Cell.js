import React from 'react'


class Cell extends React.Component {
    render() {
        const style = {
            top: Math.floor(this.props.index/4) * 150 + 10,
            left: (this.props.index % 4) * 150 + 10
        }
        return(
            <div className="cell" style={style} />
        )
    }
}

export default Cell

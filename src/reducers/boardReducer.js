let tileId = 10

const INITIAL_STATE = {
    tiles: [{
        id: 0,
        value: 2,
        y: 0,
        x: 0
    },{
        id: 1,
        value: 2,
        y: 3,
        x: 2
    },{
        id: 2,
        value: 2,
        y: 3,
        x: 3
    }]
}

function moveLeft(tiles) {
    function shiftRow(rowIdx) {
        let row = [null, null, null, null] 
        tiles.forEach((tile) => {
            if (tile.y === rowIdx) {
                row[tile.x] = {...tile, canMerge: true}
            }
        })
        let i = 1
        while (i < 4) {
            // if (rowIdx === 3) {
            //     debugger
            // }
            if (!row[i]) { i++; continue }
            let prevOpen
            for (let j = i - 1; j >= 0; j++) {
                if (row[j] === null) {
                    prevOpen = j
                    break
                } 
            }
            if (!prevOpen) { i++; continue }
            if (prevOpen > 0 && false) {
                // merge with left
            } else {
                
                row[prevOpen] = row[i]
                row[prevOpen].x = prevOpen 
                row[i] = null
                i++
            }



            // const nextTileIdx = row.slice(i).findIndex(x => x !== null)
            // if (nextTileIdx < 0) { break }
            // const nextTile = row[nextTileIdx + i]
            // debugger
            // if (i > 0 && row[i-1].value === nextTile.value && row[i-1].canMerge) {
            //     // merge with left
            //     nextTile.value = nextTile.value * 2
            //     row[i-1] = nextTile
            //     row[nextTileIdx + i] = null
            // } else {
            //     row[i] = nextTile
            //     row[i].x = i
            //     row[nextTileIdx + i] = null
            //     i++
            // }
        }
        return row
    }
    const row0 = shiftRow(0)
    const row1 = shiftRow(1)
    const row2 = shiftRow(2)
    const row3 = shiftRow(3)

    debugger
    const ret = row0.concat(row1, row2, row3)
        .filter(i => i)
        .map(tile => {
            return {
                x: tile.x,
                y: tile.y,
                value: tile.value,
                id: tile.id
            }
        })

    debugger
    return ret

    // return tiles.map(tile => {
    //     const positionLeft = tiles.filter(otherTile => 
    //         otherTile.y === tile.y && otherTile.x < tile.x
    //     ).length
    //     return {...tile, x: positionLeft}
    // })
}

function moveRight(tiles) {
    return tiles.map(tile => {
        const positionRight = tiles.filter(otherTile => 
            otherTile.y === tile.y && otherTile.x > tile.x
        ).length
        return {...tile, x: 3 - positionRight}
    })
}

function moveUp(tiles) {
    return tiles.map(tile => {
        const positionTop = tiles.filter(otherTile => 
            otherTile.y < tile.y && otherTile.x === tile.x
        ).length
        return {...tile, y: positionTop}
    })
}


function moveDown(tiles) {
    return tiles.map(tile => {
        const positionBottom = tiles.filter(otherTile => 
            otherTile.y > tile.y && otherTile.x === tile.x
        ).length
        return {...tile, y: 3 - positionBottom}
    })
}

function generateTile(tiles) {
    const currentTileIdxs = tiles.map(tile => tile.y * 4 + tile.x)
    let position = Math.floor((16 - tiles.length) * Math.random())
    let idx = 0
    while (position > 0 || currentTileIdxs.indexOf(idx) >= 0) {
        if (currentTileIdxs.indexOf(idx) < 0) {
            position -= 1
        }
        idx += 1
    }
    if (idx === 16) {
        return tiles
    }
    const value = Math.random() < 0.1 ? 4 : 2
    const newTile = {
        id: tileId,
        value: value,
        x: idx % 4,
        y: Math.floor(idx/4)
    }
    tileId += 1
    return [...tiles, newTile]
}

function boardReducer(state=INITIAL_STATE, action) {
    console.log(action.type)
    switch (action.type) {
        case 'GEN_TILE':
            return {tiles: generateTile(state.tiles)}
        case 'LEFT_PRESS':
            return {tiles: generateTile(moveLeft(state.tiles))}
        case 'RIGHT_PRESS':
            return {tiles: generateTile(moveRight(state.tiles))}
        case 'UP_PRESS':
            return {tiles: generateTile(moveUp(state.tiles))}
        case 'DOWN_PRESS':
            return {tiles: generateTile(moveDown(state.tiles))}
        default:
            return state
    }
}

export default boardReducer

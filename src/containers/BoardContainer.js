import { connect } from 'react-redux'
import Board from '../components/Board'


const mapStateToProps = (state) => {
    // const filter = state.userInput.car_name_filter.toLowerCase()
    // const cars = state.cars.cars.filter((car) => {
    //     const carName = `${car.make} ${car.model}`.toLowerCase()
    //     return carName.indexOf(filter) >= 0
    // })
    // return {cars}
    return {
    	tiles: state.board.tiles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardContainer

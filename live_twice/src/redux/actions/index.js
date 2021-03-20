import axios from 'axios';

const action = {}

action.setRestaurantsOnMount = () => {
        return (dispatch) => {
            axios.get(`http://localhost:3000/food`)
            .then(resp => resp)
            .then(res => {
            return res.data
                })
            .catch(error => {
                alert('Sorry, This is not available.Come back later.');
                console.log(error);
            })

            .then(results => {
                dispatch({ type: 'LATEST_RESTAURANTS', payload: results })
            })

    }
}
action.setRestaurantsOnTravel = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/travel`)
        .then(resp => resp)
        .then(res => {
              return res.data
            })
        .catch(error => {
            alert('Sorry, This is not available.Come back later.');
            console.log(error);
        })

        .then(results => {
            dispatch({ type: 'LATEST_TRAVEL', payload: results })
        })

}
}


action.setRestaurantsOnSports = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/sports`)

            .then(resp => resp)
            .then(res => {
                       

                        return res.data
                    })
                    .catch(error => {
                        alert('Sorry, This is not available.Come back later.');
                        console.log(error);
                    })

                    .then(results => {
                        dispatch({ type: 'SET_SPORTS', payload: results })
                    })
            

    }

}






export const { setRestaurantsOnSports,setRestaurantsOnTravel, setRestaurantsOnMount} = action;
export const sampleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_sample_action'
    })
   }
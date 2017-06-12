import { JOB_UPDATE, JOB_CREATE, JOBS_FETCH_SUCCESS } from './types'
import firebase from 'firebase'


export const jobUpdate = ({prop, value}) => {
  return {
    type: JOB_UPDATE,
    payload: {prop, value}
  }
}

export const jobCreate = ({name, email, description, category, user}) => {
  
  return (dispatch) => {
    firebase.database().ref(`/jobBoard/${category}`)
      .push({name,email,description,user})
      .then( () => {
        dispatch({type: JOB_CREATE})
      })
  }
}

export const jobDelete = ({})


export const fetchJobs = ({category}) => {

  return (dispatch) => {
    firebase.database().ref(`/jobBoard/${category}`)
      .on('value', snapshot => {
        dispatch({type: JOBS_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
}


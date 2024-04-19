import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './User/slicer'

 export   const store = configureStore({

        reducer:{
            users: usersReducer
        }
    })


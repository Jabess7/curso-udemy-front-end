import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = ( )=> {
    const error = useRouteError();

    

  return(
    <div>
        <h1>OPss!</h1>
        <p>Temos um problema</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
  }
export default ErrorPage
import React from 'react'
import './Loader.css'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div>
            <Spinner className="loader" animation="border" variant="primary" />
        </div>
    )
}

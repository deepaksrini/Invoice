import React from 'react'

function Alert({ type, message, closeAlert }) {
    const close = () => {
        closeAlert();
    }
    return (
        <React.Fragment >

            {
                type === "SUCCESS" ? (
                    <div className="card-alert card green">
                        <div className="card-content white-text">
                            <p>{type} : {message}</p>
                        </div>
                        <button type="button" onClick={close} className="close white-text" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                ) : (
                        <div className="card-alert card red">
                            <div className="card-content white-text">
                                <p>{type} : {message}</p>
                            </div>
                            <button type="button" onClick={close} className="close white-text" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    )
            }
        </React.Fragment >
    )
}
export default Alert

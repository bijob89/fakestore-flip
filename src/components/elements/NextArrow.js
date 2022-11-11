import React from 'react'

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className='slick-arrow-container'>
            <button className={`${className} d-flex justify-content-center align-items-center`} onClick={onClick}>
                <i className="icon-chevron-right" />
            </button>
        </div>
    )
}

export default NextArrow
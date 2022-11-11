import React from 'react'

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className='slick-arrow-container'>
            <button className={`${className} d-flex justify-content-center align-items-center`} onClick={onClick}>
                <i className="icon-chevron-left" />
            </button>
        </div>
    )
}

export default PrevArrow
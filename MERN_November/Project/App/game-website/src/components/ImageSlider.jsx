import React, { useState }  from 'react'

export default (props) => {
  const {slides} = props;
  const [currentIdx, setCurrentIdx] = useState(0)

  const sliderStyle = {
    height: '100%',
    width: '100%',
    position: 'relative'
  }

  const slideStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIdx].url})`,
    boxShadow: 'inset 0 0 1rem 1rem #051F39'
  }

  const leftArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    color: 'white',
    zIndex: 1,
    fontSize: '45px',
    cursor: 'pointer'
  }

  const rightArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    color: 'white',
    zIndex: 1,
    fontSize: '45px',
    cursor: 'pointer'
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIdx === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIdx - 1;
    setCurrentIdx(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIdx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIndex);
  }
  
  return (
    <div style={sliderStyle}>
      <div style={leftArrowStyle} onClick={goToPrevious}>«</div>
      <div style={rightArrowStyle} onClick={goToNext}>»</div>
      <div style={slideStyle}></div>
    </div>
  )
}
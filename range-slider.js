import { Range, getTrackBackground } from 'react-range'

const RangeSlider = (props: any) => {
  const { sliderValue, setSliderValue, step, min, max } = props
  const values = sliderValue

  return (
    // test
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={sliderValue}
        step={step}
        min={min}
        max={max}
        onChange={(values) => setSliderValue(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '50px',
                background: getTrackBackground({
                  values,
                  colors: ['#fb8500', '#cccccc'],
                  min: min,
                  max: max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              padding: '10px',
              borderRadius: '100px',
              backgroundColor: '#fb8500',
              border: '2px solid white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          ></div>
        )}
      />
    </div>
    // test end
  )
}
export default RangeSlider

// <Range
// step={step}
// min={min}
// max={max}
// values={sliderValue}
// onChange={(values) => setSliderValue(values)}
// renderTrack={({ props, children }) => (
//   <div
//     {...props}
//     style={{
//       ...props.style,
//       height: '6px',
//       width: '100%',
//       backgroundColor: '#ccc',
//     }}
//   >
//     {children}
//   </div>
// )}
// renderThumb={({ props }) => (
//   <div
//     {...props}
//     style={{
//       ...props.style,
//       height: '20px',
//       width: '20px',
//       borderRadius: '100px',
//       backgroundColor: '#FB8500',
//       border: '2px solid white',
//     }}
//   />
// )}
// />


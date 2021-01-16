import GoogleMapReact from 'google-map-react'

const Map = () => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
      ></GoogleMapReact>
    </div>
  )
}

export default Map

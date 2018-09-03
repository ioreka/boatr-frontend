import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import sectionMarkers from './sectionMarkers'
// import saveToMyMarkers from './App'
// import Pin from './Pin'


class MyMap extends React.Component {

  render() {
    let displayedSectionMarkers = sectionMarkers.map(sectionMarker => {
      return (<Marker
      key={sectionMarker.lat}
      position={sectionMarker}
      />)
    })

    let mySavedMarkers = this.props.myMarkers.map(marker => {
      console.log(marker);
      return (<Marker
        key={marker.id}
        position={marker}
      />)
      })

    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 51.52089, lng: -0.08649 }}
        onRightClick={(e) => this.props.saveToMyMarkers(e)}>

        {mySavedMarkers}
        {displayedSectionMarkers}

      </GoogleMap>
    )
  }
}


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD9QQqawxTt2ouxuf917rLOqz-5RLn0W5A&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `900px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MyMap)

export default Map

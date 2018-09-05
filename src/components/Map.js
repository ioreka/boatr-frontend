import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MyMarker from './MyMarker'
import sectionMarkers from './sectionMarkers'
import CARTLogo from '../images/CARTLogo.png'

class MyMap extends React.Component {

  state = {
     isOpen: false,
     selectedMarker: false,
     comment: "",
   }

  handleUserInputComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

   handleClick = (event, marker) => {
     console.log("ya hittin it")
     console.log(marker);
    this.setState({
      selectedMarker: marker,
      isOpen: true
    })
  }


   handleToggleClose = () => {
       this.setState({
           isOpen: false
       });
   }


  render() {
    let displayedSectionMarkers = sectionMarkers.map(sectionMarker => {
      return (
          <Marker
            key={sectionMarker.lat}
            position={sectionMarker}
            options={
              {icon: CARTLogo,
               scaledSize: { width: 25, height: 25 }
              }
            }
        />
      )
    })

    let mySavedMarkers = this.props.myMarkers.map(marker => {
      return (<MyMarker
        marker={marker}
        selectedMarker={this.state.selectedMarker}
        handleClick={this.handleClick}
        handleToggleClose={this.handleToggleClose}
        handleUserInputComment={this.handleUserInputComment}
        addComment={this.props.addComment}
        deleteUserMarker={this.props.deleteUserMarker}
      />)
    })


    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 51.615831, lng: -0.330991 }}
        onRightClick={(e) => this.props.saveToMyMarkers(e)}>

        {displayedSectionMarkers}
        {mySavedMarkers}

      </GoogleMap>
    )
  }
}


const Map = compose(
  withProps({
    googleMapURL: process.env.REACT_APP_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `900px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(MyMap)

export default Map

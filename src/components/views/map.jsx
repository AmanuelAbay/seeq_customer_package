import { Map, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "40%", height: "40%" }}
        zoom={10}
        initialCenter={{
          lat: 8.980603,
          lng: 38.757759,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUdtkCJg_Mxfo-iHL9-bjD2WuL2FO8BkA",
  //   apiKey: "AIzaSyCx7mOsy8ioOPvDujfLCBTxP3Y9f5Nc5fI",
})(MapContainer);

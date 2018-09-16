import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;

class EventDetailedMap extends Component {
  render() {
    const { lat, lng } = this.props;
    const center = [lat, lng];
    const zoom = 14;
    return (
      <Segment attached="bottom" style={{ padding: 0 }}>
        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAoC_2VMPpt3AHYdSmmE9BRK73S9fHCY5E"
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        </div>
      </Segment>
    );
  }
}

export default EventDetailedMap;

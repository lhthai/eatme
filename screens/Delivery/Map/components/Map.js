import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  COLORS,
  constants,
  dummyData,
  icons,
  SIZES,
} from '../../../../constants';
import {utils} from '../../../../utils';

const Map = () => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState('');

  React.useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };

    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);

    setRegion(initialRegion);
  }, []);
  return (
    <MapView
      ref={mapView}
      style={{flex: 1}}
      provider={PROVIDER_GOOGLE}
      initialRegion={region}>
      {fromLoc && (
        <Marker
          key={'FromLoc'}
          coordinate={fromLoc}
          tracksViewChanges={false}
          icon={icons.navigator1}
          rotation={angle}
          anchor={{x: 0.5, y: 0.5}}
        />
      )}

      {toLoc && (
        <Marker
          key={'ToLoc'}
          coordinate={toLoc}
          tracksViewChanges={false}
          icon={icons.location_pin}
          anchor={{x: 0.5, y: 0.5}}
        />
      )}

      <MapViewDirections
        origin={fromLoc}
        destination={toLoc}
        apikey={constants.GOOGLE_MAP_API_KEY}
        strokeColor={COLORS.primary}
        strokeWidth={5}
        optimizeWaypoints={true}
        onReady={result => {
          setDuration(Math.ceil(result.duration));
          if (!isReady) {
            mapView.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: SIZES.width * 0.1,
                bottom: 400,
                left: SIZES.width * 0.1,
                top: SIZES.height * 0.1,
              },
            });
          }

          if (result.coordinates.length >= 2) {
            let angle = utils.calculateAngle(result.coordinates);
            setAngle(angle)
          }

          setIsReady(true)
        }}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});

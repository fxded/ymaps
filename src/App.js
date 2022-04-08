// import logo from './logo.svg';
import './App.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const But = (porps) => {
  return <button >{porps.value}</button>
}

const MapInstans = (props) => {
  return <YMaps
    query={{
      ns: 'use-load-option',
      // load: 'geoObject.addon.balloon, \
      //       control.ZoomControl,\
      //       control.FullscreenControl, \
      load: 'package.full'
    }}>
      <MapBase p={props}/>
  </YMaps>
}

const MapBase = (props) => {
  return <Map defaultState={{
    center: props.p.center,
    zoom: (props.p.zoom) ? props.p.zoom : 10,
    controls: ['zoomControl', 'fullscreenControl'],
  }}>
    <Pmark dot={props.p.center}/>
  </Map>
}

const Pmark = (props) => {
  return <Placemark
      defaultGeometry={props.dot}
      properties={{ balloonContentBody: "this is just text" }}
    />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='item'>
          <MapInstans center={[11.6, 43.15]} zoom={12}/>
          <But value="button11"/>
        </div>
        <div className='item'>
          <MapInstans center={[55, 43]}/>
          <But value="button2"/>
        </div>
      </header>
    </div>
  );
}

export default App;

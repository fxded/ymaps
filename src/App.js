// import logo from './logo.svg';
import './App.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YMaps query={{ns: 'use-load-option',
                       // load: 'geoObject.addon.balloon, \
                       //       control.ZoomControl,\
                       //       control.FullscreenControl, \
                        load:      'package.full'}}>
          <Map defaultState={{ 
            center: [55, 37], 
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          // modules={['control.FullscreenControl']}
          >
            <Placemark
              defaultGeometry={[55, 37]}
              properties={{balloonContentBody: "this is just text"}}
            />
          </Map>
        </YMaps>
      </header>
    </div>
  );
}

export default App;

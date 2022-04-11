// import logo from './logo.svg';
import './App.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import React from 'react'

const But = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>
}

class MapInstans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: (props.zoom) ? props.zoom : 9,
      center: props.center
    }
  }

  upZoom = (zoom) => {
    this.setState({
      zoom: (this.state.zoom === 2) ? 12 : 2,
    })
    console.log('-----', this.state.zoom)
  }

  setCenter = (coord) => {
    this.setState({
      center: coord,
    })
  }

  setEvents = (event) => {
    let ret
    switch(event) {
      case 'zoom': ret = () => this.upZoom(); break;
      case 'center': ret = () => this.setCenter([34, 56]); break;
      default: ret = () => this.upZoom()
    }
    return ret
  }

  render() {
    return <YMaps
      query={{
        ns: 'use-load-option',
        // load: 'geoObject.addon.balloon, \
        //       control.ZoomControl,\
        //       control.FullscreenControl, \
        load: 'package.full'
      }}>
        <MapBase zoom={this.state.zoom} center={this.state.center} width={this.props.width}/>
        <But value={this.props.button} onClick={this.setEvents(this.props.button)}/>
        <p>{this.state.zoom}</p>
    </YMaps>
  }
}

const MapBase = (props) => {
  return <Map state={{
    center: props.center,
    zoom: props.zoom,
    controls: ['zoomControl', 'fullscreenControl'],
  }}
  width={props.width}
  >
    <Pmark dot={props.center}/>
  </Map>
}

const Pmark = (props) => {
  return <Placemark
      geometry={props.dot}
      properties={{ balloonContentBody: "this is just text" }}
    />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='item'>
          <MapInstans
            center={[11.6, 43.15]}
            zoom={15}
            button={'zoom'}
            width={500}
          />
        </div>
        <div className='item'>
          <MapInstans center={[55, 37]} button={'center'} width={400}/>
        </div>
      </header>
    </div>
  );
}

export default App;

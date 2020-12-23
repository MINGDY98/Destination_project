import React from 'react';
import styled from 'styled-components';
import { VectorMap } from '@south-paw/react-vector-maps';
import KoreaMap from '../assets/data/koreaMap.json'

const MapStyle =  styled.div`
    margin: 1rem auto;
    minWidth: 300px;
    width:'100%';

    svg {
      stroke: #f6f6f6;

      // All layers are just path elements
      path {
        fill: rgba(0,199,235, 0.5);
        cursor: pointer;
        outline: none;

        // When a layer is hovered
        &:hover {
          fill: rgba(0,199,235,0.83);
        }

        // When a layer is focused.
        &:focus {
          fill: rgba(0,199,235,0.7);
        }

        // When a layer is 'checked' (via checkedLayers prop).
        &[aria-checked='true'] {
          fill: rgba(0,199,235,1);
        }

        // When a layer is 'selected' (via currentLayers prop).
        &[aria-current='true'] {
          fill: rgba(0,199,235,0.83);
        }

        // You can also highlight a specific layer via it's id
        &[id="nz-can"] {
          fill: rgba(0,199,235,0.6);
        }
      }
    }`;

const Map =({clicked, setClicked}) =>{
  const layerProps = {
    //onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    //onMouseLeave: ({ target }) => setHovered('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  return(
    <MapStyle>
      <VectorMap {...KoreaMap} layerProps={layerProps} checkedLayers={['nz-auk']} currentLayers={['nz-wgn']} />
    </MapStyle>
  )

}
export default Map;
import { useRef, useState } from 'react'
import './App.css'
import CanvasDraw from "react-canvas-draw";

function App() {
  const [brushRad, setBrushRad] = useState(15);
  const [selectedImage, setSelectedImage] = useState(null);
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState();
  const [display, setDisplay] = useState(false);
  const ima = new Image();

  const handleExport = () => {
    const base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
    setDisplay(true);
    setDrawing(base64);
  };

  return (
    <div className="grid-container">
      {/* Side Bar for Brush Size and Uploading image */}
      <div className="grid-item sidebar d-flex flex-column">
        <div className="">
          {/* Brush size */}
          <input type="range" name="radius" id="radius" min="0" max="25" step="1"
            onChange={e => setBrushRad(e.target.value)}
          />
          Bursh Size
        </div>
        <div>
          {/* Upload image */}
        <input
          type="file"
          name="Image"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
            ima.src = URL.createObjectURL(event.target.files[0]);
            ima.onload = () => {
              setHeight(ima.height);
              setWidth(ima.width);
          };
          }}
        />
          {/* Save Canvas */}
          {selectedImage &&
            <button
            type="button"
           onClick={handleExport}
          >
           Save
          </button>
        }
        </div>
      </div>
      {/* Header(not neccessary / for styling) */}
      <div className='grid-item d-flex'></div>

          {/* Canvas */}
      <div className='grid-item d-flex'>
      <div>
        {selectedImage && !display && <CanvasDraw 
            enablePanAndZoom
            brushColor='#FFFFFF'
            backgroundColor='#000000'
            brushRadius={brushRad}
            canvasHeight={height}
            canvasWidth= {width}
            imgSrc={URL.createObjectURL(selectedImage)}
            ref={canvasRef}
          />
        }
        {!selectedImage && <div>
          Upload An Image
          </div>
        }
      </div>
      <div>
        {/* {displayImage} */}
        <div>
        {display &&
        <div className="contain">
          <img className="msk-img" src={drawing} alt="exported drawing" />
          <img className="bg-img" src={URL.createObjectURL(selectedImage)} />
        </div>
        }
        </div>
        {display && <img src={URL.createObjectURL(selectedImage)} />}
      </div>
      </div>
    </div>
  )
}

export default App

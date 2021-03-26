import React, { useState, useRef } from "react";
import "./App.css";
import Slider from "./components/Slider";

export default function App() {
  let [imageUrl, setimageUrl] = useState("");
  let [mouseOffset, setmouseOffset] = useState({
    x: 0,
    y: 0,
  });
  let [isMouseDown, setisMouseDown] = useState(false);
  let [editing, setEditting] = useState({
    blur: 0,
    greyscale: 0,
    brightness: 100,
    contrast: 100,
    hueRotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
    rotate: 0,
    skewx: 0,
    skewy: 0,
    rotatex: 0,
    rotatey: 0,
    perspective: 0,
    width: 550,
    height: 350,
  });
  let image_uploader = (e) => {
    let image_url = URL.createObjectURL(e.target.files[0]);
    setimageUrl(image_url);
  };

  let runner = (type, value) => {
    if (type === "blur") {
      setEditting({
        ...editing,
        blur: value,
      });
    }
    if (type === "greyscale") {
      setEditting({
        ...editing,
        greyscale: value,
      });
    }
    if (type === "brightness") {
      setEditting({
        ...editing,
        brightness: value,
      });
    }
    if (type === "contrast") {
      setEditting({
        ...editing,
        contrast: value,
      });
    }
    if (type === "hue-rotate") {
      setEditting({
        ...editing,
        hueRotate: value,
      });
    }
    if (type === "invert") {
      setEditting({
        ...editing,
        invert: value,
      });
    }
    if (type === "opacity") {
      setEditting({
        ...editing,
        opacity: value,
      });
    }
    if (type === "saturate") {
      setEditting({
        ...editing,
        saturate: value,
      });
    }
    if (type === "sepia") {
      setEditting({
        ...editing,
        sepia: value,
      });
    }
    if (type === "rotate") {
      setEditting({
        ...editing,
        rotate: value,
      });
    }
    if (type === "skew X") {
      setEditting({
        ...editing,
        skewx: value,
      });
    }
    if (type === "skew Y") {
      setEditting({
        ...editing,
        skewy: value,
      });
    }
    if (type === "rotate X") {
      setEditting({
        ...editing,
        rotatex: value,
      });
    }
    if (type === "rotate Y") {
      setEditting({
        ...editing,
        rotatey: value,
      });
    }
    if (type === "perspective") {
      setEditting({
        ...editing,
        perspective: value,
      });
    }
  };

  let resetImage = () => {
    setEditting({
      blur: 0,
      greyscale: 0,
      brightness: 100,
      contrast: 100,
      hueRotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0,
      rotate: 0,
      skewx: 0,
      skewy: 0,
      rotatex: 0,
      rotatey: 0,
      perspective: 0,
      width: editing.width,
      height: editing.height,
    });
  };

  let onmousedown = (e, item) => {
    e.target.style.position = "absolute";
    setisMouseDown(true);
    setmouseOffset({
      x: e.target.offsetLeft - e.clientX,
      y: e.target.offsetTop - e.clientY,
    });
    e.target.style.opacity = 0.5;
    e.target.style.cursor = "grabbing";
  };

  let onmouseup = (e) => {
    e.target.style.cursor = "grab";
    e.target.style.opacity = 1;
    setisMouseDown(false);
  };

  let mousemove = (e) => {
    e.preventDefault();
    if (isMouseDown) {
      e.target.style.left = e.clientX + mouseOffset.x + "px";
      e.target.style.top = e.clientY + mouseOffset.y + "px";
    }
  };

  return (
    <div className="App">
      <div className="left_side">
        <div className="widthHeight_container">
          <h4 style={{ marginBottom: 5, color: "#624346" }}>width : </h4>
          <input
            style={{ marginBottom: 20 }}
            onChange={(e) => setEditting({ ...editing, width: e.target.value })}
            type="number"
            value={editing.width}
            name="width"
            placeholder="Set Width Of Image"
            id=""
          />
          <br />
          <h4 style={{ marginBottom: 5, color: "#624346" }}>Height : </h4>
          <input
            type="number"
            onChange={(e) =>
              setEditting({ ...editing, height: e.target.value })
            }
            name="height"
            value={editing.height}
            placeholder="Set Height Of Image"
            id=""
          />
          <br />
        </div>
        <Slider
          min={0}
          range={100}
          ivalue={editing.blur}
          runner={runner}
          title="blur"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.greyscale}
          runner={runner}
          title="greyscale"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.brightness}
          runner={runner}
          title="brightness"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.contrast}
          runner={runner}
          title="contrast"
        />
        <Slider
          min={0}
          range={360}
          ivalue={editing.hueRotate}
          runner={runner}
          title="hue-rotate"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.invert}
          runner={runner}
          title="invert"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.opacity}
          runner={runner}
          title="opacity"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.saturate}
          runner={runner}
          title="saturate"
        />
        <Slider
          min={0}
          range={100}
          ivalue={editing.sepia}
          runner={runner}
          title="sepia"
        />
        <Slider
          min={-360}
          range={360}
          ivalue={editing.rotate}
          runner={runner}
          title="rotate"
        />
        <Slider
          min={-360}
          range={360}
          ivalue={editing.rotatex}
          runner={runner}
          title="rotate X"
        />
        <Slider
          min={-360}
          range={360}
          ivalue={editing.rotatey}
          runner={runner}
          title="rotate Y"
        />

        <Slider
          min={-360}
          range={360}
          ivalue={editing.skewx}
          runner={runner}
          title="skew X"
        />
        <Slider
          min={-360}
          range={360}
          ivalue={editing.skewy}
          runner={runner}
          title="skew Y"
        />
        <Slider
          min={0}
          range={2000}
          ivalue={editing.perspective}
          runner={runner}
          title="perspective"
        />
      </div>
      <div className="right_side">
        <img
          onMouseMove={mousemove}
          onMouseUp={onmouseup}
          onMouseDown={onmousedown}
          draggable={true}
          src={imageUrl}
          style={{
            display: imageUrl == "" ? "none" : "inline",
            width: `${editing.width}px`,
            height: `${editing.height}px`,
            filter: ` sepia(${editing.sepia}%) saturate(${editing.saturate}%) opacity(${editing.opacity}%) blur(${editing.blur}px) grayscale(${editing.greyscale}%) brightness(${editing.brightness}%) contrast(${editing.contrast}%) hue-rotate(${editing.hueRotate}deg) invert(${editing.invert}%)`,
            transform: ` perspective(${editing.perspective}px) rotateX(${editing.rotatex}deg) rotateY(${editing.rotatey}deg) skewX(${editing.skewx}deg) skewY(${editing.skewy}deg) rotate(${editing.rotate}deg)`,
          }}
          alt="image"
          className="image"
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={image_uploader}
          id="Image_Uploader"
        />
        <div style={{ display: "flex" }}>
          <label htmlFor="Image_Uploader" className="uploadImage_btn">
            {imageUrl == "" ? "Upload Image" : "Change Image"}
          </label>
          {imageUrl == "" ? null : (
            <>
              <button onClick={resetImage} className="uploadImage_btn">
                reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

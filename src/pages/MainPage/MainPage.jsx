import React, { useState } from "react";
import "./MainPage.css";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import QRCode from "react-qr-code";
import DownloadIcon from "@mui/icons-material/Download";

export default function MainPage() {
  const [inputText, setInputText] = useState("hello there");

  function download() {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }

  return (
    <>
      <Header />
      <div className="page">
        <h1 className="title">Welcome to the Simple QR Code Generator</h1>
        <div className="mainContainer">
          <div className="container">
            <Input
              className="mainInput"
              type="text"
              placeholder="Enter your text or url here"
              onChange={(event) => setInputText(event.target.value)}
            />
            <p className="legend">
              (Your QR Code will be generated automatically)
            </p>
          </div>
          <br />
          <div className="container">
            <div className="qrCodeContainer">
              <QRCode
                id="QRCode"
                bgColor="#F1F7ED"
                fgColor="#0B1D0E"
                value={inputText}
              />
            </div>
            <br />
            <br />
            <Button className="mainBtn" type="button" onClick={download}>
              <DownloadIcon className="icon" />
              Download QR Code (PNG)
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

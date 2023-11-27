import React, { useState } from "react";
import { Video } from "@tuseefahmed110/al-kafeel-ui";
import videox from "../../../static/assests/video/hello.mp4";
function Videos() {
  const [isSelectedCode, setisSelectedCode] = useState(true);
  return (
    <>
      <div className="show-comp">
        <div className="heading">
          <h1>Video Components</h1>
        </div>
        <div className="description py-2">
          <p>
          Import the Video component and use the component to embed the video on the page. 
          </p>
        </div>
        <hr className="hr-align" />
        <div className="how-to-import">
          <h2>Import</h2>
          <p className="mb-1">
            AL-Kafeel UI exports Video-related components:
          </p>
          <div className="group">
            <div className="first d-flex align-items-center">
              <div className="circle-custom">Video:</div>
              <p>The main component to display an Video reels</p>
            </div>
          </div>
        </div>

        <div className="d-flex import-align radius-1">
          <code className="import-code gap-1 d-flex">
            <p className="import-color">import</p>
            <p>&#123;Video&#125;</p>
            <p className="import-color">from</p>
            <p className="green-color">'@tuseefahmed110/al-kafeel-ui';</p>
          </code>
        </div>

        <div className="usage">
          <div className="heading">
            <h2>Usage</h2>
          </div>
          <div className="preview-code d-flex gap-3">
            <div
              className={`preview ${isSelectedCode ? "bottom-border" : ""}`}
              onClick={() => setisSelectedCode(true)}
            >
              <h4>Preview</h4>
            </div>
            <div
              className={`code ${isSelectedCode ? "" : "bottom-border"}`}
              onClick={() => setisSelectedCode(false)}
            >
              <h4>Code</h4>
            </div>
          </div>
          {isSelectedCode ? (
            <div className="preview-show d-flex gap-2">
              <Video
                src={videox}
                width="200px"
                height="260px"
                className="radius-1 object-fit-cover"
              />
            </div>
          ) : (
            <pre className="code-snip radius-1 d-flex">
              <div>
                <code>
                  <span className="import-color">import </span>React{" "}
                  <span className="import-color">from</span>{" "}
                  <span className="green-color">"react"</span>;
                </code>
              </div>
              <div>
              <code>
                <span className="import-color">import </span>videox{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/video.mp4"</span>
                ;
              </code>
            </div>
              <div>
                <code className="d-flex">
                  <span className="import-color">import </span>
                 <span>&#123;Video&#125; </span> 
                  <span className="import-color"> from </span>
                  <span className="green-color">'@tuseefahmed110/al-kafeel-ui';</span>
                </code>
              </div>

              <br></br>
              <div>
                <code>
                  <span className="import-color">
                    export default function
                    <span className="custom-blue"> App() </span>&#123;
                  </span>
                </code>
              </div>
              <div>
                <code>
                  <span className="import-color">&nbsp; return</span> (
                </code>
              </div>
             

              <div>
                <code>
                  &nbsp;&nbsp; &lt;
                  <span className="custom-codeColor">Video</span>
                  <span className="custom-lightBlue">
                    &nbsp;src=&#123;videox&#125;
                  </span>{" "}
                  <span className="custom-lightBlue">className="radius-1 object-fit-cover"</span>{" "}
                  <span className="custom-lightBlue">width="200px"</span>{" "}
                  <span className="custom-lightBlue">height="260px"</span>{" "}
                  &#47;&gt;
                </code>
              </div>

           
              <div>
                <code>&nbsp; );</code>
              </div>
              <div>
                <code>&#125;</code>
              </div>
            </pre>
          )}
        </div>
      </div>
    </>
  );
}

export default Videos;

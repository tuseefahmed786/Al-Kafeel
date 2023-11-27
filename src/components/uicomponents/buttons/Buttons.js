import React, { useState } from "react";
import "../../../styles/avatar.css";
import { Button } from "@tuseefahmed110/al-kafeel-ui";
// import fraz from "../../../static/assests/avatar/fara.jfif";
// import random from "../../../static/assests/avatar/random.jfif";
// import me from "../../../static/assests/avatar/me.jfif";
// import empg from "../../../static/assests/avatar/empg.jfif";
function Buttons() {
  const [isSelectedCode, setisSelectedCode] = useState(true);
  const [isSelectedVariant, setisSelectedVariant] = useState(true);
  // const [isBorder, setisBorder] = useState(true);
  // const [isSizing, setIsSizing] = useState(true);
  return (
    <>
      <div className="show-comp">
        <div className="heading">
          <h1>Button</h1>
        </div>
        <div className="description py-2">
          <p>
            Button component is used to trigger an action or event, such as
            submitting a form, opening a Dialog, canceling an action, or
            performing a delete operation.
          </p>
        </div>
        <hr className="hr-align" />
        <div className="how-to-import">
          <h2>Import</h2>
          <p className="mb-1">
            AL-Kafeel UI exports button-related components:
          </p>
          <div className="group">
            <div className="first d-flex align-items-center">
              <div className="circle-custom">Button:</div>
              <p>The main component to display an Button</p>
            </div>
          </div>
        </div>

        <div className="d-flex import-align radius-1">
          <code className="import-code gap-1 d-flex">
            <p className="import-color">import</p>
            <p>&#123;Avatar,AvatarLayout&#125;</p>
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
              <Button label="But Now It" variant="contained" color="white" />
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
                <code className="d-flex">
                  <span className="import-color">import</span>
                  <span>  &#123;Button&#125; </span>
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
                  &nbsp; &lt;
                  <span className="custom-codeColor">
                    div className="d-flex gap-2"
                  </span>
                  &gt;
                </code>
              </div>

              <div>
                <code>
                  &nbsp;&nbsp; &lt;
                  <span className="custom-codeColor">Button</span>
                  <span className="custom-lightBlue">
                    &nbsp;variant="contained"
                  </span>{" "}
                  <span className="custom-lightBlue">label="contained"</span>{" "}
                  <span className="custom-lightBlue">color="white"</span>{" "}
                  &#47;&gt;
                </code>
              </div>

              <div>
                <code>
                  &nbsp; &lt;&#47;<span className="custom-codeColor">div</span>
                  &gt;
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

        <div className="usage">
          <div className="heading">
            <h2>Button variant</h2>
          </div>
          <div className="preview-code d-flex gap-3">
            <div
              className={`preview ${isSelectedVariant ? "bottom-border" : ""}`}
              onClick={() => setisSelectedVariant(true)}
            >
              <h4>Preview</h4>
            </div>
            <div
              className={`code ${isSelectedVariant ? "" : "bottom-border"}`}
              onClick={() => setisSelectedVariant(false)}
            >
              <h4>Code</h4>
            </div>
          </div>
          {isSelectedVariant ? (
            <div className="preview-show d-flex gap-2">
              <Button
                label="Buy Now It"
                borderRadius="rounded-pill"
                variant="outlined"
                color="white"
              />
              <Button label="Contained" variant="contained" color="white" />
              <Button label="Outlined" variant="outlined" color="white" />
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
                <code className="d-flex">
                  <span className="import-color">import</span>
                  <span> &#123;Button&#125;</span>
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
                  &nbsp; &lt;
                  <span className="custom-codeColor">
                    div className="d-flex gap-2"
                  </span>
                  &gt;
                </code>
              </div>

              <div>
                <code>
                  &nbsp;&nbsp; &lt;
                  <span className="custom-codeColor">Button</span>
                  <span className="custom-lightBlue">
                    &nbsp;borderRadius="rounded-pill"
                  </span>{" "}
                  <span className="custom-lightBlue">variant="outlined"</span>{" "}
                  <span className="custom-lightBlue">label="Buy Now It"</span>{" "}
                  <span className="custom-lightBlue">color="white"</span>{" "}
                  &#47;&gt;
                </code>
              </div>

              <div>
                <code>
                  &nbsp;&nbsp; &lt;
                  <span className="custom-codeColor">Button</span>
                  <span className="custom-lightBlue">
                    &nbsp;variant="contained"
                  </span>{" "}
                  <span className="custom-lightBlue">label="contained"</span>{" "}
                  <span className="custom-lightBlue">color="white"</span>{" "}
                  &#47;&gt;
                </code>
              </div>
              <div>
                <code>
                  &nbsp;&nbsp; &lt;
                  <span className="custom-codeColor">Button</span>
                  <span className="custom-lightBlue">
                    &nbsp;variant="Outlined"
                  </span>{" "}
                  <span className="custom-lightBlue">label="Outlined"</span>{" "}
                  <span className="custom-lightBlue">color="white"</span>{" "}
                  &#47;&gt;
                </code>
              </div>
              <div>
                <code>
                  &nbsp; &lt;&#47;<span className="custom-codeColor">div</span>
                  &gt;
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

export default Buttons;

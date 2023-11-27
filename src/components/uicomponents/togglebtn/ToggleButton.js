import React, { useState } from "react";
import { ToggelButton } from "@tuseefahmed110/al-kafeel-ui";
function ToggleButton() {
  const [isSelectedCode, setisSelectedCode] = useState(true);
  const [isSubscribe, setIsSubscribe] = useState(false);

  return (
    <>
      <div className="show-comp">
        <div className="heading">
          <h1>Toggle Button</h1>
        </div>
        <div className="description py-2">
          <p>
            Import the Toggle component and use the component to toggle
            functionality
          </p>
        </div>
        <hr className="hr-align" />
        <div className="how-to-import">
          <h2>Import</h2>
          <p className="mb-1">
            AL-Kafeel UI exports Toggle-related components:
          </p>
          <div className="group">
            <div className="first d-flex align-items-center">
              <div className="circle-custom">Toggle:</div>
              <p>The main component to display an Toggle button</p>
            </div>
          </div>
        </div>

        <div className="d-flex import-align radius-1">
          <code className="import-code gap-1 d-flex">
            <p className="import-color">import</p>
            <p>&#123;ToggelButton&#125;</p>
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
              <ToggelButton
                className={`ph-3 py-1 radius-2  
      ${
        isSubscribe
          ? "unfollow-color border-custom"
          : "border-1 white follow-color"
      }`}
                onPress={() => setIsSubscribe(!isSubscribe)}
              >
                {isSubscribe ? "UnFollow" : "Follow"}
              </ToggelButton>
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
              <div></div>
              <div>
                <code className="d-flex">
                  <span className="import-color">import</span>
                  <span> &#123;ToggelButton&#125;</span>
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
                  <span className="import-color">const&nbsp;</span>
                  [isSubscribe, setIsSubscribe] =
                  <span className="import-color"> useState</span>
                  (false);
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
                  <span className="custom-codeColor">ToggelButton</span>
                  <span className="custom-lightBlue">
                    {" "}
                    className=&#123;`ph-3 py-1 radius-2
                    <span className="import-color"> $&#123;isSubscribe ?</span> 'unfollow-color
                    border-custom' <span className="import-color">:</span> 'border-1 white follow-color'<span className="import-color">&#125;`&#125;</span>
                  </span>{" "}
                  <span className="custom-lightBlue">
                    {" "}
                    <br></br> &nbsp;&nbsp; onPress=&#123;() =>
                    setIsSubscribe(!isSubscribe)&#125;
                  </span>
                  &gt;
                </code>
              </div>
              <span> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;isSubscribe ? "UnFollow" : "Follow"&#125;</span>
              <div>
                
              </div>
              <div>
                <code>
                  &nbsp;&nbsp; &lt;&#47;
                  <span className="custom-codeColor">ToggelButton</span>
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

export default ToggleButton;

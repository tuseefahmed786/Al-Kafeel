import React, { useState } from "react";
import "../../../styles/avatar.css";
import { Avatar} from "@tuseefahmed110/al-kafeel-ui";
import fraz from "../../../static/assests/avatar/fara.jfif";
import random from "../../../static/assests/avatar/random.jfif";
import me from "../../../static/assests/avatar/me.jfif";
import empg from "../../../static/assests/avatar/empg.jfif";
function Avatars() {
  const [isSelectedCode, setisSelectedCode] = useState(true);
  // const [isSelectedLayout, setisSelectedLayout] = useState(true)
  const [isBorder, setisBorder] = useState(true)
  const [isSizing, setIsSizing] = useState(true)

  
  return (
    <div className="show-comp">
      <div className="heading">
        <h1>Avatar</h1>

      </div>
      <div className="description py-2">
        <p>
          The Avatar component is used to represent a user, and displays the
          profile picture, initials or fallback icon.
        </p>
      </div>
      <hr className="hr-align" />
      <div className="how-to-import">
        <h2>Import</h2>
        <p className="mb-1">AL-Kafeel UI exports 2 avatar-related components:</p>
        <div className="group">
          <div className="d-flex align-items-center">
            <div className="circle-custom">Avatar: </div>
            <p>The main component to display an avatar</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="circle-custom">Avatar Group:  </div>
            <p> A wrapper component to display a group of avatars.</p>
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
            <Avatar  src={fraz} />
            <Avatar src={random} />
            <Avatar src={me} />
            <Avatar src={empg} />
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
                <span> &#123;Avatar&#125;</span>
                <span className="import-color"> from </span>
                <span className="green-color">'@tuseefahmed110/al-kafeel-ui';</span>
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarOne{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatarone.png"</span>;
              </code>
            </div>

            <div>
              <code>
                <span className="import-color">import </span>AvatarTwo{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatartwo.png"</span>;
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarThree{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">
                  "../assests/avatarthree.png"
                </span>
                ;
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarFour{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatarfour.png"</span>
                ;
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
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarOne&#125;
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarTwo&#125;
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarThree&#125;
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarFour&#125;
                </span>{" "}
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
          <h2>Avatar Border</h2>
        </div>
        <div className="preview-code d-flex gap-3">
          <div
            className={`preview ${isBorder ? "bottom-border" : ""}`}
            onClick={() => setisBorder(true)}
          >
            <h4>Preview</h4>
          </div>
          <div
            className={`code ${isBorder ? "" : "bottom-border"}`}
            onClick={() => setisBorder(false)}
          >
            <h4>Code</h4>
          </div>
        </div>
        {isBorder ? (
          <div className="preview-show d-flex gap-2">
            <Avatar src={fraz} isBorder/>
            <Avatar src={random} isBorder/>
            <Avatar src={me} isBorder/>
            <Avatar src={empg} isBorder/>
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
                <span> &#123;Avatar&#125;</span>
                <span className="import-color"> from </span>
                <span className="green-color">'@tuseefahmed110/al-kafeel-ui';</span>
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarOne{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatarone.png"</span>;
              </code>
            </div>

            <div>
              <code>
                <span className="import-color">import </span>AvatarTwo{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatartwo.png"</span>;
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarThree{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">
                  "../assests/avatarthree.png"
                </span>
                ;
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarFour{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatarfour.png"</span>
                ;
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
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarOne&#125;
                  <span className="custom-codeColor"> isBorder</span>
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarTwo&#125;
                  <span className="custom-codeColor"> isBorder</span>
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarThree&#125;
                  <span className="custom-codeColor"> isBorder</span>
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarFour&#125;
                  <span className="custom-codeColor"> isBorder</span>
                </span>{" "}
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
          <h2>Avatar Sizing</h2>
        </div>
        <div className="preview-code d-flex gap-3">
          <div
            className={`preview ${isSizing ? "bottom-border" : ""}`}
            onClick={() => setIsSizing(true)}
          >
            <h4>Preview</h4>
          </div>
          <div
            className={`code ${isSizing ? "" : "bottom-border"}`}
            onClick={() => setIsSizing(false)}
          >
            <h4>Code</h4>
          </div>
        </div>
        {isSizing ? (
       
         <div className="preview-show d-flex gap-2" style={{overflow:"scroll"}}>
         <div className="sizing-overflow d-flex gap-1">
            <Avatar src={fraz} />
            <Avatar src={random} sm />
            <Avatar src={me} lg/>
            <Avatar src={empg} xl/>
          </div>
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
                <span> &#123;Avatar&#125;</span>
                <span className="import-color"> from </span>
                <span className="green-color">'@tuseefahmed110/al-kafeel-ui';</span>
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarOne{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatarone.png"</span>;
              </code>
            </div>

            <div>
              <code>
                <span className="import-color">import </span>AvatarTwo{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatartwo.png"</span>;
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarThree{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">
                  "../assests/avatarthree.png"
                </span>
                ;
              </code>
            </div>
            <div>
              <code>
                <span className="import-color">import </span>AvatarFour{" "}
                <span className="import-color">from</span>{" "}
                <span className="green-color">"../assests/avatarfour.png"</span>
                ;
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
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarOne&#125;
                  <span className="custom-codeColor"></span>
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarTwo&#125;
                  <span className="custom-codeColor"> sm</span>
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarThree&#125;
                  <span className="custom-codeColor"> lg</span>
                </span>{" "}
                &#47;&gt;
              </code>
            </div>

            <div>
              <code>
                &nbsp;&nbsp; &lt;
                <span className="custom-codeColor">Avatar</span>
                <span className="custom-lightBlue">
                  &nbsp;src=&#123;AvatarFour&#125;
                  <span className="custom-codeColor"> xl</span>
                </span>{" "}
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
  );
}

export default Avatars;

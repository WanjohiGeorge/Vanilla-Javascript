<h1> Vanilla-Javascript </h1>
<h2> This repository contains complex html elements created in Vanilla Javascript</h2>
    <hr>
    <h2>Projects:</h2>
    <ol style="font-size:large">
        <li><a href="#ResibleMovableHTMLDiv">Resible and Draggable HTML Div</a></li>
        <li><a href="#ImageCropper">Image Cropper</a></li>
    </ol>
    <ol>
        <div id="ResibleMovableHTMLDiv">
            <hr>
            <li style="font-size:large"> Resizable and Draggable HTML Div</li>
            <p>This element is defined as a complex function with all the required logic to render, move and resize.</p>
            <h3>How to Use Resizable Element</h3>
            <ol> <span style="color: #A0F1AF;">
                    <li> Create a HTML document</li>
                    <li> Add the javascript file to the html document at the end of body element.</li>
                    <li> Append a <b style="color: #090;"> Resizable </b>element into the file </li>
                    <code><div><span style="color: #d4d;"></span><span style="color: #F47;">&lt;</span><span style="color: #C90;">body</span><span style="color: #F47;">&gt;</span></div>    <div><span style="color: #d4d;">        </span><span style="color: #F47;">&lt;</span><span style="color: #C90;">script</span><span style="color: #d4d;"> </span><span style="color: #9cdcfe;">src</span><span style="color: #d4d;">=</span><span style="color: #ce9178;">"./resizable-movable-element.js"</span><span style="color: #F47;">&gt;&lt;/</span><span style="color: #C90;">script</span><span style="color: #F47;">&gt;</span></div><div><span style="color: #d4d;">        </span><span style="color: #F47;">&lt;</span><span style="color: #C90;">script</span><span style="color: #F47;">&gt;</span><span style="color: #d4d;"> </span><span style="color: #9cdcfe;">document</span><span style="color: #d4d;">.</span><span style="color: #9cdcfe;">body</span><span style="color: #d4d;">.</span><span style="color: #dcdcaa;">appendChild</span><span style="color: #d4d;">(</span><span style="color: #dcdcaa;">ResizableElement</span><span style="color: #d4d;">());</span><span style="color: #F47;">&lt;/</span><span style="color: #C90;">script</span><span style="color: #F47;">&gt;</span></div> <div><span style="color: #d4d;">    </span><span style="color: #F47;">&lt;/</span><span style="color: #C90;">body</span><span style="color: #F47;">&gt;</span><span style="color: #d4d;">  </span> </div></code>
                    <li>Save the html file and open in a browser</li>
                </span></ol>
            <h3>Results:</h3> <!-- insert image -->
            <img src="https://github.com/WanjohiGeorge/Vanilla-Javascript/blob/main/resizable-movable-element/resizable-movable-html-div.png" alt="Resible Movable HTML Div">
            <h3>Features</h3>
            <ul>           
                <li>Element can contain other elements.</li>
                <li>You can drag the element on top of other elements</li>
                <li>The element can be resized to fit in 8-cardinal points. (N, E, W, S, NE, NW, SW, SE). Hovering on the resizers shows the appropriate Cursor</li>
            </ul>
            <h3>Applications</h3>
            <ul>
                <li>In chart drawing applications</li>
                <li>Online Image cropping application</li>
                <li>...etc</li>
            </ul>
        </div>
        <div id="ImageCropper">
            <hr>
            <li style="font-size:large">Image Cropping</li>
        </div>
    </ol>
</div>
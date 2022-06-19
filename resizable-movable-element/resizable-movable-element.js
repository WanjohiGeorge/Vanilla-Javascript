ResizableElement = () => {
    classname = null;
    var clicks,
        o,
        t,
        l,
        h,
        w,
        direction,
        io,
        x,
        y,
        x1,
        y1,
        dx,
        dy,
        shouldResize,
        shouldMove;
    var reset = () => {
        shouldResize = false;
        shouldMove = false;
        window.removeEventListener("mousemove", mousem)
    };
    var set = (ev) => {
        shouldMove = false;
        shouldResize = true;
        x = ev.pageX;
        y = ev.pageY;
        io = ev.target;
        function setDirection(io) {
            if (io.classList.contains("r")) {
                direction = "e";
            } else if (io.classList.contains("t")) {
                direction = "n";
            } else if (io.classList.contains("b")) {
                direction = "s";
            } else if (io.classList.contains("l")) {
                direction = "w";
            } else if (io.classList.contains("tlc")) {
                direction = "nw";
            } else if (io.classList.contains("trc")) {
                direction = "ne";
            } else if (io.classList.contains("blc")) {
                direction = "sw";
            } else if (io.classList.contains("brc")) {
                direction = "se";
            }
        }
        ev.target.onmousemove = mousem;
        updatePositions();
        setDirection(io);
    };

    clicks = 0;
    o = document.createElement("div"); o.classList.add("resizable");
    // add stylesheet
    o.innerHTML += '<style type="text/css">*{--circle-w: 4.1px;} .resizable { min-height: 20px; min-width: 10px; height: 250px; width: 455px; max-height: 100%; max-width: 100%; position: absolute; } .resizeable-borders { box-sizing: border-box; height: 30%; width: 80%; min-width: 20px; cursor: nw-resize; position: absolute; top: 10px; left: 10px; box-shadow: 0 0 0 1000px rgba(89, 104, 96, 0.281); } hr.left { height: 100%; position: absolute; width: 1px; left: 0px; cursor: ew-resize; } hr.right {  width: 1px; height: 100%; position: absolute; right: 0px; cursor: ew-resize; } hr.bottom { cursor: ns-resize; width: 100%; height: 1px; position: absolute; bottom: 0px; } hr.top { cursor: ns-resize; position: absolute; width: 100%; height: 1px; top: 0px; } hr.resizer { background-size: 10px 10px, 100% 10px; padding: 0px; margin: 0px; border: 0; background: rgb(46, 46, 46); } .circle { height: var(--circle-w); width: var(--circle-w); border-radius: 100%; border: 1px rgb(46, 46, 46) solid; background-color: white; z-index: 10; } .bc { cursor: ns-resize; bottom: 0px; left: 50%; margin-bottom: calc(var(--circle-w) / -2); position: absolute; } .tc { cursor: ns-resize; position: absolute; top: 0px; left: 50%; margin-top: calc(var(--circle-w) / -2); } .rc { position: absolute; right: 0px; top: 50%; cursor: ew-resize; margin-right: calc(var(--circle-w) / -2); } .lc { position: absolute; left: 0px; top: 50%; cursor: ew-resize; margin-left: calc(var(--circle-w) / -2); } .trc { position: absolute; margin: calc(var(--circle-w) / -2) calc(var(--circle-w) / -2) 0px calc(var(--circle-w) / -2); right: 0px; top: 0px; cursor: nesw-resize; } .brc { position: absolute; margin: 0px calc(var(--circle-w) / -2) calc(var(--circle-w) / -2) calc(var(--circle-w) / -2); right: 0px; bottom: 0; cursor: nwse-resize; } .tlc { position: absolute; margin: calc(var(--circle-w) / -2) calc(var(--circle-w) / -2) 0px calc(var(--circle-w) / -2); left: 0px; top: 0; cursor: nwse-resize; } .blc { position: absolute; margin: 0px calc(var(--circle-w) / -2) calc(var(--circle-w) / -2) calc(var(--circle-w) / -2); left: 0px; bottom: 0; cursor: nesw-resize; } </style>';
    o.style.minHeight = "20px";
    o.style.minWidth = "10px";
    o.style.height = "250px";
    o.style.width = "455px";
    o.style.maxHeight = "100%";
    o.style.maxWidth = "100%";
    o.style.position = "absolute";

    var lines = [];
    function setLinesAndCircles() {
        var line = document.createElement("hr");
        line.classList = ["v r resizer right"];
        lines.push(line);
        line = document.createElement("hr");
        line.classList = ["v l resizer left"];
        lines.push(line);
        line = document.createElement("hr");
        line.classList = ["h t resizer top"];
        lines.push(line);
        line = document.createElement("hr");
        line.classList = ["h b resizer bottom"];
        lines.push(line);

        var circle = document.createElement("div");
        circle.classList = ["tc t resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["lc l resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["bc b resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["rc r resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["tlc resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["blc resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["brc resizer circle"];
        lines.push(circle);
        circle = document.createElement("div");
        circle.classList = ["trc resizer circle"];
        lines.push(circle);
        return lines;
    }
    var cl = setLinesAndCircles();
    for (var i = 0; i < cl.length; i++) {
        var e = cl[i];
        e.classList.add(classname)
        e.ontouchdown = set;
        e.ontouchup = reset;
        e.onmousedown = set;
        e.onmouseup = reset;
        o.insertAdjacentElement("beforeend", e);
    }
    o.onclick = (ev) => {
        var p_el = findResizableElement(ev.target);

        function findResizableElement(target) {
            if (target.classList.contains("resizable")) {
                return target;
            } else {
                return findResizableElement(target.parentElement)
            }
        }

        var p_el_c = p_el.childNodes;
        clicks++;
        if (clicks <= 1) {
            showResizers();
        } else {
            hideResizers();
            clicks = 0;
        }
        function hideResizers() {
            for (var i = 0; i < p_el_c.length; i++) {
                e = p_el_c[i]; if (!e.classList.contains("resizer")) continue;
                e.style.visibility = "hidden";
            }
        }
        function showResizers() {
            for (var i = 0; i < p_el_c.length; i++) {
                e = p_el_c[i];
                if (!e.classList.contains("resizer")) continue;
                e.style.visibility = "visible";
            };
        }
    };

    o.onmousedown = (ev) => {
        shouldMove = true;
        x = ev.pageX;
        y = ev.pageY;
        o.style.cursor = "move";
        updatePositions();
    };
    o.onmousemove = (ev) => {
        if (!shouldMove || shouldResize) {
            return;
        }
        clicks = 0;
        x1 = ev.pageX;
        y1 = ev.pageY;
        dx = l + (x1 - x);
        dy = t + (y1 - y);

        o.style.left = dx + "px";
        o.style.top = dy + "px";

        x = ev.pageX;
        y = ev.pageY;
        updatePositions()
    };
    o.onfocus = () => {
        showResizers = true;
    };
    o.onmouseup = () => {
        o.style.cursor = "default";
        shouldMove = false;
    };
    o.onmouseout = () => {
        o.style.cursor = "default";
        shouldMove = false;
    };
    var mousem = (ev) => {

        window.onmouseup = () => {
            shouldMove = false;
            shouldResize = false;
        };
        window.onmousemove = (ev) => {
            if (shouldMove || !shouldResize) {
                return;
            }
            clicks = 0;
            x1 = ev.pageX;
            y1 = ev.pageY;
            dx = x1 - x;
            dy = y1 - y;
            resizeDiv(dx, dy);
            x = ev.pageX;
            y = ev.pageY;
            updatePositions();
        }
    };

    function resizeDiv(x, y) {
        if (!shouldResize) {
            return;
        }
        function west() {
            // if (l + x >= o.parentElement.offsetLeft || x > 0)
            {
                o.style.width = w - x + "px";
                o.style.left = l + x + "px";
            }
        }
        function east() {
            // if (l + x + o.clientWidth <= o.parentElement.clientWidth || x < 0)
            o.style.width = w + x + "px";
        }
        function north() {
            // if (t + y >= o.parentElement.offsetTop || y > 0)
            {
                o.style.height = h - y + "px";
                o.style.top = t + y + "px";
            }
        }
        function south() {
            // if (h + y + t <= o.parentElement.clientHeight || y < 0)
            o.style.height = h + y + "px";
        }
        if (direction == "e") {
            east();
        } else if (direction == "w") {
            west();
        } else if (direction == "n") {
            north();
        } else if (direction == "s") {
            south();
        } else if (direction == "nw") {
            north();
            west();
        } else if (direction == "ne") {
            north();
            east();
        } else if (direction == "sw") {
            south();
            west();
        } else if (direction == "se") {
            south();
            east();
        }
    }
    function updatePositions() {
        t = o.offsetTop;
        l = o.offsetLeft;
        h = o.clientHeight;
        w = o.clientWidth;
    }

    return o;
}



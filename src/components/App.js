import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
    }, 250);
  }, [html, css, js]);

  return (
    <React.Fragment>
      <div className="pane top-pane">
        <Editor
          language="xml"
          DisplayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          DisplayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          DisplayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </React.Fragment>
  );
}

export default App;

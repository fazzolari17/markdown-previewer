import React
, { useCallback }// { useContext }
  from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
// import { Context } from "./Context"
// import Footer from "./components/Footer";
import { marked } from 'marked';
import { PlaceholderText } from "./placeholder";
import Prism from "./prism";

function App() {
  const [text, setText] = React.useState(PlaceholderText());
  const [isEditorMaximized, setIsEditorMaximized] = React.useState(false)
  const [isPreviewerMaximized, setIsPreviewerMaximized] = React.useState(false);

  // unable to get code highlighting to work
  marked.setOptions({
    breaks: true,
    highlight: function (code, lang) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
  })
  const editor = <Editor
      text={text}
      setText={setText}
      isEditorMaximized={isEditorMaximized}
      setIsEditorMaximized={setIsEditorMaximized}
  />
  
  const previewer = <Previewer
        text={text}
        isPreviewerMaximized={isPreviewerMaximized}
        setIsPreviewerMaximized={setIsPreviewerMaximized}
    />


  return (
    <div>
           {!isPreviewerMaximized && !isEditorMaximized ?  
           <main> {editor} {previewer} </main> : 
           isPreviewerMaximized && !isEditorMaximized ? 
           <main> {previewer} </main>: 
           !isPreviewerMaximized && isEditorMaximized ? 
           <main>{editor}</main>: <> </>}
            {/* <Footer /> */}
        </div>
  );
}

export default App
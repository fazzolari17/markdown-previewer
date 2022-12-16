import React from 'react';
import { FaFreeCodeCamp } from "react-icons/fa";
import { TbArrowsMaximize, TbArrowsDiagonalMinimize2 } from "react-icons/tb";

const Editor = ({ text, setText, isEditorMaximized, setIsEditorMaximized }) => {
  const [hovered, setHovered] = React.useState(false)

  const style = {
       hovered: { color: "#2cda9d",}, 
       notHovered: {color: "#000"}, 
       maximized: {height: "800px"}, 
       minimized: {height: "200px"}
    }

    const minimize = <div className="icon-container" >
        <TbArrowsDiagonalMinimize2 
        className="maximize-icon"
        onClick={()=>handleClick()}
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        style={hovered ? style.hovered : style.notHovered}
        /> </div>

    const maximize = <div className="icon-container" ><TbArrowsMaximize 
        className="maximize-icon"
        onClick={()=>handleClick()}
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        style={hovered ? style.hovered : style.notHovered}
        /> </div>

    const maximizeIcon = isEditorMaximized ? 
        minimize : 
        maximize

    function handleClick() {
        setIsEditorMaximized(prevState => !prevState)
    }
  
  return (
    <section className="editor">
      <div className="editor--header">
        <FaFreeCodeCamp className="fcc-icon" />
        <h2>Editor</h2>
        {maximizeIcon}
      </div>
      <textarea
        id='editor'
        onChange={(e) => setText(e.target.value)}
        value={text}
        style={isEditorMaximized ? style.maximized : style.minimized}
        className="editor--textarea" 
      ></textarea>

    </section>
  );
};

export default Editor;
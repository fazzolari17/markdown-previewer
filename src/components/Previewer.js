import React from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { TbArrowsMaximize, TbArrowsDiagonalMinimize2 } from 'react-icons/tb';
import { marked } from 'marked';

const Previewer = ({ text, isPreviewerMaximized, setIsPreviewerMaximized }) => {
  const [hovered, setHovered] = React.useState(false);

  const style = {
       hovered: { color: "#2cda9d",}, 
       notHovered: {color: "#000"}, 
       maximized: {minHeight: "900px",}, 
       minimized: {minHeight: "800px"}
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

    const maximizeIcon = isPreviewerMaximized ? 
        minimize : 
        maximize

    function handleClick() {
        setIsPreviewerMaximized(prevState => !prevState)
    }
  
  // INSERTS target="_blank" INTO HREF TAGS
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <section
      className='previewer'
      style={isPreviewerMaximized ? style.maximized : style.minimized}
    >
      <div className="previewer--header">
        <FaFreeCodeCamp className="fcc-icon" />
        <h2>Previewer</h2>
        {maximizeIcon}
      </div>

      <div
        style={isPreviewerMaximized ? style.maximized : style.minimized}
        className="previewer--textarea" 
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(text, { renderer: renderer }),
        }}
      >

      </div>
      

      
        {/* {
          marked.parse(text)} */}
      </section>
  );
};

export default Previewer;
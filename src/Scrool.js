import React from 'react';
// you can use this for scrolling any time thanks to react
// just wrap it to the component that needs scrolling

const Scrool = (props) => {
    return(
        <div style={{overflowY : 'scroll', border : '1px solid', height:'75vh',}}>
        {/* it doesn't work without this lol*/}
         {props.children}
        {/* {console.log(props.children)} */}
        </div>
    );
}

export default Scrool;
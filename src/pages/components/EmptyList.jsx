import React from 'react';

function EmptyList({text}) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: 10,
            fontSize: 16,
            color: "#bfbfbf"
          }}
        >
          {text}
        </h1>
      </div>
    );
}

export default EmptyList;
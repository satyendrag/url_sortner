import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Main = () => {
  const [textAreaText, setTextAreaText] = useState("");
  console.log(textAreaText);
  const [hashedUrl, setHashedUrl] = useState("Hash URL goes here....");

  const fetchRequest = useCallback(() => {
    const body = JSON.stringify({ fullUrl: textAreaText });
    console.log(body);
    fetch("http://localhost:3300/hashUrl", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => setHashedUrl(data.hashedUrl))
      .catch((err) => console.log(err));
  }, [textAreaText]);

  const getHashedUrl = () => {
    if (textAreaText.length == 0) {
      return alert("Please Enter Your Long URL");
    }
    fetchRequest();
  };

  const copyToClipBoard = () => {
    if (hashedUrl == "Hash URL goes here....") {
      alert("No text to copy. Please generate hashed url");
      return;
    }
    navigator.clipboard.writeText(hashedUrl);
    alert("Text copied");
  };

  return (
    <div style={{ width: "70%", marginInline: "auto", marginTop: "40px" }}>
      <div className="input-container">
        <textarea
          onChange={(e) => setTextAreaText(e.target.value)}
          placeholder="Enter your Long URL"
        ></textarea>
        <button onClick={getHashedUrl}>Get Hash URL</button>
      </div>
      <div
        style={{ marginTop: "40px", width: "100%" }}
        className="input-container"
      >
        <span
          style={{
            padding: "16px 12px",
            background: "#40504d",
            color: "white",
            width: "70%",
            display: "block",
            borderRadius: "5px",
          }}
        >
          {hashedUrl}{" "}
        </span>
        <button onClick={copyToClipBoard}>Copy Text</button>
      </div>
    </div>
  );
};

export default Main;

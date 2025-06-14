import React, { useState } from "react";

export default function BucketListApp() {
  const [tab, setTab] = useState("home");

  const renderContent = () => {
    switch (tab) {
      case "home":
        return (
          <div>
            <h2 style={{ fontWeight: "bold" }}>Today’s Spark</h2>
            <p style={{ fontStyle: "italic", color: "#555" }}>
              “Adventure is worthwhile.” – Aesop
            </p>
            <button
              style={{
                background: "#1e3a8a",
                color: "white",
                padding: "10px",
                marginTop: "20px",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              Spin Roulette
            </button>
          </div>
        );
      case "input":
        return (
          <div>
            <h2>Add Bucket List Item</h2>
            <input placeholder="Title..." style={{ width: "100%", padding: 8, marginBottom: 10 }} />
            <textarea placeholder="Description..." style={{ width: "100%", padding: 8 }} />
            <button style={{ marginTop: 10, backgroundColor: "#1e3a8a", color: "white", padding: 10, width: "100%" }}>
              Add Item
            </button>
          </div>
        );
      case "diary":
        return <p>Your completed memories will show up here.</p>;
      case "calendar":
        return <p>View your journey over time.</p>;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", backgroundColor: "#f3e7db", minHeight: "100vh" }}>
      <h1 style={{ color: "#1e3a8a", textAlign: "center" }}>BucketList</h1>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 20 }}>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("input")}>Input</button>
        <button onClick={() => setTab("diary")}>Diary</button>
        <button onClick={() => setTab("calendar")}>Calendar</button>
      </div>
      {renderContent()}
    </div>
  );
}

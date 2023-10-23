import React from "react";
import CardField from "../CardField/CardField";

function BestSeller(progs) {
  const IsLoading = progs.IsLoading;
  const value = progs.value;
  return (
    <div
      style={{
        width: "100%",
        padding:'10% 0',
        marginTop: "30px",
        marginBottom: "30px",
        background: "#ccc",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <CardField IsLoading={IsLoading} value={value} />
      </div>
    </div>
  );
}

export default BestSeller;

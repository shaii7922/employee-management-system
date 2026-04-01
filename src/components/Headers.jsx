import React from "react";

const Headers = ({ currentUser,onLogout }) => {
   if (!currentUser) return null;
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        heLLo
        <br />
        <span className="text-3xl font-semibold"> {currentUser?.name}</span>{" "}
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default Headers;

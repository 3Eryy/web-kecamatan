import React from "react";

type AlertProps = {
  type?: "success" | "error";
  children: React.ReactNode;
};

const Alert = ({ type = "success", children }: AlertProps) => {
  const bgColor = type === "success" ? "bg-green-200" : "bg-red-200";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";

  return (
    <div className={`${bgColor} ${textColor} p-3 rounded flex justify-between items-center mb-4`}>
      <div>{children}</div>
    </div>
  );
};

export default Alert;

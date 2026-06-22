import React from "react";
import { ResumeContext } from "../context/ResumeContext";

export const Skills = () => {
  const context = React.useContext(ResumeContext);

  if (!context) {
    throw new Error("ResumeContext must be used within ResumeProvider");
  }

  const { state, dispatch } = context;

  return (
    <div className="flex itesm-center justify-center">
      <div className="w-full max-w rounded-lg border border-gray-300 bg-white m-4 p-4 shadow-sm">
        <p className="mb-4 block text-lg font-medium text-gray-700">Skills</p>
        <div className="mb-2">
          <textarea
            value={state.skills}
            placeholder="Skills"
            rows={3}
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "SET_SKILLS",
                payload: e.target.value.split(",").map((skill) => skill.trim()),
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

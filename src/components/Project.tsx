import React from "react";
import { ResumeContext } from "../context/ResumeContext";

export const Project = () => {
  const [sections, setSections] = React.useState([1]);

  const addSection = () => {
    setSections([...sections, Date.now()]);
  };

  const removeSection = (id: number) => {
    setSections(sections.filter((section) => section !== id));
  };

  const context = React.useContext(ResumeContext);

  if (!context) {
    throw new Error("ResumeContext must be used within ResumeProvider");
  }

  const { state, dispatch } = context;

  return (
    <div className="flex itesm-center justify-center">
      <div className="w-full max-w rounded-lg border border-gray-300 bg-white m-4 p-4 shadow-sm">
        <p className="mb-4 block text-lg font-medium text-gray-700">Projects</p>
        {sections.map((id, index) => (
          <div
            key={id}
            className="rounded-lg mb-2 border border-gray-300 bg-white p-4 shadow"
          >
            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Project"
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.projects[index]?.projectName || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_PROJECT",
                    payload: {
                      index,
                      field: "projectName",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Technology Used
              </label>
              <input
                type="text"
                placeholder="Technologies"
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.projects[index]?.technologies || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_PROJECT",
                    payload: {
                      index,
                      field: "technologies",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Project Deatils
              </label>
              <textarea
                placeholder="Project Details"
                rows={3}
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.projects[index]?.projectDetails || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_PROJECT",
                    payload: {
                      index,
                      field: "projectDetails",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <button
              onClick={() => removeSection(id)}
              className="rounded bg-red-500 px-3 py-1 text-sm text-white"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={addSection}
          className="mb-1 mt-4 rounded bg-blue-600 px-3 py-1 text-white"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

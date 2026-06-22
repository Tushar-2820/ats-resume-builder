import React from "react";
import { ResumeContext } from "../context/ResumeContext";

export const Experience = () => {
  const [sections, setSections] = React.useState([1]);

  const addSection = () => {
    setSections([...sections, Date.now()]);

    dispatch({
      type: "ADD_EXPERIENCE",
    });
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
        <p className="mb-4 block text-lg font-medium text-gray-700">
          Experience
        </p>
        {sections.map((id, index) => (
          <div
            key={id}
            className="rounded-lg mb-2 border border-gray-300 bg-white p-4 shadow"
          >
            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Compnay Name
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.experience[index]?.companyName || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EXPERIENCE",
                    payload: {
                      index,
                      field: "companyName",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                placeholder="Role"
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.experience[index]?.role || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EXPERIENCE",
                    payload: {
                      index,
                      field: "role",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                placeholder="Duration"
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.experience[index]?.duration || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EXPERIENCE",
                    payload: {
                      index,
                      field: "duration",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="mb-2">
              <label className="mb-0 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Description"
                rows={3}
                className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                value={state.experience[index]?.description || ""}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EXPERIENCE",
                    payload: {
                      index,
                      field: "description",
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

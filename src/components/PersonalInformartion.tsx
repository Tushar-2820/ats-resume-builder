import React from "react";
import { ResumeContext } from "../context/ResumeContext";

export const PersonalInformation = () => {
  const context = React.useContext(ResumeContext);

  if (!context) {
    throw new Error("ResumeContext must be used within ResumeProvider");
  }

  const { state, dispatch } = context;

  return (
    <div className="flex itesm-center justify-center">
      <div className="w-full max-w rounded-lg border border-gray-300 bg-white m-4 p-4 shadow-sm">
        <p className="mb-4 block text-lg font-medium text-gray-700">
          Personal Info
        </p>
        <div className="mb-2">
          <label className="mb-0 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            value={state.personalInfo.fullName}
            type="text"
            placeholder="Enter your full name"
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: {
                  field: "fullName",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="mb-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            value={state.personalInfo.email}
            type="email"
            placeholder="Enter your email"
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: {
                  field: "email",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            value={state.personalInfo.phone}
            type="tel"
            placeholder="Enter your phone number"
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: {
                  field: "phone",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            value={state.personalInfo.location}
            type="text"
            placeholder="Enter Location"
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: {
                  field: "location",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            value={state.personalInfo.linkedin}
            type="text"
            placeholder="Enter LinkedIn Url"
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: {
                  field: "linkedin",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Github
          </label>
          <input
            value={state.personalInfo.github}
            type="text"
            placeholder="Enter Github Url"
            className="text-sm w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PERSONAL_INFO",
                payload: {
                  field: "github",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

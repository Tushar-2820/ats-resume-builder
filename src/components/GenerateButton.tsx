import React from "react";
import { ResumeContext } from "../context/ResumeContext";
import { handleGenerateResume } from "../services/handleGenerateResume";
import { ResumePreview } from "./ResumePreview";
import { DownloadButton } from "./DownloadButton";
// import { dummyResume } from "../dummyResponse/dummyResume";
import { Loading } from "./Loading";

export const GenerateButton = () => {
  const [generatedResume, setGeneratedResume] = React.useState<any>(null);
  // const [dummyResult, setdummyResult] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const context = React.useContext(ResumeContext);
  if (!context) {
    throw new Error("ResumeContext must be used within ResumeProvider");
  }
  const { state, dispatch } = context;

  const onGenerate = async () => {
    setLoading(true);

    console.log(dispatch);

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 500);

    try {
      const data = await handleGenerateResume(state);
      if (!data.success) {
        setGeneratedResume(null);
      } else {
        setGeneratedResume(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // const dummyResultHandler = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }, 500);
  //   setTimeout(() => {
  //     // setdummyResult(true);
  //     setLoading(false);
  //   }, 5000);
  // };

  return (
    <>
      <button
        onClick={onGenerate}
        // onClick={dummyResultHandler}
        className="mx-2 mb-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
      >
        ✨ Generate Resume
      </button>
      {loading && <Loading />}
      {generatedResume && (
        <>
          <div className="mx-2 w-[calc(100%-2rem)] rounded-lg border border-gray-300 bg-white m-4 p-4 shadow-sm">
            <ResumePreview resume={generatedResume} />
          </div>
          <DownloadButton />
        </>
      )}

      {/* {dummyResult && (
        <>
          <div
            id="resume-preview"
            className="mx-2 w-[calc(100%-2rem)] rounded-lg border border-gray-300 bg-white m-4 p-4 shadow-sm"
          >
            <ResumePreview resume={dummyResume} />
          </div>

          <DownloadButton />
        </>
      )} */}
    </>
  );
};

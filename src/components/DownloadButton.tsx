import { downloadPdf } from "../services/downloadPdf";

export const DownloadButton = () => {
  return (
    <button
      onClick={downloadPdf}
      className="mx-2 mb-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
    >
      📄 Download PDF
    </button>
  );
};

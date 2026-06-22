export const Loading = () => {
  return (
    <span id="loader" className="mb-6 flex items-center justify-center gap-2">
      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.25"
        />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
      Generating PDF...
    </span>
  );
};

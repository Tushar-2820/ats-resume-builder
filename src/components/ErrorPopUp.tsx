import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ErrorPopUp = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
      limit={1}
    />
  );
};

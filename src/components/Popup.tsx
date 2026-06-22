import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Popup = () => {
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
      toastStyle={{
        width: "150px",
        minHeight: "20px",
        padding: "8px 12px",
        fontSize: "14px",
        borderRadius: "8px",
      }}
    />
  );
};

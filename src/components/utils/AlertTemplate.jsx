import { toast, ToastContainer } from "react-toastify";

export const AlertTemplate = () => {

    return (
        <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export const notify = (error, text) => toast(text, {

    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    toastId: text,
    style: { background: error ? '#E53E3E' : '#3A3A3A', color: error ? 'black' : '#FAF089' }
});

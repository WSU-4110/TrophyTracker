"use client";
import { Toast } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
// BsFillInfoCircleFill

// shows a toast message if the error/message query parameter is present in the URL.
// this will be for server-sided messages
export default function ToastComp() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  const [showToast, setShowToast] = React.useState({
    message: !!message,
    error: !!error,
  });
  // this might be redundant
  React.useEffect(() => {
    setShowToast((_) => ({ ..._, error: !!error }));

    setShowToast((_) => ({ ..._, message: !!message }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, message]);
  return (
    <span className="animate-in mb-2 ml-2 flex items-center justify-center gap-3 transition-all duration-300 ease-in-out md:ml-0 md:justify-start">
      {showToast.error && (
        <Toast className="mb-2">
          <div className="flex items-center gap-2">
            <BsFillInfoCircleFill color="#ff0000" />
            <p className="text-red-500">{error}</p>
          </div>
          <Toast.Toggle
            onDismiss={() => setShowToast((_) => ({ ..._, error: false }))}
          />
        </Toast>
      )}
      {showToast.message && (
        <Toast>
          <div className="flex items-center gap-2">
            <BsFillInfoCircleFill color="#a111f5" />
            <p className="text-gray-700">{message}</p>
          </div>
          <Toast.Toggle
            onDismiss={() => setShowToast((_) => ({ ..._, message: false }))}
          />
        </Toast>
      )}
    </span>
  );
}

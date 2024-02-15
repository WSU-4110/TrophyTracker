"use client";
import { Toast } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
// BsFillInfoCircleFill

// shows a toast message if the error/message query parameter is present in the URL.
export default function ToastComp() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  const [showToast, setShowToast] = React.useState({
    message: !!message,
    error: !!error,
  });
  React.useEffect(() => {
    setShowToast((_) => ({ ..._, error: !!error }));

    setShowToast((_) => ({ ..._, message: !!message }));
  }, [error, message]);
  return (
    <span className="mb-1">
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

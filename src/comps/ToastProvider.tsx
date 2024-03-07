"use client";

import { Toast } from "flowbite-react";
import React, { createContext, type Dispatch } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

export enum ToastType {
  ERROR,
  SUCCESS,
  INFO,
  WARNING,
}

const defaultToast = null; // default toast is hidden (duh)

interface ToastSetter {
  message: string;
  type: ToastType;
}
type ToastSetterType = ToastSetter | null;

// this is the context provider for the toast
// if null, we dismiss.
interface ToastContextProviderValues {
  setToast: Dispatch<ToastSetterType>;
}

export const ToastContext = createContext<ToastContextProviderValues | null>(
  null,
);

// toast provider context interface
interface ToastContextProviderProps {
  children: React.ReactElement[] | React.ReactElement;
}

// toast context provider component wrapper
export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toast, setToast] = React.useState<ToastSetterType>(defaultToast);

  return (
    <ToastContext.Provider value={{ setToast }}>
      {toast && (
        <span className="mb-1 w-full">
          <Toast>
            {/* TODO: create the toasts for rest of the types */}
            {toast.type === ToastType.INFO ? (
              <>
                <div className="flex items-center gap-2">
                  <BsFillInfoCircleFill color="#a111f5" />
                  <p className="text-gray-700">{toast.message}</p>
                </div>
              </>
            ) : toast.type === ToastType.ERROR ? (
              <>
                <div className="flex items-center gap-2">
                  <BsFillInfoCircleFill color="#ff0000" />
                  <p className="text-red-500">{toast.message}</p>
                </div>
              </>
            ) : null}
            <Toast.Toggle onDismiss={() => setToast(null)} />
          </Toast>
        </span>
      )}
      {children}
    </ToastContext.Provider>
  );
};

"use client";

import { Toast } from "flowbite-react";
import React, { createContext } from "react";
import {
  BsFillInfoCircleFill,
  BsFillXCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

type ToastType = "info" | "error" | "success" | "warning";

interface ToastSetter {
  message: string;
  type: ToastType;
  id?: number;
}

type ToastSetterType = ToastSetter[];

// this is the context provider for the toast
// if null, we dismiss.
interface ToastContextProviderValues {
  addToast: (toast: ToastSetter) => void;
}

export const ToastContext = createContext<ToastContextProviderValues>(
  {} as ToastContextProviderValues,
);

// toast provider context interface
interface ToastContextProviderProps {
  children: React.ReactElement[] | React.ReactElement;
}

// toast context provider component wrapper
export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toasts, setToast] = React.useState<ToastSetterType>([]);
  const addToast = (toast: ToastSetter) => {
    setToast((prev) => {
      const thisToast = { ...toast, id: prev.length };
      return prev ? [...prev, thisToast] : [thisToast];
    });
  };
  const removeToast = (id: number) => {
    setToast((prev) => {
      return prev.filter((toast) => toast.id !== id);
    });
  };
  return (
    <ToastContext.Provider value={{ addToast }}>
      {toasts && (
        <div className="mb-2 w-full transition-all duration-300 ease-in-out">
          {toasts.map((toast, index) => (
            <Toast key={index}>
              {/* TODO: create the toasts for rest of the types */}
              {toast.type === "info" ? (
                <>
                  <div className="flex items-center gap-2">
                    <BsFillInfoCircleFill color="#a111f5" />
                    <p className="text-gray-700">{toast.message}</p>
                  </div>
                </>
              ) : toast.type === "error" ? (
                <>
                  <div className="flex items-center gap-2">
                    <BsFillXCircleFill color="#ff0000" />
                    <p className="text-red-600">{toast.message}</p>
                  </div>
                </>
              ) : toast.type === "success" ? (
                <>
                  <div className="flex items-center gap-2">
                    <BsCheckCircleFill color="#416D19" />
                    <p className="text-green-600">{toast.message}</p>
                  </div>
                </>
              ) : null}
              {/* @ts-expect-error we know ids are provided default */}
              <Toast.Toggle onDismiss={() => removeToast(toast.id)} />
            </Toast>
          ))}
        </div>
      )}
      {children}
    </ToastContext.Provider>
  );
};

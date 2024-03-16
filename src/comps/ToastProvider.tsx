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
  /**
   * message to display in the toast
   * @type {string}
   *
   * */
  message: string;
  /**
   * type of the toast
   * @type {ToastType}
   * */
  type: ToastType;
  /**
   * timeout for the toast
   * @type {number}
   * */
  timeout?: number;
  /**
   * id for the toast (not required to provide)
   * @type {number}
   * */
  id?: number;
}

type ToastSetterType = ToastSetter[];

// this is the context provider for the toast
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
      setTimeout(() => {
        removeToast(thisToast.id);
      }, toast.timeout ?? 5000); // remove the toast after x seconds
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
        // TODO: make these animations work
        <div className="animate-in mb-2 ml-2 flex items-center justify-center gap-3 transition-all duration-300 ease-in-out md:ml-0 md:justify-start">
          {toasts.map((toast, index) => (
            <Toast key={index}>
              {/* TODO: create the toasts for rest of the types */}
              <>
                <div className="flex items-center gap-2">
                  {toast.type === "info" ? (
                    <BsFillInfoCircleFill color="#a111f5" />
                  ) : toast.type === "error" ? (
                    <BsFillXCircleFill color="#ff0000" />
                  ) : toast.type === "success" ? (
                    <BsCheckCircleFill color="#416D19" />
                  ) : null}
                  <p className="text-gray-700">{toast.message}</p>
                </div>
              </>
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

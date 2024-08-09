"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export type TModalProps = {
  actions: {
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
  };
  data?: {
    title: string;
    description: string;
    videoUrl?: string;
  };
};

export const Modal = ({
  actions: { isOpen, setIsOpen },
  data,
}: TModalProps) => {
  const close = () => {
    setIsOpen && setIsOpen(false);
  };

  return (
    <React.Fragment>
      {isOpen && (
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  {data?.title}
                </DialogTitle>
                <p className="text-salte-800/80 mt-2 text-sm/6">
                  {data?.description}
                </p>
                <div className="mt-4 overflow-hidden rounded-xl object-fill">
                  {data?.videoUrl && (
                    <iframe
                      width="400"
                      height="200"
                      src={data.videoUrl}
                      title="Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    onClick={() => setIsOpen && setIsOpen((isOpen) => !isOpen)}
                  >
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </React.Fragment>
  );
};

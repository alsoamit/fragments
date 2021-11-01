import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Modal({ children, className, show, setShow, btns }) {
  return (
    <motion.div
      initial={
        show === true ? { opacity: 0, x: "-100%" } : { opacity: 1, x: "0%" }
      }
      animate={
        show
          ? { opacity: [0, 1, 1, 1], x: ["0%", "0%"] }
          : { opacity: [1, 0, 0, 0], x: ["0%", "0%", "-100%", "-100%"] }
      }
      className={`fixed inset-0 bg-gray-200 z-10 ${
        show === null ? "hidden" : null
      }`}
    >
      <div
        className={`h-full w-full flex p-5 sm:p-10 md:p-20 justify-center items-center ${className}`}
      >
        <div className="bg-white p-5 w-full max-w-3xl z-30 max-h-screen rounded-lg shadow-sm">
          {children}
          <div className="h-12 mt-5 flex justify-end items-center gap-x-2">
            {btns
              ? btns.map((btn) => {
                  return (
                    <Button
                      onClick={() => {
                        btn.action();
                        btn.close ? setShow(false) : null;
                      }}
                    >
                      {btn.text}
                    </Button>
                  );
                })
              : null}
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

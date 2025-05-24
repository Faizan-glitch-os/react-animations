import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 30, opacity: 0 },
          exit: { y: -30, opacity: 0 },
        }}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}

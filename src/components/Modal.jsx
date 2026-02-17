import { use, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children, ref, buttonCaption}) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        };
    });
    
    return createPortal(
        <dialog ref={dialog} className="p-6 rounded-lg shadow-lg max-w-sm mx-auto backdrop:bg-stone-900/90">
            {children}
            <form method="dialog" className="mt-6">
                <button className="w-full bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-600 transition font-medium">{buttonCaption || "Close"}</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
}
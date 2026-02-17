export default function Button({ children, ...props }) {
    return (
        <button {...props} className="px-4 py-2 text-white text-xs md:text-base rounded-md bg-emerald-700 hover:bg-emerald-600">
            {children}
        </button>
    );
}
export default function Button({ children, ...props }) {
    return (
        <button {...props} className="w-full sm:w-auto px-4 py-2 text-white text-xs sm:text-base rounded-md bg-emerald-700 hover:bg-emerald-600 transition shadow-md hover:shadow-lg font-medium">
            {children}
        </button>
    );
}
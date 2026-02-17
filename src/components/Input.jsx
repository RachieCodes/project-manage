export default function Input({label, textarea, ref,...props}) {
    const baseClasses = "w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-sm sm:text-base";
    const textareaClasses = baseClasses + " resize-vertical min-h-32 sm:min-h-40 break-words";
    const classes = textarea ? textareaClasses : baseClasses;
    return (
    <div className="flex flex-col gap-2 mb-6">
        <label className="font-semibold text-stone-700 text-sm sm:text-base">{label}</label>
        {textarea ? <textarea className={classes} {...props} ref={ref} /> : <input className={classes} {...props} ref={ref} />}
    </div>
    );
}
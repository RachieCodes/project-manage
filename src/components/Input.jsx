export default function Input({label, textarea, ...props}) {
    const classes = "border border-stone-300 rounded px-2 py-1"
    return (
    <div className = "flex flex-col gap-2 mb-6">
        <label>{label}</label>
        {textarea ? <textarea className={classes} {...props} /> : <input className={classes} {...props} />}
    </div>
    );
}
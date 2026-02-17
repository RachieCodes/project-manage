export default function Input({label, textarea, ref,...props}) {
    const classes = "border border-stone-300 rounded px-2 py-1"
    return (
    <div className = "flex flex-col gap-2 mb-6">
        <label>{label}</label>
        {textarea ? <textarea className={classes} {...props} ref={ref} /> : <input className={classes} {...props} ref={ref} />}
    </div>
    );
}
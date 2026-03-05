import { useFieldContext } from "@/hooks/form-context"
import { useStore } from "@tanstack/react-form"


export default function TextField({ label }: { label: string }) {
    const field = useFieldContext<string>()

    const errors = useStore(field.store, (state) => state.meta.errors)

    return (
        <div>
            <label>
                {label}
                <input
                    {...(errors.length > 0 ? { 'aria-invalid': true } : {})}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    value={field.state.value}
                />
                {errors.map((error: string) => (
                    <div key={error} style={{ color: 'red' }}>
                        {error}
                    </div>
                ))}
            </label>

        </div>
    )
}
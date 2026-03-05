import { useFieldContext } from "@/hooks/form-context"
import { useStore } from "@tanstack/react-form"
import React from "react"

type Option<T = string | number> = {
    label: string
    value: T
}

type SelectorProps<T extends string | number = string> = {
    label: string
    options: Option<T>[]
    placeholder?: string
    disabled?: boolean
}

export function Selector<T extends string | number = string>({
    label,
    options,
    placeholder = "Select an option",
    disabled = false,
}: SelectorProps<T>) {
    const field = useFieldContext<T>()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = (e.target.value as unknown) as T
        field.handleChange(val)
    }

    const errors = useStore(field.store, (state) => state.meta.errors)

    return (
        <div>
            <label>
                {label}
                <select
                    onBlur={field.handleBlur}
                    onChange={handleChange}
                    value={(field.state.value ?? "") as any}
                    disabled={disabled}
                    aria-invalid={errors.length > 0}
                >
                    <option value="">{placeholder}</option>
                    {options.map((opt) => (
                        <option key={String(opt.value)} value={String(opt.value)}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {errors.map((error: string) => (
                    <div key={error} style={{ color: 'red' }}>
                        {error}
                    </div>
                ))}
            </label>

        </div>
    )
}
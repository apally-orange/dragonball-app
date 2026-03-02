import { useAppForm } from "@/hooks/form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { characterFormOpts, characterSchema } from "./character-form-option"


export function AddCharacterPage() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const addCharacterMutation = useMutation({
        mutationFn: async (characterData) => {
            const response = await fetch('https://dummyjson.com/users/add', {
                body: JSON.stringify(characterData),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
        onError: (error) => {
            console.error('Error adding character:', error)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['characters'] })
            form.reset()
            navigate({ to: '/characters' })
        },
    })

    const form = useAppForm({
        ...characterFormOpts,
        onSubmit: ({ value }) => {
            const result = characterSchema.safeParse(value)

            if (result.success) {
                addCharacterMutation.mutate(result.data)
            } else {
                console.error('Validation error:', result.error)
            }
        },
    })

    return (
        <div>
            <h1>Ajout d'un Personage</h1>
            <form
                className='form'
                name='character'
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}>
                <form.AppField name='name'>
                    {(field) => <field.TextField label='Nom' />}
                </form.AppField>
                <form.AppField name='imageUrl'>
                    {(field) => <field.TextField label="URL de l'image" />}
                </form.AppField>
                <form.AppField name='description'>
                    {(field) => <field.TextField label='Description' />}
                </form.AppField>
                <form.Subscribe
                    selector={(state) => [state.isSubmitting]}>
                    {([isSubmitting]) => (
                        <div className='buttonContainer'>
                            <button
                                className='button submitButton'
                                disabled={isSubmitting}
                                type='submit'>
                                {isSubmitting ? '...' : 'Submit'}
                            </button>
                            <button
                                className='button resetButton'
                                onClick={(e) => {
                                    // Avoid unexpected resets of form elements (especially <select> elements)
                                    e.preventDefault()
                                    form.reset()
                                }}
                                type='reset'>
                                Reset
                            </button>
                        </div>
                    )}
                </form.Subscribe>
            </form>
        </div>
    )
}
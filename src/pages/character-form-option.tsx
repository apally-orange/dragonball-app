import { formOptions } from '@tanstack/react-form'
import z from 'zod'

export const characterSchema = z.object({
	imageUrl: z.url({
		message: 'Please enter a valid URL (e.g., https://example.com/image.jpg)',
	}),
	name: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters' }),
	description: z.string().min(1, { message: 'Description is required' }),
})

export const characterFormOpts = formOptions({
	defaultValues: {
		imageUrl: '',
		name: '',
		description: '',
	},
	validators: {
		onSubmit: ({ value }) => {
			const errors = {
				fields: {},
			} as {
				fields: Record<string, string>
			}

			const result = characterSchema.safeParse(value)

			if (!result.success) {
				for (const issue of result.error.issues) {
					errors.fields[issue.path[0] as string] = issue.message
				}
			}

			return errors
		},
	},
})

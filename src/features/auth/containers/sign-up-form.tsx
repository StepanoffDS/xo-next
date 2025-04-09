'use client';

import { AuthFormLayout } from '../ui/auth-form-layout';
import { AuthFields } from '../ui/fields';
import { SubmitButton } from '../ui/submit-button';
import { AuthError } from '../ui/error';
import { AuthLink } from '../ui/auth-link';
import { useActionState } from '@/shared/lib/react';
import { signUpAction, SignUpFormState } from '../actions/sign-up';

export function SignUpForm() {
	const [formState, action, isPending] = useActionState(
		signUpAction,
		{} as SignUpFormState,
	);

	return (
		<AuthFormLayout
			title='Sign Up'
			description='Create your account to get started'
			action={action}
			fields={<AuthFields {...formState} />}
			actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
			error={<AuthError error={formState.errors?._errors} />}
			link={
				<AuthLink
					text='Already have an account?'
					linkText='Sign in'
					url={'/sign-in'}
				/>
			}
		/>
	);
}

'use client';

import { AuthFormLayout } from '../ui/auth-form-layout';
import { AuthFields } from '../ui/fields';
import { SubmitButton } from '../ui/submit-button';
import { AuthError } from '../ui/error';
import { AuthLink } from '../ui/auth-link';
import { signInAction, SignInFormState } from '../actions/sign-in';
import { useActionState } from '@/shared/lib/react';

export function SignInForm() {
	const [formState, action, isPending] = useActionState(
		signInAction,
		{} as SignInFormState,
	);

	return (
		<AuthFormLayout
			title='Sign In'
			description='Welcome back! Please sign in to your account'
			action={action}
			fields={<AuthFields {...formState} />}
			actions={<SubmitButton isPending={isPending}>Sign In</SubmitButton>}
			error={<AuthError error={formState.errors?._errors} />}
			link={
				<AuthLink
					text="Don't have an account?"
					linkText='Sign up'
					url={'/sign-up'}
				/>
			}
		/>
	);
}

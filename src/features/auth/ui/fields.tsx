import { Input } from '@/shared/ui/input';
import { Label } from '@radix-ui/react-label';
import { useId } from 'react';

export function AuthFields({
	formData,
	errors,
}: {
	formData?: FormData;
	errors?: {
		login?: string;
		password?: string;
	};
}) {
	const loginId = useId();
	const passwordId = useId();

	return (
		<>
			<div className='space-y-2'>
				<Label className='block' htmlFor={loginId}>
					Login
				</Label>
				<Input
					id={loginId}
					type='login'
					name='login'
					placeholder='Enter your login'
					required
					defaultValue={formData?.get('login')?.toString()}
				/>
				{errors?.login && <div>{errors.login}</div>}
			</div>
			<div className='space-y-2 mt-2'>
				<Label className='block' htmlFor={passwordId}>
					Password
				</Label>
				<Input
					id={passwordId}
					type='password'
					name='password'
					placeholder='Enter your password'
					required
					defaultValue={formData?.get('password')?.toString()}
				/>
				{errors?.password && <div>{errors.password}</div>}
			</div>
		</>
	);
}

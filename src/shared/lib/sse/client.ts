import { useEffect, useState } from 'react';

export function useEventsSource<T>(url: string) {
	const [isPending, setIsPending] = useState(true);
	const [data, setData] = useState<T>();
	const [error, setError] = useState<unknown | undefined>(null);

	useEffect(() => {
		const gameEvents = new EventSource(url);

		gameEvents.addEventListener('message', (message) => {
			try {
				const data = JSON.parse(message.data);
				setError(undefined);
				setData(data);
				setIsPending(false);
			} catch (e) {
				setError(e);
				console.error('Event parse error');
			}
		});

		gameEvents.addEventListener('error', (e) => {
			setError(e);
		});

		return () => gameEvents.close();
	}, [url]);

	return { dataStream: data, error, isPending };
}

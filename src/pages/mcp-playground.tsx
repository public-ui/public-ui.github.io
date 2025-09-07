import { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

export default function MCPPlayground(): React.ReactElement {
	const [response, setResponse] = useState<string>('');

	const sendMessage = async (): Promise<void> => {
		const res = await fetch('/mcp/echo', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: 'ping' }),
		});
		const data = (await res.json()) as { reply: string };
		setResponse(data.reply);
	};

	return (
		<Layout
			title={translate({ id: 'mcp.playground.title', message: 'MCP-Spielwiese' })}
			description={translate({ id: 'mcp.playground.desc', message: 'Spielwiese für den MCP-Server.' })}
		>
			<main className="container margin-vert--lg">
				<button className="button button--primary" onClick={() => void sendMessage()}>
					{translate({ id: 'mcp.playground.send', message: 'Nachricht senden' })}
				</button>
				{response && <p>{response}</p>}
			</main>
		</Layout>
	);
}

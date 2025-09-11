import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.post('/echo', (req, res) => {
	const { message } = req.body as { message?: string };
	res.json({ reply: message ?? '' });
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`MCP server listening on http://localhost:${port}`);
});

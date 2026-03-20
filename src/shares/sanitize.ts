import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML using DOMPurify.
 * Returns the raw string during SSR (no DOM available) to avoid
 * issues with server-side rendering in Docusaurus static site generation.
 */
export function sanitizeHtml(html: string): string {
    if (typeof window === 'undefined') {
        // During SSR/SSG there is no DOM; return the content as-is.
        // The actual sanitization happens on the client side.
        return html;
    }
    return DOMPurify.sanitize(html);
}

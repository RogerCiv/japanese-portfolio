import { ExternalLink } from "lucide-react";

/**
 * Detecta y convierte URLs en enlaces y texto entre asteriscos en negrita.
 */
export function formatMessageContent(content: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);

    return parts.flatMap((part, partIndex) => {
        if (part.match(urlRegex)) {
            return (
                <a
                    key={`url-${partIndex}-${part}`}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1 font-medium transition-all"
                >
                    {part}
                    <ExternalLink className="w-3 h-3" />
                </a>
            );
        }

        const boldRegex = /(\*\*[^*]+\*\*)/g;
        const subParts = part.split(boldRegex);

        return subParts.map((subPart, subIndex) => {
            const key = `p-${partIndex}-s-${subIndex}`;
            if (subPart.match(boldRegex)) {
                return (
                    <strong key={key} className="font-bold text-foreground/90">
                        {subPart.slice(2, -2)}
                    </strong>
                );
            }
            return <span key={key}>{subPart}</span>;
        });
    });
}

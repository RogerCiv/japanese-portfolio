type JsonLdProps = {
  data: Record<string, unknown>;
};

// Función para sanitizar el string de JSON contra inyecciones </script>
function safeJsonStringify(obj: Record<string, unknown>) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(data) }}
    />
  );
}
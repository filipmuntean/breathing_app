import EmbeddableBreathingWidget from "@/components/EmbeddableBreathingWidget";

interface SearchParams {
  width?: string;
  height?: string;
  branding?: string;
}

export default function WidgetPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const width = searchParams.width || "300px";
  const height = searchParams.height || "400px";
  const showBranding = searchParams.branding !== "false";

  return (
    <html>
      <head>
        <title>Just Breathe Widget</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <style>{`
          body { 
            margin: 0; 
            padding: 0; 
            background: transparent;
            font-family: system-ui, -apple-system, sans-serif;
          }
          .widget-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 8px;
          }
        `}</style>
      </head>
      <body>
        <div className="widget-container">
          <EmbeddableBreathingWidget 
            width={width}
            height={height}
            showBranding={showBranding}
          />
        </div>
      </body>
    </html>
  );
}
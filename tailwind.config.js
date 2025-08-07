<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fix Truck - Truck & Trailer Service</title>
  <!-- First load your CSS variables -->
  <link rel="stylesheet" href="default.css" />
  <!-- Then configure Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Proxima Nova', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          },
          colors: {
            'vivid-orange': 'rgb(var(--color-vivid-orange) / <alpha-value>)',
            'charcoal-black': 'rgb(var(--color-charcoal-black) / <alpha-value>)',
            'cool-gray': 'rgb(var(--color-cool-gray) / <alpha-value>)',
            'pure-white': 'rgb(var(--color-pure-white) / <alpha-value>)',
            'charcoal-gray': 'rgb(var(--color-charcoal-gray) / <alpha-value>)',
            'soft-pearl': 'rgb(var(--color-soft-pearl) / <alpha-value>)',
            'deep-teal-blue': 'rgb(var(--color-deep-teal-blue) / <alpha-value>)',
            'warm-apricot': 'rgb(var(--color-warm-apricot) / <alpha-value>)',
          },
          backgroundImage: {
            'gradient-dark': 'linear-gradient(to bottom right, rgb(var(--color-charcoal-black)), rgb(var(--color-deep-teal-blue) / 0.9))',
          }
        }
      }
    }
  </script>
  <!-- Other head elements -->
</head>

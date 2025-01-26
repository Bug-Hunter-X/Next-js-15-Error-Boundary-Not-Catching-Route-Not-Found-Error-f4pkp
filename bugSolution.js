```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
// app/layout.js
import './globals.css'
import {ErrorBoundary} from 'next/error-boundary'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}

export function ErrorComponent({ error }) {
    return (
      <ErrorBoundary>
        <MyErrorBoundary error={error}/ >
      </ErrorBoundary>
    )
}
```
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8e8c0]">
        <h1 className="text-4xl font-bold pixel-font mb-4">404</h1>
        <p className="text-lg pixel-font mb-4">Page Not Found</p>
        <a 
          href="/portfolio" 
          className="px-4 py-2 text-sm font-medium text-black transition-colors pixel-font hover:bg-black hover:text-white border-2 border-black"
        >
          Go Home
        </a>
      </div>
    )
  }

import { MdOutlineReportGmailerrorred } from "react-icons/md";

const ErrorFallback = ({
  error,
  resetErrorBoundary,
  title = "Terjadi Kesalahan",
  message = "Maaf, terjadi kesalahan yang tidak terduga.",
  showDetails = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-900 to-red-500 p-6 text-white">
          <div className="flex items-center space-x-3">
            <MdOutlineReportGmailerrorred className="text-2xl" />
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-red-100 opacity-90">{message}</p>
            </div>
          </div>
        </div>
        {showDetails && error && (
          <div className="p-6 border-b border-gray-200">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <span className="font-medium">Detail Kesalahan</span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <code className="text-sm text-red-600 break-words whitespace-pre-wrap">
                  {error.message || 'Unknown error'}
                </code>
                {error.stack && (
                  <div className="mt-2">
                    <pre className="text-xs text-gray-600 overflow-x-auto mt-2">
                      {error.stack}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          </div>
        )}

        <div className="p-6 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3">
            {resetErrorBoundary && (
              <button
                onClick={resetErrorBoundary}
                className="flex-1 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-900 hover:to-red-950 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>Coba Lagi</span>
                </div>
              </button>
            )}

            <button
              onClick={() => window.location.href = '/'}
              className="flex-1 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-50 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Kembali ke Home</span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-3 text-center">
          <p className="text-xs text-gray-500">
            Jika masalah berlanjut, hubungi tim support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
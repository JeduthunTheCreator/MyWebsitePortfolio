// components/ErrorBoundary.jsx
import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        console.error('Caught error:', error);
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to an error reporting service
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error('Error Boundary Caught Error:', error, errorInfo);
    }

    isDevelopment() {
        return import.meta.env.MODE === 'development';
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
                    <div className="max-w-md w-full p-6 bg-zinc-900 rounded-lg shadow-xl">
                        <div className="text-center">
                            {/* Error Icon */}
                            <div className="mb-4">
                                <svg
                                    className="mx-auto h-12 w-12 text-[#c55911]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            {/* Error Message */}
                            <h2 className="text-xl font-semibold text-white mb-2">
                                Oops! Something went wrong
                            </h2>
                            <p className="text-gray-400 mb-6">
                                {this.props.fallbackMessage || "We're having trouble loading this page"}
                            </p>

                            {/* Error Details (only in development) */}
                            {this.isDevelopment() && this.state.error && (
                                <div className="mt-4 p-4 bg-zinc-800 rounded text-left">
                                    <p className="text-red-400 text-sm mb-2">
                                        {this.state.error.toString()}
                                    </p>
                                    <pre className="text-gray-400 text-xs overflow-auto">
                                        {this.state.errorInfo.componentStack}
                                    </pre>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="mt-6 flex justify-center gap-4">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-4 py-2 bg-[#c55911] text-white rounded hover:bg-[#d66a1c] transition-colors"
                                >
                                    Reload Page
                                </button>
                                <button
                                    onClick={() => window.history.back()}
                                    className="px-4 py-2 border border-[#c55911] text-[#c55911] rounded hover:bg-[#c55911] hover:text-white transition-colors"
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}


ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallbackMessage: PropTypes.string,
};

export default ErrorBoundary;
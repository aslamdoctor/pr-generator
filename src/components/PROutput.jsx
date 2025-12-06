import React, { useState } from 'react';

const PROutput = ({ prTitle, prText, checklist }) => {
    const [copied, setCopied] = useState(false);
    const [titleCopied, setTitleCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = prText;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        }
    };

    const handleCopyTitle = async () => {
        try {
            await navigator.clipboard.writeText(prTitle);
            setTitleCopied(true);
            setTimeout(() => setTitleCopied(false), 2000);
        } catch (err) {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = prTitle;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setTitleCopied(true);
                setTimeout(() => setTitleCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy title: ', err);
            }
            document.body.removeChild(textArea);
        }
    };

    const checkedCount = checklist.filter(item => item.checked).length;
    const totalCount = checklist.length;
    const completionPercentage = Math.round((checkedCount / totalCount) * 100);

    return (
        <div className="bg-white shadow-lg p-4 border-2 border-gray-900" style={{ borderRadius: '5px' }}>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                        Generated PR
                    </h2>
                    <p className="text-gray-600 text-xs">Review and copy your PR description</p>
                </div>
                <button
                    onClick={handleCopy}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 transform cursor-pointer hover:scale-105 active:scale-95 shadow-md ${copied
                        ? 'bg-gray-900 text-white'
                        : 'bg-black text-white hover:bg-gray-800'
                        }`}
                    style={{ borderRadius: '5px' }}
                >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-900">Checklist Progress</span>
                    <span className="text-xs font-bold text-gray-900">{checkedCount}/{totalCount}</span>
                </div>
                <div className="w-full bg-gray-200 h-2 overflow-hidden" style={{ borderRadius: '5px' }}>
                    <div
                        className="h-full bg-black transition-all duration-500 ease-out"
                        style={{ width: `${completionPercentage}%`, borderRadius: '5px' }}
                    />
                </div>
            </div>

            {/* PR Title Preview */}
            {prTitle && (
                <div className="mb-3 p-3 bg-gray-100 border-2 border-gray-300" style={{ borderRadius: '5px' }}>
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-gray-900">PR TITLE</p>
                        <button
                            onClick={handleCopyTitle}
                            className={`px-2 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer ${titleCopied
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-900 hover:bg-gray-200 border border-gray-400'
                                }`}
                            style={{ borderRadius: '3px' }}
                            title="Copy PR title"
                        >
                            {titleCopied ? '✓' : '📋'}
                        </button>
                    </div>
                    <p className="text-xs font-mono text-gray-900">{prTitle}</p>
                </div>
            )}

            {/* Checklist Summary */}
            <div className="mb-3">
                <h3 className="text-xs font-bold text-gray-900 mb-2">
                    Checklist Status
                </h3>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {checklist.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-2 p-2 transition-all duration-200 ${item.checked
                                ? 'bg-gray-100 border border-gray-400'
                                : 'bg-white border border-gray-300'
                                }`}
                            style={{ borderRadius: '5px' }}
                        >
                            <div className={`flex-shrink-0 w-4 h-4 flex items-center justify-center text-xs ${item.checked
                                ? 'bg-black text-white'
                                : 'bg-white border border-gray-400'
                                }`} style={{ borderRadius: '3px' }}>
                                {item.checked && '✓'}
                            </div>
                            <span className={`text-xs ${item.checked ? 'text-gray-900' : 'text-gray-600'
                                }`}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* PR Text Preview */}
            <div className="border-t border-gray-300 pt-3">
                <h3 className="text-xs font-bold text-gray-900 mb-2">
                    Preview
                </h3>
                <div className="bg-gray-50 p-3 max-h-128 overflow-y-auto custom-scrollbar border border-gray-300" style={{ borderRadius: '5px' }}>
                    <pre className="text-xs font-mono text-gray-900 whitespace-pre-wrap break-words">
                        {prText}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default PROutput;

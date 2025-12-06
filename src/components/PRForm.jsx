import React from 'react';

const PRForm = ({ formData, onInputChange }) => {
  const inputClass = "w-full px-3 py-2 border-2 border-gray-300 focus:border-black focus:outline-none transition-all duration-200 bg-white placeholder:text-gray-400 text-gray-900 text-sm";
  const labelClass = "block text-xs font-medium text-gray-900 mb-1";
  const fieldClass = "mb-3";
  const borderRadiusStyle = { borderRadius: '5px' };
  const inputStyle = { borderRadius: '5px' };

  const productCodeOptions = [
    { value: '', label: 'Select Product Code' },
    { value: 'TA', label: 'TA - Thrive Apprentice' },
    { value: 'TQB', label: 'TQB - Thrive Quiz Builder' },
    { value: 'TL', label: 'TL - Thrive Leads' },
    { value: 'TO', label: 'TO - Thrive Optimize' },
    { value: 'TC', label: 'TC - Thrive Comments' },
    { value: 'TU', label: 'TU - Thrive Ultimatum' },
    { value: 'TOV', label: 'TOV - Thrive Ovation' },
    { value: 'TAR', label: 'TAR - Thrive Architect' },
    { value: 'TTB', label: 'TTB - Thrive Theme Builder' },
    { value: 'TD', label: 'TD - Thrive Dashboard' },
    { value: 'CORE', label: 'CORE - Core Platform' }
  ];

  return (
    <div className="bg-white shadow-lg p-4 border-2 border-gray-900" style={{ borderRadius: '5px' }}>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          PR Details
        </h2>
        <p className="text-gray-600 text-xs">Fill in the form to generate your pull request description</p>
      </div>

      <form className="space-y-1">
        {/* Issue ID and Product Code - Side by side */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className={labelClass}>
              Issue ID
            </label>
            <input
              type="text"
              value={formData.issueId}
              onChange={(e) => onInputChange('issueId', e.target.value)}
              placeholder="e.g., 2384"
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label className={labelClass}>
              Product Code
            </label>
            <select
              value={formData.productCode}
              onChange={(e) => onInputChange('productCode', e.target.value)}
              className={inputClass}
              style={inputStyle}
            >
              {productCodeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Title */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => onInputChange('title', e.target.value)}
            placeholder="Auto-generated from summary"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Summary */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Summary
          </label>
          <textarea
            value={formData.summary}
            onChange={(e) => onInputChange('summary', e.target.value)}
            placeholder="What is the change and why? Keep it concise."
            rows="2"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Issue URL */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Issue URL
          </label>
          <input
            type="text"
            value={formData.issueUrl}
            onChange={(e) => onInputChange('issueUrl', e.target.value)}
            placeholder="e.g., Fixes #1234"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Implementation Details */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Implementation Details
          </label>
          <textarea
            value={formData.implementationDetails}
            onChange={(e) => onInputChange('implementationDetails', e.target.value)}
            placeholder="Briefly note the main approach taken and any key decisions."
            rows="2"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Screenshot/Recording URLs */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Screenshot/Recording URLs
          </label>
          <textarea
            value={formData.screenshotUrls}
            onChange={(e) => onInputChange('screenshotUrls', e.target.value)}
            placeholder="Add images or short videos that demonstrate the change."
            rows="2"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Test URLs */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Test URL(s)
          </label>
          <input
            type="text"
            value={formData.testUrls}
            onChange={(e) => onInputChange('testUrls', e.target.value)}
            placeholder="Direct link reviewers can use to verify the change"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* QA Steps */}
        <div className={fieldClass}>
          <label className={labelClass}>
            QA Steps
          </label>
          <textarea
            value={formData.qaSteps}
            onChange={(e) => onInputChange('qaSteps', e.target.value)}
            placeholder="1. Step-by-step to reproduce/verify&#10;2. Include roles, prerequisites, test data, URLs&#10;3. Expected result(s)"
            rows="3"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Release Notes */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Release Notes
          </label>
          <textarea
            value={formData.releaseNotes}
            onChange={(e) => onInputChange('releaseNotes', e.target.value)}
            placeholder="One or two sentences suitable for changelogs/release notes."
            rows="2"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Dev Notes */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Dev Notes (Optional)
          </label>
          <textarea
            value={formData.devNotes}
            onChange={(e) => onInputChange('devNotes', e.target.value)}
            placeholder="Anything the reviewer/maintainer should know when merging/deploying."
            rows="2"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Additional Notes */}
        <div className={fieldClass}>
          <label className={labelClass}>
            Anything Specific Worth Mentioning?
          </label>
          <textarea
            value={formData.additionalNotes}
            onChange={(e) => onInputChange('additionalNotes', e.target.value)}
            placeholder="Add if something stands out for other devs or for QA"
            rows="2"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </form>
    </div>
  );
};

export default PRForm;

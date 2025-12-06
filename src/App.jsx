import { useState, useEffect, useRef } from 'react';
import PRForm from './components/PRForm';
import PROutput from './components/PROutput';

function App() {
  const [formData, setFormData] = useState({
    issueId: '',
    productCode: '',
    title: '',
    summary: '',
    issueUrl: '',
    implementationDetails: '',
    screenshotUrls: '',
    testUrls: '',
    qaSteps: '',
    releaseNotes: '',
    devNotes: '',
    additionalNotes: ''
  });

  // Track which fields have been manually edited
  const manuallyEditedFields = useRef({
    title: false,
    issueUrl: false,
    releaseNotes: false
  });

  // Auto-populate title, issue URL, and release notes
  useEffect(() => {
    const { issueId, productCode, summary } = formData;

    // Auto-generate title from summary (first line, up to 60 chars)
    const autoTitle = summary
      ? summary.split('\n')[0].substring(0, 60).trim()
      : '';

    // Auto-generate issue URL
    const autoIssueUrl = issueId
      ? `https://github.com/awesomemotive/thrive-themes/issues/${issueId}`
      : '';

    // Auto-generate release notes from title
    const autoReleaseNotes = autoTitle ? autoTitle : '';

    setFormData(prev => {
      const updates = {};

      // Only update if not manually edited
      if (!manuallyEditedFields.current.title) {
        updates.title = autoTitle;
      }
      if (!manuallyEditedFields.current.issueUrl) {
        updates.issueUrl = autoIssueUrl;
      }
      if (!manuallyEditedFields.current.releaseNotes) {
        updates.releaseNotes = autoReleaseNotes;
      }

      return { ...prev, ...updates };
    });
  }, [formData.issueId, formData.productCode, formData.summary]);

  const handleInputChange = (field, value) => {
    // Mark field as manually edited if it's one of the auto-populated fields
    if (field === 'title' || field === 'issueUrl' || field === 'releaseNotes') {
      manuallyEditedFields.current[field] = true;
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePRText = () => {
    const {
      issueId,
      productCode,
      title,
      summary,
      issueUrl,
      implementationDetails,
      screenshotUrls,
      testUrls,
      qaSteps,
      releaseNotes,
      devNotes,
      additionalNotes
    } = formData;

    // Generate PR title
    const prTitle = productCode && issueId && title
      ? `[${productCode}] #${issueId} - ${title}`
      : '';

    // Generate checklist
    const checklist = [
      { text: 'Title follows format: `[PRODUCT_CODES] #ISSUE - Summary`', checked: !!(productCode && issueId && title) },
      { text: 'Summary provided', checked: !!summary },
      { text: 'Issue URL added and connected to ZenHub', checked: !!issueUrl },
      { text: 'Implementation details documented', checked: !!implementationDetails },
      { text: 'Screenshots/recordings included (if UI changes)', checked: !!screenshotUrls },
      { text: 'Test URL(s) provided with environment', checked: !!testUrls },
      { text: 'QA steps are clear and reproducible', checked: !!qaSteps },
      { text: 'Release notes written', checked: !!releaseNotes },
      { text: 'Dev notes added (if needed)', checked: !!devNotes },
      { text: 'Additional context mentioned (if applicable)', checked: !!additionalNotes }
    ];

    // Build PR text
    let prText = `<!--
Title format (follow this exactly):
[PRODUCT_CODES] #ISSUE - Short, imperative description
Examples:
- [TA] #2384 - Fix progress reporting on lesson view
- [TQB][TL] #2179 - Correct AB test chart conversion rate
-->

## Summary
${summary || '<!-- What is the change and why? Keep it concise. -->'}

## Issue URL
- **Issue URL**: ${issueUrl || '<!-- e.g., Fixes #1234; internal IDs like #2179 -->'}

## Implementation Details
${implementationDetails || '<!-- Briefly note the main approach taken and any key decisions. -->'}

## Screenshots / Screen Recording
${screenshotUrls || '<!-- Add images or short videos that demonstrate the change. -->'}

## Test URL(s)
${testUrls ? `- **Environment(s)**: ${testUrls}` : '<!-- Direct link reviewers can use to verify the change. -->\n- **Environment(s)**: '}

## How To Test (QA Steps)
${qaSteps || `1. <!-- Step-by-step to reproduce/verify -->
2. <!-- Include roles, prerequisites, test data, URLs -->
3. <!-- Expected result(s) -->`}

## Release Notes (User-facing)
${releaseNotes || '<!-- One or two sentences suitable for changelogs/release notes. -->'}

## Dev Notes (Optional)
${devNotes || '<!-- Anything the reviewer/maintainer should know when merging/deploying. -->'}

## Anything specific to this PR worth mentioning?
${additionalNotes || '<!-- Add if something stands out for other devs or for QA -->'}

## Checklist
${checklist.map(item => `- [${item.checked ? 'x' : ' '}] ${item.text}`).join('\n')}
`;

    return { prTitle, prText, checklist };
  };

  const { prTitle, prText, checklist } = generatePRText();

  return (
    <div className="min-h-screen py-4 px-4 pt-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PRForm
            formData={formData}
            onInputChange={handleInputChange}
          />
          <PROutput
            prTitle={prTitle}
            prText={prText}
            checklist={checklist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

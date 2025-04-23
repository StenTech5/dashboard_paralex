import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { toast } from 'react-toastify';
import BailBondPage1 from '../components/BailBondPage1';
import BailBondPage2 from '../components/BailBondPage2';
import BailBondPage3 from '../components/BailBondPage3';
import 'react-toastify/dist/ReactToastify.css';

const BailBondDownload = () => {
  const printRef = useRef();
  const [consentChecked, setConsentChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleDownload = () => {
    if (!consentChecked || !termsChecked) {
      toast.error('Please agree to both consent and terms before downloading.');
      return;
    }

    const pages = [
      document.querySelector('.page1-wrapper'),
      document.querySelector('.page2-wrapper'),
      document.querySelector('.page3-wrapper')
    ];

    pages.forEach((page, index) => {
      html2pdf()
        .set({
          margin: 0,
          filename: `bail_bond_page${index + 1}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        })
        .from(page)
        .save();
    });
  };

  const handleApprove = () => {
    toast.success('Bail Bond Approved!');
  };

  const handleReject = () => {
    toast.error('Bail Bond Rejected!');
  };

  return (
    <div className="bailbonddown-wrapper">
      <h2 className="bailbonddown-title">Bail Bond Download</h2>

      <div ref={printRef} className="bailbonddown-content">
        <BailBondPage1 />
        <BailBondPage2 />
        <BailBondPage3
          consentChecked={consentChecked}
          setConsentChecked={setConsentChecked}
          termsChecked={termsChecked}
          setTermsChecked={setTermsChecked}
        />
      </div>

      <div className="bailbond-buttons">
        <button className="bailbond-btn-download" onClick={handleDownload} disabled={!consentChecked || !termsChecked} style={!consentChecked || !termsChecked ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>Download</button>
        <button className="bailbond-btn-approve" onClick={handleApprove}>Approve</button>
        <button className="bailbond-btn-reject" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default BailBondDownload;

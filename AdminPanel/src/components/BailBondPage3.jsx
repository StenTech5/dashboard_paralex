import React from 'react';
import '../App.css';

const BailBondPage3 = ({ consentChecked, setConsentChecked, termsChecked, setTermsChecked }) => (
  <div className="page3-wrapper">
    <div className="page3-card">

      {/* Consent & Defendant Signature */}
      <div className="page3-section">
        <label className="page3-label">
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={() => setConsentChecked(!consentChecked)}
            style={{ accentColor: '#7C3AED' }}
          />
          Consent/Signature of Defendant
        </label>
        <p className="page3-paragraph">
          You attest to the fact that all the information provided by you in this Bail bond application and agreement have been provided in utmost good faith and if found to be false may warrant criminal sanctions and withdrawal of the bond, and a notice to the court of the withdrawal of the bond and shall also cause you to indemnify Paralex Logistics Limited of the cost of applying to the court for a discharge. Also, it shall cause you to forfeit 10% of your bail bond sum.
        </p>
      </div>

      {/* Terms & Conditions */}
      <div className="page3-section">
        <label className="page3-label">
          <input
            type="checkbox"
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
            style={{ accentColor: '#7C3AED' }}
          />
          Terms & Conditions
        </label>
        <p className="page3-paragraph">
          I agree to the terms and conditions
        </p>
      </div>

      {/* Seal & Signature Images */}
      <div className="page3-seal-sign">
        <img src="/seal2.png" alt="Seal" />
        <img src="/seal1.png" alt="Seal" />
      </div>

    </div>
  </div>
);

export default BailBondPage3;

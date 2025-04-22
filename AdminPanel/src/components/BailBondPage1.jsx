import React from 'react';
import { FaPrint, FaDownload } from 'react-icons/fa';
import '../App.css';
import logo from '../assets/logz.png';

const BailBondPage1 = () => (
  <div className="page1-wrapper">
    <div className="page1-card">
      {/* Banner */}
      <div className="banner">
        <div className="banner-logo">
          <img src={logo} alt="Paralex" />
        </div>
        <div className="banner-actions">
          <FaPrint className="icon" aria-label="Print" />
          <FaDownload className="icon" aria-label="Download" />
        </div>
      </div>

      {/* Intro & ID Row */}
      <div className="intro-id-row">
        <div className="intro-text">
          <p>
            You, the undersigned Defendant (“defendant” or “you” includes an
            accused person or a suspect), hereby represent and warrant that the
            following declarations made and answers given are true, complete and
            correct, and are made for the purpose of inducing Paralex Logistics
            Limited (“surety”) to issue, or cause to be issued, bail bond(s) or
            undertaking(s) for you (singularly or collectively the “Bond”), in
            the total amount of
          </p>
        </div>
        <div className="id-block">
          <div className="id-heading">
            ID – 1404
            <span className="id-pill">Pending</span>
          </div>
          <div className="date">Date: 17-04-2025</div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary">
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-item-label">Bond Amount:</span>₦100,000,000
          </div>
          <div className="summary-item">
            <span className="summary-item-label">10% Fee:</span>₦10,000,000
          </div>
          <div className="summary-item">
            <span className="summary-item-label">Court:</span>Ikeja, High Court
          </div>
          <div className="summary-item">
            <span className="summary-item-label">Investigating agency:</span>
            EFCC
          </div>
        </div>
      </div>

      {/* Defendant & Personal */}
      <div className="section flex">
        <div className="section-col">
          <h6 className="section-heading">Defendant’s Name & Address</h6>
          <div className="item-list">
            <div className="item">
              <span className="item-label">Name:</span>
              <span>Saheed Ahmed</span>
            </div>
            <div className="item">
              <span className="item-label">Phone No:</span>
              <span>090382267645</span>
            </div>
            <div className="item">
              <span className="item-label">Work phone No:</span>
              <span>090832267645</span>
            </div>
            <div className="item">
              <span className="item-label">Current home:</span>
              <span>Rented</span>
            </div>
            <div className="item">
              <span className="item-label">Email:</span>
              <span>yahyab@gmail.com</span>
            </div>
            <div className="item">
              <span className="item-label">Duration of stay:</span>
              <span>7 year</span>
            </div>
            <div className="item">
              <span className="item-label">Name of Landlord:</span>
              <span>Abubakar</span>
            </div>
            <div className="item">
              <span className="item-label">How long in Current State:</span>
              <span>Kogi state</span>
            </div>
            <div className="item">
              <span className="item-label">
                How Long Resided in Current City:
              </span>
              <span>Lokoja</span>
            </div>
            <div className="item">
              <span className="item-label">Former residence address:</span>
              <span>Banbagida way, Lokoja</span>
            </div>
          </div>
        </div>
        <div className="section-col">
          <h6 className="section-heading">Personal Description</h6>
          <div className="item-list">
            <div className="item">
              <span className="item-label">Date of Birth:</span>
              <span>20-09-1980</span>
            </div>
            <div className="item">
              <span className="item-label">Place of Birth (City & State):</span>
              <span>Abuja</span>
            </div>
            <div className="item">
              <span className="item-label">Sex:</span>
              <span>Male</span>
            </div>
            <div className="item">
              <span className="item-label">Nationality:</span>
              <span>Nigerian</span>
            </div>
            <div className="item">
              <span className="item-label">National Identity number:</span>
              <span>009988987</span>
            </div>
            <div className="item">
              <span className="item-label">
                Identification Number (Optional):
              </span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">
                International Passport Number (Optional):
              </span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">Height & Weight:</span>
              <span>6ft</span>
            </div>
            <div className="item">
              <span className="item-label">Eye Color:</span>
              <span>Brown</span>
            </div>
            <div className="item">
              <span className="item-label">Physical Challenge:</span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">
                Member of any social group(s)/Committee:
              </span>
              <span>Nil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arrest & Employment */}
      <div className="section flex">
        <div className="section-col">
          <h6 className="section-heading">Arrest Information</h6>
          <div className="item-list">
            <div className="item">
              <span className="item-label">Date of current arrest:</span>
              <span>10-10-2024</span>
            </div>
            <div className="item">
              <span className="item-label">Arresting agency:</span>
              <span>EFCC</span>
            </div>
            <div className="item">
              <span className="item-label">Detention facility location:</span>
              <span>Kuje</span>
            </div>
            <div className="item">
              <span className="item-label">Charges:</span>
              <span>Money Laundry</span>
            </div>
            <div className="item">
              <span className="item-label">Do you have an existing Bond:</span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">
                Have you ever failed to appear in court:
              </span>
              <span>No</span>
            </div>
            <div className="item">
              <span className="item-label">
                Have you enjoyed a surety bond before:
              </span>
              <span>No</span>
            </div>
            <div className="item">
              <span className="item-label">
                Pending Charges in other jurisdictions:
              </span>
              <span>No</span>
            </div>
            <div className="item">
              <span className="item-label">Details of Bond:</span>
              <span>
                form, by injected humour, or randomised words which don’t look
                even slightly beli
              </span>
            </div>
          </div>
        </div>
        <div className="section-col">
          <h6 className="section-heading">Employment Details</h6>
          <div className="item-list">
            <div className="item">
              <span className="item-label">
                Occupations for the past 5 years:
              </span>
              <span>Driver</span>
            </div>
            <div className="item">
              <span className="item-label">Current employers name:</span>
              <span>inDrive</span>
            </div>
            <div className="item">
              <span className="item-label">How long:</span>
              <span>3 year</span>
            </div>
            <div className="item">
              <span className="item-label">Position:</span>
              <span>Driver</span>
            </div>
            <div className="item">
              <span className="item-label">Supervisors name:</span>
              <span>Christian</span>
            </div>
            <div className="item">
              <span className="item-label">Work phone No:</span>
              <span>0903877765</span>
            </div>
            <div className="item">
              <span className="item-label">
                Most recent former employers name (optional):
              </span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">How long:</span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">Position:</span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">Supervisors name:</span>
              <span>Nil</span>
            </div>
            <div className="item">
              <span className="item-label">Work phone No.:</span>
              <span>Nil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BailBondPage1;

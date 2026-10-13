import React, { useState } from 'react';
import { MessageSquare, CheckCircle, AlertCircle, Info, Send } from 'lucide-react';
import { servicesData } from '../data/services';

interface ConsultationFormProps {
  initialServiceId?: string;
  onSuccess?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ initialServiceId, onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState(
    initialServiceId 
      ? servicesData.find(s => s.id === initialServiceId)?.title || servicesData[0].title 
      : servicesData[0].title
  );
  const [consultationMode, setConsultationMode] = useState('Online Video Call (Google Meet / Zoom)');
  const [preferredTime, setPreferredTime] = useState('Evening (5:00 PM – 8:00 PM IST)');
  const [message, setMessage] = useState('');
  
  // States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [simulatedData, setSimulatedData] = useState<any>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!contactNumber.trim()) {
      newErrors.contactNumber = "Please provide your phone or WhatsApp number.";
    } else if (contactNumber.trim().length < 8) {
      newErrors.contactNumber = "Please enter a valid phone number (including country code).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      fullName,
      contactNumber,
      areaOfInterest,
      consultationMode,
      preferredTime,
      message,
      timestamp: new Date().toLocaleString()
    };

    setSimulatedData(payload);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleReset = () => {
    setSubmitted(false);
    setSimulatedData(null);
  };

  return (
    <div style={{
      background: 'rgba(32, 16, 38, 0.85)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '20px',
      padding: '2.25rem',
      boxShadow: 'var(--shadow-luxury)'
    }}>
      {/* Demo Notice Banner */}
      <div style={{
        background: 'rgba(239, 112, 45, 0.1)',
        border: '1px dashed rgba(239, 112, 45, 0.35)',
        borderRadius: '10px',
        padding: '0.75rem 1rem',
        marginBottom: '1.75rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.6rem',
        fontSize: '0.8rem',
        color: '#FFA77A'
      }}>
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Demonstration Mode:</strong> This form demonstrates client-facing inquiry flow, field validation, and confirmation experience. In this sales demo, submissions are processed in-browser and do not transmit data to an external live server.
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">
                Full Name <span style={{ color: 'var(--orange-burnished)' }}>*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Patel"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-input"
                style={{ borderColor: errors.fullName ? '#EF4444' : undefined }}
              />
              {errors.fullName && (
                <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <AlertCircle size={12} /> {errors.fullName}
                </div>
              )}
            </div>

            {/* Phone or WhatsApp */}
            <div className="form-group">
              <label className="form-label">
                Phone or WhatsApp Number <span style={{ color: 'var(--orange-burnished)' }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210 / +1 415..."
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="form-input"
                style={{ borderColor: errors.contactNumber ? '#EF4444' : undefined }}
              />
              {errors.contactNumber && (
                <div style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <AlertCircle size={12} /> {errors.contactNumber}
                </div>
              )}
            </div>
          </div>

          {/* Area of Interest */}
          <div className="form-group">
            <label className="form-label">
              Primary Area of Consultation Interest <span style={{ color: 'var(--orange-burnished)' }}>*</span>
            </label>
            <select
              value={areaOfInterest}
              onChange={(e) => setAreaOfInterest(e.target.value)}
              className="form-select"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="General Astrology Consultation">General Life Direction & Overview</option>
              <option value="Family Matrimonial Alliance">Family Matrimonial Alliance</option>
              <option value="Other Specific Life Question">Other Specific Life Inquiry</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {/* Preferred Mode */}
            <div className="form-group">
              <label className="form-label">
                Preferred Consultation Mode
              </label>
              <select
                value={consultationMode}
                onChange={(e) => setConsultationMode(e.target.value)}
                className="form-select"
              >
                <option value="Online Video Call (Google Meet / Zoom)">Online Video Call (Google Meet / Zoom)</option>
                <option value="Direct Private Phone Call">Direct Private Phone Call</option>
                <option value="WhatsApp Audio / Video Call">WhatsApp Audio / Video Call</option>
                <option value="In-Person (Subject to Location & Prior Appointment)">In-Person (Subject to Location & Prior Appointment)</option>
              </select>
            </div>

            {/* Preferred Contact Time */}
            <div className="form-group">
              <label className="form-label">
                Preferred Contact Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="form-select"
              >
                <option value="Morning (9:30 AM – 12:30 PM IST)">Morning (9:30 AM – 12:30 PM IST)</option>
                <option value="Afternoon (1:30 PM – 4:30 PM IST)">Afternoon (1:30 PM – 4:30 PM IST)</option>
                <option value="Evening (5:00 PM – 8:00 PM IST)">Evening (5:00 PM – 8:00 PM IST)</option>
                <option value="US / International Time Window (EST / PST Coordination)">US / International Time Window (EST / PST Coordination)</option>
                <option value="Gulf Time Window (GST Coordination)">Gulf Time Window (GST Coordination)</option>
              </select>
            </div>
          </div>

          {/* Optional Message */}
          <div className="form-group">
            <label className="form-label">
              Questions or Life Context (Optional)
            </label>
            <textarea
              placeholder="Share any background you would like Shubham Dixit to be aware of prior to scheduling (e.g., upcoming wedding timeline, career transition, or whether exact birth time is confirmed)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-textarea"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-light-soft)', maxWidth: '340px' }}>
              ✦ Confidentiality strictly observed under traditional family ethics.
            </div>

            <button
              type="submit"
              className="btn btn-primary-orange btn-lg"
              style={{ width: '100%', maxWidth: '280px' }}
            >
              <Send size={16} />
              <span>Submit Demo Enquiry</span>
            </button>
          </div>
        </form>
      ) : (
        /* Verified Demo Submission Screen */
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(239, 112, 45, 0.15)',
            border: '2px solid var(--orange-burnished)',
            color: 'var(--orange-burnished)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem'
          }}>
            <CheckCircle size={30} />
          </div>

          <h3 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '1.5rem',
            color: '#FFFFFF',
            marginBottom: '0.5rem'
          }}>
            Enquiry Flow Simulated Successfully
          </h3>

          <p style={{
            color: 'var(--text-light-soft)',
            fontSize: '0.92rem',
            maxWidth: '520px',
            margin: '0 auto 1.5rem',
            lineHeight: 1.6
          }}>
            In a live production environment, this submission would be instantly dispatched to Shubham Dixit's verified email and official WhatsApp notification webhook for scheduling.
          </p>

          {/* Captured Payload Summary */}
          {simulatedData && (
            <div style={{
              background: 'rgba(24, 12, 29, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '1.25rem',
              maxWidth: '520px',
              margin: '0 auto 2rem',
              textAlign: 'left',
              fontSize: '0.84rem',
              lineHeight: 1.7
            }}>
              <div style={{ color: 'var(--gold-antique)', fontWeight: 700, marginBottom: '0.35rem' }}>
                Summary of Simulated Details:
              </div>
              <div><strong>Name:</strong> {simulatedData.fullName}</div>
              <div><strong>Contact:</strong> {simulatedData.contactNumber}</div>
              <div><strong>Service:</strong> {simulatedData.areaOfInterest}</div>
              <div><strong>Mode:</strong> {simulatedData.consultationMode}</div>
              <div><strong>Time Window:</strong> {simulatedData.preferredTime}</div>
              {simulatedData.message && <div><strong>Notes:</strong> {simulatedData.message}</div>}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleReset}
              className="btn btn-outline-gold"
            >
              Reset Form
            </button>
            <a
              href={`https://wa.me/918279696707?text=${encodeURIComponent(
                simulatedData 
                  ? `Hi Vardan, mujhe aapki website bohot achhi lagi! Maine website par form bhi fill kiya hai (Name: ${simulatedData.fullName}, Service: ${simulatedData.areaOfInterest}). Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?`
                  : "Hi Vardan, mujhe aapki website bohot achhi lagi. Kya hum is website ke baare mein aur baat kar sakte hain aur aage proceed kar sakte hain?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Proceed to WhatsApp (Vardan)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

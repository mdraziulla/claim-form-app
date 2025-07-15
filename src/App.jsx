import "./App.css";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dobType, setDobType] = useState('text');
  const [diagnosisType, setDiagnosisType] = useState('text');

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Submit logic here
  };

  return (
    <>
      <div className="container">
        <div className="left-side">
          <div className="card_width_blure">
            <div className="blur-card">
              <h1>
                Free <span>Case Review</span>
              </h1>
              <div className="feature-list">
                <p>100% Confidential</p>
                <p>No Win, No Fee</p>
                <p>Free Case Evaluation</p>
              </div>
            </div>
            <div className="righttop_half_card">
              <div className="circle-tag">
                <svg viewBox="0 -20 200 240">
                  <defs>
                    <path
                      id="curve"
                      d="M100,100 m0,-90 a90,90 0 1,1 0,180 a90,90 0 1,1 0,-180"
                    />
                  </defs>
                  <text fill="#ffffff" fontSize={30} fontWeight={600}>
                    <textPath
                      xlinkHref="#curve"
                      textAnchor="middle"
                      startOffset="50%"
                    >
                      ONLY 6 SLOTS LEFT
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="contact-section">
                <span>We are here to help!</span>
                <button className="contact-btn">
                  <span>Contact us</span>{" "}
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3asQ0CMRAF0W2CE/TfCQkSEEFAOYMsLiNG+rvM6+BrLjjLrpL0E8AZuANbdQZc+Xi2HgMcgMc+5gWcqiscEwrLhMIyobBMKMukskwqy6SyTKppZbb9uLzcqqsRQ/j+tI7VjSNSWCKFJVJYIoUlUlgiBf4AhsASIZhQYlnH0inX05cRDwakP/EGHbXP3xCyjY8AAAAASUVORK5CYII="
                      alt="forward--v1"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="info-card">
            <h2>Have you or a loved one been affected by Mesothelioma?</h2>
            <p>
              As a woman, you've carried the weight of care, love, and
              resilience. Now it’s time someone stands with you.
            </p>
            <ul>
              <li>Secondary Asbestos exposure is common</li>
              <li>Misdiagnosis delays are more frequent in women</li>
              <li>Women have won significant legal settlements</li>
            </ul>
          </div>
        </div>
        <div className="form-card">
          <h2>Claim Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        type="text"
        placeholder="First Name *"
        {...register('firstName', { required: 'First name is required' })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        type="text"
        placeholder="Last Name *"
        {...register('lastName', { required: 'Last name is required' })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input
        type="tel"
        placeholder="Phone Number *"
        {...register('phone', { required: 'Phone number is required' })}
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input
        type="email"
        placeholder="Email ID *"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type={dobType}
        placeholder="Date of Birth *"
        onFocus={() => setDobType('date')}
        onBlur={() => setDobType('text')}
        {...register('dob', { required: 'Date of birth is required' })}
      />
      {errors.dob && <p>{errors.dob.message}</p>}

      <input
        type="text"
        placeholder="Job Title *"
        {...register('jobTitle', { required: 'Job title is required' })}
      />
      {errors.jobTitle && <p>{errors.jobTitle.message}</p>}

      <input
        type={diagnosisType}
        placeholder="Date of Diagnosis *"
        onFocus={() => setDiagnosisType('date')}
        onBlur={() => setDiagnosisType('text')}
        {...register('diagnosisDate', { required: 'Diagnosis date is required' })}
      />
      {errors.diagnosisDate && <p>{errors.diagnosisDate.message}</p>}

      <select {...register('diagnosisType', { required: 'Diagnosis type is required' })}>
        <option value="">Type of Diagnosis *</option>
        <option value="mesothelioma">Mesothelioma</option>
        <option value="lung-cancer">Lung Cancer</option>
        <option value="other">Other</option>
      </select>
      {errors.diagnosisType && <p>{errors.diagnosisType.message}</p>}

      <textarea
        placeholder="Tell us your story (optional)"
        {...register('story')}
      ></textarea>

      <label className="checkbox-group">
        <input
          type="checkbox"
          {...register('privacy', { required: 'You must agree to the privacy policy' })}
        />
        I agree to the privacy policy and disclaimer...
      </label>
      {errors.privacy && <p>{errors.privacy.message}</p>}

      <label className="checkbox-group">
        <input
          type="checkbox"
          {...register('humanCheck', { required: 'Please verify you are a human' })}
        />
        Please check this box to verify you're a person.
      </label>
      {errors.humanCheck && <p>{errors.humanCheck.message}</p>}

      <button type="submit" className="submit-btn">
        Start your claim now
      </button>
    </form>
        </div>
      </div>
    </>
  );
}

export default App;

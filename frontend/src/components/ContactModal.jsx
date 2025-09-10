import React, { useState } from "react";
import "../styles/modal.css";

const ContactModal = ({ isOpen, onClose }) => {
  // State to track the form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null); // can be 'submitting', 'success', or 'error'

  // If the modal is not open, render nothing
  if (!isOpen) {
    return null;
  }

  // Handle the form submission with Fetch API
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default browser redirect
    setSubmissionStatus("submitting"); // Update status to show loading state

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // If submission is successful
        setSubmissionStatus("success");
        form.reset(); // Clear the form fields
      } else {
        // If there was an error from the server
        setSubmissionStatus("error");
      }
    } catch (error) {
      // If there was a network error
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  // When closing the modal, also reset the form status
  const handleClose = () => {
    onClose();
    // Use a short timeout to prevent users from seeing the form reset during the closing animation
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 300);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>
          &times;
        </button>

        {/* Conditionally render content based on submission status */}
        {submissionStatus === "success" ? (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your request was submitted successfully. We'll be in touch soon.</p>
            <button onClick={handleClose} className="btn-submit">
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>Request a Callback</h2>
            <p>Fill out the form below, and we'll contact you shortly.</p>

            <form
              action="https://formspree.io/f/mrbajljq"
              method="POST"
              className="contact-form"
              onSubmit={handleSubmit} // Use our custom submit handler
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required disabled={submissionStatus === 'submitting'}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required disabled={submissionStatus === 'submitting'}/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required disabled={submissionStatus === 'submitting'}/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" rows="3" disabled={submissionStatus === 'submitting'}></textarea>
              </div>

              {/* Show an error message if submission fails */}
              {submissionStatus === "error" && (
                  <p className="error-message">Oops! Something went wrong. Please try again.</p>
              )}
              
              <button
                type="submit"
                className="btn-submit"
                disabled={submissionStatus === "submitting"} // Disable button during submission
              >
                {submissionStatus === "submitting" ? "Sending..." : "Send Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

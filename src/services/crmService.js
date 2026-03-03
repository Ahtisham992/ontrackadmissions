/**
 * CRM & Email Integration Service
 * 
 * This service handles lead tracking and automated email sequences.
 * It simulates an API call to a backend CRM (e.g., HubSpot, Salesforce)
 * and an email delivery service (e.g., SendGrid, EmailJS).
 */

class CRMService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL || '/api/crm';
    this.isMocking = true; // Set to false when connecting real backend
  }

  /**
   * Submit a new lead from the Consultation form
   * @param {Object} leadData The form data (name, email, phone, etc.)
   * @returns {Promise<Object>} Response object indicating success
   */
  async submitConsultationLead(leadData) {
    console.log('CRMService: Submitting new consultation lead...', leadData);
    
    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.destination) {
      throw new Error('Missing required lead data fields');
    }

    if (this.isMocking) {
      // Simulate network request delay (1.5 seconds)
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`✅ Lead successfully tracked for: ${leadData.name}`);
          
          // Trigger automated confirmation email behind the scenes
          this.triggerAutomatedConfirmation(leadData.email, leadData.name);
          
          resolve({
            success: true,
            message: 'Lead submitted successfully',
            leadId: `LEAD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            timestamp: new Date().toISOString()
          });
        }, 1500);
      });
    }

    // Real API Implementation (Example)
    /*
    try {
      const response = await fetch(`${this.apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_CRM_API_KEY}`
        },
        body: JSON.stringify({
          source: 'Website_Consultation_Form',
          contact: leadData
        })
      });
      return await response.json();
    } catch (error) {
      console.error('CRM Submission Error:', error);
      throw new Error('Failed to submit application lead.');
    }
    */
  }

  /**
   * Triggers an automated welcome/confirmation email via the backend
   * @param {string} email Target email address
   * @param {string} name Target person name
   */
  triggerAutomatedConfirmation(email, name) {
    if (this.isMocking) {
      console.log(`✉️ Automated Email System: Sending confirmation email to ${email}`);
      console.log(`[Email Draft] Subject: Welcome to On Track Admissions, ${name}!`);
      console.log(`[Email Draft] Body: We have received your consultation request...`);
      return;
    }
    
    // Real Email API Call here...
  }
}

export const crmService = new CRMService();

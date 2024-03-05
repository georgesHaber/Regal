import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Privacy = () => {
  return (
    <div id="policy">
      <h1>Privacy Policy for Regal</h1>
      <p>At Regal, we are committed to protecting the privacy and security of our customers' personal information.
         This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures 
         we take to ensure its security.</p>
      <h2>Information We Collect:</h2>
      <ul>
        <li>Personal Information: When you use our services, we may collect personal information such as your name, address, contact details, and payment information.</li>
        <li>Order Information: We collect information related to your orders, including the items ordered, delivery instructions, and order history.</li>
        <li>Usage Data: We may collect information about how you interact with our website and mobile applications, including your browsing activity, IP address, and device information.</li>

      </ul>
      <h2>How We Use Your Information:</h2>
      <ul>
        <li>Order Processing: We use your personal information to process your orders, deliver food to your specified location, and provide customer support.</li>
        <li>Communication: We may use your contact information to communicate with you about your orders, promotions, and updates related to our services.</li>
        <li>Improvement of Services: We analyze usage data to improve the functionality and user experience of our website and mobile applications.</li>

      </ul>
      <h2>Data Security:</h2>
      <ul>
        <li>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</li>
        <li>We use encryption, firewalls, and other security protocols to safeguard your data during transmission and storage.</li>
      </ul>
      <h2>Disclosure of Information:</h2>
      <ul>
        <li>We may share your personal information with third-party service providers who assist us in delivering our services, processing payments, or analyzing user data. However, we ensure that these service providers adhere to strict privacy and security standards.</li>
        <li>We may disclose your information when required by law or to protect our rights, property, or safety, or that of our users.</li>
        </ul>
        <h2>Your Choices:</h2>
        <ul>
          <li>You have the right to access, update, or delete your personal information by contacting us through the provided channels.</li>
          <li>You may opt out of receiving promotional communications from us by following the unsubscribe instructions included in our emails or by contacting us directly.</li>

        </ul>
        <h2>Updates to Privacy Policy:</h2>
        <ul>
          <li>We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes to this policy by posting the updated version on our website or through other appropriate channels.</li>
        </ul>
        <h2>Contact Us:</h2>
        <p>If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us at regal.bakery.lb@gmail.com.</p>
        <p>By using our services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>
        <p>This Privacy Policy was last updated on 1/1/2024.</p>
      <Link to="/"><Button variant="outline-secondary">Back Home</Button></Link>
    </div>
  )
}

export default Privacy;

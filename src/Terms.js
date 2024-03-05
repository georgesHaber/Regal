import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Terms = () => {
  return (
    <div id="terms">
      <h1>Terms of Service</h1>
      <p>These Terms of Service ("Terms") govern your use of the services provided by Regal Food Delivery ("Regal", "we", "us", or "our"). By accessing or using our website, mobile applications, or any of our services, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using our services.</p>
      <ol>
        <li><h2>Service Description:</h2>
          <p>Regal provides an online platform that enables users to order food from local restaurants for delivery to their specified location. Our services include the facilitation of food orders, payment processing, and delivery coordination.</p>
              </li>
        <li><h2>User Responsibilities:</h2>
        <ul>
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree to provide accurate, current, and complete information when placing orders and creating an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</li>
        </ul>
            </li>
            <li><h2> Ordering and Payments:</h2>
        <ul>
          <li>By placing an order through our platform, you authorize us to charge your chosen payment method for the total amount of the order, including taxes, delivery fees, and any applicable service charges.</li>
          <li>All payments are processed securely through our payment gateway. We do not store your payment information on our servers.</li>
        </ul>
            </li>
            <li><h2>Delivery:</h2>
        <ul>
          <li>We aim to deliver orders in a timely manner, but delivery times may vary depending on factors such as restaurant preparation time, traffic conditions, and weather.</li>
          <li>We are not responsible for delays in delivery that are beyond our control.</li>
        </ul>
            </li>
            <li><h2>User Conduct:</h2>
        <ul>
          <li>You agree not to use our services for any unlawful or prohibited purpose.</li>
          <li>You agree not to interfere with the operation of our website or mobile applications, or to engage in any activity that may disrupt or damage our systems</li>
        </ul>
            </li>
            <li><h2> Intellectual Property:</h2>
        <ul>
          <li>All content and materials available on our platform, including logos, trademarks, and software, are the property of Regal or its licensors and are protected by intellectual property laws.</li>
        </ul>
            </li>
            <li><h2>Limitation of Liability:</h2>
        <ul>
          <li>To the extent permitted by law, Regal shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.</li>
          <li>We make no warranties or representations about the accuracy or completeness of the information provided on our platform.</li>
        </ul>
            </li>
            <li><h2>Governing Law:</h2>
        <ul>
          <li>These Terms shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in [insert jurisdiction].</li>
        </ul>
            </li>
            <li><h2>Changes to Terms:</h2>
        <ul>
          <li>We reserve the right to update or modify these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting on our website or mobile applications.</li>
             </ul>
            </li>
            <li><h2>Contact Us:</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at contact@regalfooddelivery.com.</p>
            </li>
      </ol>






      <Link to="/"><Button variant="outline-secondary">Back Home</Button></Link>
    </div>
  )
}

export default Terms;

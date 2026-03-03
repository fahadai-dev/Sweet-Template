import "../styles/contact.css";
import { businessData } from "../data/business";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">Get in touch with us</p>

        <div className="contact-content">
          {/* Contact Information Side */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-item">
                <svg className="icon" viewBox="0 0 512 512">
                  <path d="M391 351c-22.2 0-44-3.6-64-10.6-8-2.6-17 1-22.3 8l-46 55c-46-24-84-62-108-108l55-46c7-5.2 10.5-14.4 8-22.3-7-20-10.6-41.8-10.6-64 0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24 0 185.3 150.7 336 336 336 13.3 0 24-10.7 24-24v-107.4c0-13.3-10.7-24-24-24z" />
                </svg>
                <div>
                  <h3>Phone</h3>
                  <p>Call: {businessData.phone}</p>
                </div>
              </div>

              <div className="info-item">
                {/* WhatsApp Icon - Proper SVG */}
                <svg className="icon" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <div>
                  <h3>WhatsApp</h3>
                  <p>DM: 01927907376</p>
                </div>
              </div>

              <div className="info-item">
                <svg className="icon" viewBox="0 0 384 512">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <div>
                  <h3>Address</h3>
                  <p>{businessData.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8996090562!2d90.25446339453122!3d23.78106729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sweet Delight Premium Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

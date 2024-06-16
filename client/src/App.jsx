import './App.css';
import React, { useState } from 'react';
import RiskReportForm from './RiskReportForm';

function App() {

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  console.log("showform",showForm);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="app">
      <header className="header">
        {/* <div className="logo">Metomic</div> */}
        <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/65a7c63ddc3d1e9000341688_Metomic%20Logo%20-%20white.svg" alt="Metomic logo - the best data security solution for your SaaS apps" class="nav_logo_img"></img>
        <nav className="nav">
          <a href="#">Platform</a>
          <a href="#">Resource centre</a>
          <a href="#">Company</a>
          <a href="#">Case studies</a>
          <a href="#">Partners</a>
        </nav>
        <button className="book-demo">Book a demo</button>
      </header>


      <div className="content">
        <div className="left">
          <h2 className='data-header'>DATA BREACH FINDER</h2>
          <h1 className='hero-title'>Check if your Google Drive is leaking sensitive data</h1>
          
          <button className="risk-report-btn" onClick={handleButtonClick}><img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63ea8b2cb598e84eb4938fd6_google%20drive%20mark.svg" loading="lazy" alt="Google Drive logo" class="drive-logo"></img><span>Free Google Drive Risk Report</span></button>
          {showForm && <RiskReportForm onClose={handleCloseForm} />}

          {/* <button className="risk-report-btn" onClick={handleButtonClick}>Free Google Drive Risk Report</button>
      {showForm && <RiskReportForm onClose={handleCloseForm} />} */}
          <ul>
            <li>See how secure your Google Drive account is in seconds</li>
            <li>Discover who still has access to your files, and who they were created by</li>
            <li>Find risky files exposed publicly to anyone on the internet</li>
          </ul>
          <p className="disclaimer">After your scan is completed, we'll delete all collected data and remove our access permissions within 24 hours. We will not read any of your files' content at any time.</p>
          <p className="disclaimer">
            *Disclaimer: Our free-to-use Google Drive Risk Scanner recently underwent an upgrade, and as such, is being re-verified with Google. You're welcome to still use the scanner, all data is still handled with extreme care and we remove our access after 24 hours.
          </p>
        </div>
        <div className="right">
        <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report.png" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 504.375px, (max-width: 1439px) 45vw, 37vw" srcset="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report-p-500.png 500w, https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report-p-800.png 800w, https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report-p-1080.png 1080w, https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report-p-1600.png 1600w, https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report-p-2000.png 2000w, https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63d124c7e49714355f7d5bb7_google%20drive%20report.png 2432w" alt="Google Drive report screenshot" class="top-section-2-imgs---img-large hidden-on-mbp"/> 
        </div>
      </div>
      
      <div className="testimonials">
        <h2>DON'T WAIT UNTIL IT'S TOO LATE</h2>
        <h3>Join Infosec leaders securing their data</h3>
        <div className="testimonial-grid">
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>Metomic helps us identify sensitive information in applications where we previously had no or limited visibility.</p>
            <div className="author">
              <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg" loading="lazy" alt="" class="testimonial__headshot"></img>
              <span>Bud B</span>
              <span className="date">02/28/2023</span>
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">★★★★☆</div>
            <p>We use Metomic to uncover sensitive company data and prevent it from being shared or residing in places it shouldn't</p>
            <div className="author">
              <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg" loading="lazy" alt="" class="testimonial__headshot"></img>
              <span>Colin O</span>
              <span className="date">02/28/2023</span>
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>We are a Slack and Google shop, and Metomic had out-of-the-box integrations that made implementation a breeze</p>
            <div className="author">
              <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg" loading="lazy" alt="" class="testimonial__headshot"></img>
              <span>Tim C</span>
              <span className="date">02/28/2023</span>
            </div>
          </div>
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p>It's helping us to control any sensitive information being shared across the organisation. It also allows us to restrict users from sharing such information online.</p>
            <div className="author">
              <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg" loading="lazy" alt="" class="testimonial__headshot"></img>
              <span>Vamshi N</span>
              <span className="date">02/28/2023</span>
            </div>
          </div>
        </div>
      </div>

      <div className="third-page">
        <div className="inner-container">
          <h2>UNCOVER</h2>
          <h3>See the data Google Drive doesn’t <br/>
            <span> show you</span></h3>
        </div>
      
      <div className="content">
        <ul >
          <li>Personal data (PII)</li>
          <li>Protected health information (PHI)</li>
          <li>Payment card data (PCI)</li>
          <li>Confidential data</li>
          <li>Specific category data</li>
          <li>Secrets, keys and passwords</li>
        </ul>
        <div className="images">
          <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/634d87ffab29043dc7567063_GDRIVE%20DISCOVERW.png" alt="GDrive Discover 1" />
          <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/634d888fb42aa4bc76f251b4_GDRIVE%20DISCOVER%202.png" alt="GDrive Discover 2" />
        </div>
      </div>
    </div>

        <div className="risk-report-container">
      <h2>Get Started</h2>
      <h3>Choose Your Free Google Drive Risk Report</h3>
      <div className="options-container">
        <div className="option recommended">
          <div className="plan">
          <h4>Scan your Google Drive company account</h4>
          </div>
          <p className='parent-p'>Get a full risk report for your company in minutes</p>
          <p className='child-p'>
            After your scan is completed, we'll delete all collected data and remove our access permissions within 24 hours. We will not read any of your files' content at any time.
          </p>
          <button className="risk-report-button">
          <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/63ea8b2cb598e84eb4938fd6_google%20drive%20mark.svg" loading="lazy" alt="Google Drive logo" class="image-8"/>
            Free Google Drive Risk Report
          </button>
        </div>
        <div className="option">
          <h4>Run a dummy scan using our demo account</h4>
          <p className='option-first'>Get a sample report using dummy data.</p>
          <p className='option-second'>
            See how our scanner detects sensitive data such as Driving licenses, Credit card numbers and ID's
          </p>
          <button className="demo-button">
            Scan our Demo Account
          </button>
        </div>
        <div className="option">
          <h4>See all our Metomic features in action. Book a demo.</h4>
          <p className='demo-option'>Let's see how Metomic can help your business.</p>
          <p className='demo-option-second'>
            Request a demo to see how our platform can give you unparalleled visibility and control over your sensitive data.
          </p>
          <button className="demo-button">
            Book a Demo
          </button>
        </div>
      </div>
    </div>

    <div className="footer">
      <footer>
        <div className="footer-container">
        <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/65a7c63ddc3d1e9000341688_Metomic%20Logo%20-%20white.svg" alt="" id="w-node-_2edb5f20-7813-ae44-be50-1d2553317575-d0b159b0" class="footer_brand-logo"/>
          <div className="footer-section company">
            
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>Careers</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
            <div className="social-icons">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="footer-section integrations">
            <h3>Integrations</h3>
            <ul>
              <li>Google Drive</li>
              <li>Slack</li>
              <li>Jira</li>
              <li>Teams</li>
              <li>Zendesk</li>
              <li>GitHub</li>
              <li>ChatGPT</li>
              <li>Notion</li>
            </ul>
          </div>
          <div className="footer-section platform">
            <h3>Platform</h3>
            <ul>
              <li>Data Discovery</li>
              <li>Data Loss Prevention</li>
              <li>Access Controls</li>
              <li>DSPM Tool</li>
              <li>Human Firewall</li>
              <li>Insider Threat</li>
              <li>Compliance</li>
            </ul>
          </div>
          <div className="footer-section resources">
            <h3>Resources</h3>
            <ul>
              <li>Guides</li>
              <li>Whitepapers & Reports</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Video</li>
              <li>Product</li>
              <li>Email Subscription Management Centre</li>
            </ul>
          </div>
        </div>

        
        <div className="footer-bottom">
          <div className="footer-left">
            <h4 className='footer-title'>Try a virtual platform tour</h4>
            <span className='footer-description'>Take a guided tour of the Metomic data security platform.</span>
              <button className="tour-button">Virtual platform tour</button>
          </div>
          <div className="certifications">
            <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/6492a666238d1c4a6a8fdcf2_21972-312_SOC_NonCPA_Blk.png" alt="AICPA SOC"/>
            <img src="https://cdn.prod.website-files.com/633d92770fc68548a10ca623/659e98fe20102b6df4a550fb_image%201.png" alt="GetApp" />
            <img alt="Read Metomic reviews on G2" src="https://www.g2.com/products/metomic/widgets/stars?color=gray&amp;type=read"/>        </div>
            
          </div>
          <div className="footer-content">
            <div className="rights">
            <span className='copy-right'>Copyright © Metomic 2024</span>
            </div>
            <div className="cms">
              <span>
                <a href="#" className='terms'>Terms & Conditions</a>
              </span>
              <span>
                <a href="#" className='privacy'>Privacy Policy</a>
              </span>
            </div>
          </div>
      </footer>
    </div>

    </div>
  );
}

export default App;






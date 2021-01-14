import React, { useState, useEffect } from 'react';
import Link from "next/link";
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { FaCaretLeft } from "react-icons/fa";
import { PayPalButton } from "react-paypal-button-v2";

export default function Magazine ({frontmatter, markdownBody, subscriptionOptions, digitalMagazineOptions}) {
  const [step, setStep] = useState('subscription-selection');
  const [selectedCountry, setCountry] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');
  const [digitalEdition, setDigitalEdition] = useState('');
  const [currentEdition, setCurrentEdition] = useState('Physical')
  const [showPaypalButton, setShowPaypalButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  
  const resetPaypal = () => {
    Object.keys(window).forEach((key) => {
      if (/paypal|zoid|post_robot/.test(key)) {
          // eslint-disable-next-line fp/no-delete
          delete window[key];
      }
    });
  }
  
  const handleOptionChange = e => {
    e.persist(); // async access to event https://reactjs.org/docs/events.html
    setCurrentOption(e.target.value);
    setShowPaypalButton(true);
  };
  
  const handleCountryChange = e => {
    e.persist(); // async access to event https://reactjs.org/docs/events.html
    setCountry(e.target.value);
    setShowNextButton(true);
  };
  
  const showSubscriptionOption = () => {
    setCurrentOptions(subscriptionOptions.find((country) => country.slug === selectedCountry).options);
    setStep('subscription-options');
  }
  
  const showDigitalForm = () => {
    setStep('digital-form');
  }

  return(
        <div>
        <Head>
          <title>The Crossing Board - Magazine</title>
        </Head>
        <Layout>
        <div className="wrapper">
        <div className="important-notice">
          <h2>Important Notice</h2>
          <p>Please be aware that there are currently huge delays at Post Offices around the world because of staff shortages and quarantining of various depots. This may severely disrupt deliveries of our fanzines. </p>
          <p>Please understand that this is out of our control and <strong>The Crossing Board cannot be held responsible for any delays</strong>.</p>
          <p>Many thanks for your understanding and patience.</p>
        </div>
        <img src="../images/magazine/february-banner.png" alt="Next Issue" />
        <div className="magazine-faq">
          <ReactMarkdown source={markdownBody} escapeHtml={false} />
        </div>
        <div>
          <div className="magazine-options">
            <div className={`magazine-option-selection ${currentEdition === 'Physical' ? 'active' : ''}`} onClick={() => {setStep('subscription-selection'); setCurrentEdition('Physical'); setShowPaypalButton(false); resetPaypal();}}>Hard Copy</div>
            <a href="https://shop.thecrossingboard.com/collections/digital-fanzines" className="extra-magazines-link">
            <div className="magazine-option-selection">
              Digital
            </div>
            </a>
            <Link href="/extra-magazines" prefetch={false}>
            <a className="extra-magazines-link">
            <div className="magazine-option-selection">
              Extra Copies
            </div>
            </a>
            </Link>
          </div>
          <form>
            {step === 'loading' &&
              <div>
                <div>Processing... Please don't leave this page.</div>
              </div>
            }
            {step === 'subscription-selection' &&           
              <div>
                <div>
                  <p>If you don't want to miss out on our physical magazines, this is for you! Simply select from the shipping options below.</p>
                  <div className="magazine-promo">
                    <img src="../images/magazine/magazine-promo.jpg" />
                    <img src="../images/magazine/magazine-promo2.jpg" />
                  </div>
                  <p><strong>Important notes...</strong></p>
                  <ul>
                    <li>Before your departure, please note that our magazines are sent to print on the 1st of every month (London, UK time zone). If you begin your subscription on or after this time, you will receive the next month’s issue. But don’t worry, we won’t charge you twice!</li>
                    <li>We ship all magazines around a week after the 1st, so please take this into consideration when choosing a postage option.</li>
                    <li>You can cancel your membership anytime. You will receive your magazine for the months you pay.</li>
                    <li>Payment is taken immediately from your account and you will be charged again in a month from the day you subscribe.</li>
                    <li>Have any questions? Send an email to contact(@)thecrossingboard.com</li>
                  </ul>
                </div>
                <div className="selection-title">Choose your region:</div>
                {subscriptionOptions.map((country) => 
                	(
                    <div className="label-wrapper">
                  		<label for={country.slug} className="label">
                        <div className="label-info">
                    			<input 
                    				type="radio" 
                    				name="country" 
                    				id={country.slug}
                    				value={country.slug}
                    				onChange={handleCountryChange}
                            checked={selectedCountry === country.slug}
                    			/>
                    			<div className="form-options">
                    				<div>{country.name}</div>
                    				<div>from {country.options[0].price}</div>
                    			</div>
                        </div>
                        {country['extra-info'] &&
                        <div className="extra-info">
                          {country['extra-info']} {country.link && <a href={country.link} target="_blank">here</a>} {country['extra-info2'] && country['extra-info2']}
                        </div>
                      }
                  		</label>
                    </div>
                	)
                )}
                {showNextButton &&
                  <button className="next-button" onClick={showSubscriptionOption}>Next</button>
                }              
              </div>
            }
            {step === 'subscription-options' &&
            <div style={{position: 'relative'}}>
            <div onClick={() => {setStep('subscription-selection');}} className="back-button"><FaCaretLeft /></div>
            <div className="selection-info">
              <div>{subscriptionOptions.find((country) => country.slug === selectedCountry).name}</div>
              <div>{subscriptionOptions.find((country) => country.slug === selectedCountry).delivery}</div>
              <div>Please note: We cannot be held responsible for packages shipped using standard postage as there is no record of whether it has been delivered.</div>
            </div>
            <div className="selection-title">Choose your option:</div>
            {currentOptions.map((option, index) => {
              return ( 
                <div className="label-wrapper">
                  <label for={option.id} className="label">
                    <div className="label-info">
                      <input 
                        type="radio" 
                        name="subscription" 
                        id={option.id}
                        value={option.id}
                        onClick={handleOptionChange}
                        checked={currentOption === option.id}                   
                      />
                      <div className="form-options">
                        <div>{option.name}</div>
                        <div>{option.price}</div>
                      </div>
                    </div>
                  </label>
                </div>
              )}
            )}
            {showPaypalButton &&
            <PayPalButton
              options={{
                vault: true,
                clientId: "AXf3nkWf9_Ujy_samFC6KBVN7zHF8dUeUSNjneCPlEpzDmboTB9Q0WPpow0iyCax1Xu0kPeBmvU20RoX"
              }}
              style={{
              					shape: 'pill',
              					color: 'white',
              					layout: 'vertical',
              					label: 'subscribe'
              }}
              createSubscription={(data, actions) => {
                return actions.subscription.create({
                  plan_id: currentOption
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.subscription.get().then(function(details) {
                  setStep('subscription-complete');
                  showPaypalButton(false);
                });
              }}
            />
            }
            </div>
          }
            {step === 'digital-selection' && 
              <div>
              <div className="digital-info">
                <p>If you wish to purchase any of our previous issues, you can do so in digital form! Simply select from the magazines below.</p>
                <p><strong>Important notes...</strong></p>
                <ul>
                  <li>Please be sure to download your magazine as soon as you purchase it as it won't be accessible later!</li>
                  <li>Please be aware that this purchase is intended for your use only and unauthorised sharing is <u>strictly prohibited.</u></li>
                  <li>Have any questions? Send an email to contact(@)thecrossingboard.com</li>
                </ul>
              </div>
              <div className="selection-title">Choose your edition:</div>          
                <div className="digital-magazines-wrapper">
                  {digitalMagazineOptions.map((edition) => 
                  	(
                      <div className={`digital-cover-wrapper ${digitalEdition === edition.name ? 'active' : ''}`} onClick={() => {setDigitalEdition(edition.name); setShowPaypalButton(true);}}>
                        <img src={edition.cover} alt={edition.name} />
                        <div className="digital-edition-name">{edition.name}</div>
                        <div className="digital-price">£2.99</div>
                      </div>
                  	)
                  )}
                </div>
                {showPaypalButton &&
                <PayPalButton
                  options={{
                    clientId: "AXf3nkWf9_Ujy_samFC6KBVN7zHF8dUeUSNjneCPlEpzDmboTB9Q0WPpow0iyCax1Xu0kPeBmvU20RoX",
                    currency: "GBP"
                  }}
                  style={{
                            shape: 'pill',
                            color: 'white',
                            layout: 'vertical',
                            label: 'checkout'
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                currency_code: "GBP",
                                value: '2.99'
                            },
                            description: `The Crossing Board Digital Magazine: ${digitalEdition}`
                        }]
                    });
                  }}
                  onApprove={(data, actions) => {
                    // Capture the funds from the transaction
                    return actions.order.capture().then(function(details) {
                      setStep('digital-complete');
                      showPaypalButton(false);
                    });
                  }}
                />
                }
              </div>             
          }
          </form>
          {step === 'subscription-complete' &&
          <div className="thank-you">
            <h2>Thank you for your purchase! Yes yes!</h2>
            <p>Orders go for print on the 1st of every month and will be shipped around 1 week later.</p>
            <p>Your purchase was:</p>
            <div className="purchase-option">
            <p>{subscriptionOptions.find((country) => country.slug === selectedCountry).name}</p>
            <p>{currentOptions.find((option) => option.id === currentOption).name}</p>
            <p>{subscriptionOptions.find((country) => country.slug === selectedCountry).delivery}</p>
            </div>
          </div>
        }
          {step === 'digital-complete' &&
          <div className="thank-you">
            <h2>Thank you for purchasing our digital magazine, we hope you enjoy!</h2>
            <p>Please be aware that this purchase is intended for your use only and unauthorised sharing is <u>strictly prohibited.</u></p>
            <p>Below you will find the download for your magazine. Please note that this is NOT emailed to you, so download it now as it won't be available later.</p>
            <p>Click <a href={digitalMagazineOptions.find((edition) => edition.name === digitalEdition).file} download>here</a> to download your magazine.</p>
          </div>
          }
          
        </div>
        <style jsx>
          {`
            :global(#paypal-button-container.hide) {
              display:none;
            }
            .wrapper {
              background-color: #fdf8e3;
              margin: 20px 10%;
              border-radius: 10px;
              padding: 20px;
              color: #667756;
              text-align: center;
            }
            .wrapper img {
              max-width: 100%;
            }
            .closed-wrapper {
              max-width: 80%;
              margin: 0 auto;
            }
            .closed-text {
              background-color: #667756;
              color: #fcf8e3;
              padding: 10px;
              line-height: 2;
              box-shadow: 8px 0px 1px #657755, -8px 0px 1px #657755;
              
            }
            .label-wrapper {
              background-color: #6f8161;
              color: #FFFFFF;
              border-radius: 25px;
              margin: 20px 0;
              text-align: left;
              padding: 20px;
            }
            .back-button {
              position: absolute;
              left: 0;
              top: 10px;
                  cursor: pointer;
                  font-size: 60px;
                  display: flex;
                  align-items: center;
            }
            .next-button {
              width: 100%;
              background-color: #FFFFFF;
              padding: 10px;
              border: 1px solid;
              border-radius: 28px;
              text-transform: uppercase;
              font-size: 1.5em;
              color: #6e8160;
            }
            .extra-info {
              margin-left: 20px;
              margin-top: 5px;
            }
            a {
              color: #fab416;
              text-decoration: none;
              border-bottom: 1px dashed;
            }
            .selection-info {
              background: white;
              border: 2px dashed;
              border-radius: 30px;
              width: fit-content;
              margin: 10px auto;
              padding: 20px;
            }
            .selection-title {
              font-size: 2em;
            }
            .label-info {
              display: flex;
            }
            .form-options {
              display: flex;
              width: 100%;
              justify-content: space-between;
            }
            .magazine-faq {
              text-align: left;
              margin-top: 10px;
            }
            .magazine-faq :global(.image-left) {
              display: flex;
              align-items: center;
            }
            .magazine-faq :global(img) {
              max-width: 250px;
              margin-right: 20px;
              border: 5px solid;
            }
            ul {
              list-style-type: '${'\\1F31F'}';
              text-align: left;
            }
            li {
              padding-left: 10px;
            }
            .magazine-faq :global(a) {
              color: #946e49;
              border-bottom: 2px dashed #D19740;
              text-decoration: none;
            }
            .purchase-option {
              background: #FFFFFF;
              padding: 10px;
              border: 2px dashed;
              width: fit-content;
              margin: 0 auto;
              border-radius: 28px;
            }
            .magazine-faq :global(.magazine-text-bubble) {
              background-color: #FFFFFF;
              border: 2px dashed;
              padding: 20px;
              border-radius: 30px;
            }
            :global(.tiny-text){
              font-size: 0.7em;
            }
            :global(.placeholder-text){
              width: 250px;
              margin-right: 20px;
              height: 330px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #f7c4bf;
              color: #84787d;
            }
            
            .magazine-faq  :global(.no-border) {
              border: none;
              border-radius: none;
            }
            .magazine-options {
              display: flex;
              justify-content: space-around;
              margin-bottom: 20px;
              margin-top: 20px;
            }
            .magazine-option-selection {
              background-color: #FFFFFF;
              padding: 20px 100px;
              border: 1px solid #667755;
              border-radius: 30px;
              text-transform: uppercase;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.5s ease-out;
              color: #667755;
            }
            .magazine-option-selection.active, .magazine-option-selection:hover {
              background-color: #667756;
              border: 1px solid #FFFFFF;
              color: #FFFFFF;
            }
            .magazine-option-selection a {
              color: #667756;
              text-decoration: none;
              border: none;
            }
            .magazine-option-selection:hover a {
              color: #FFFFFF;
            }
            .extra-magazines-link {
              border: none;
            }
            .extra-magazines-link:hover {
              color: #FFFFFF;
            }
            .digital-magazines-wrapper {
              display: flex;
              justify-content: space-evenly;
              margin: 20px;
            }
            .digital-price {
              background: #FFFFFF;
              padding: 10px;
              border-radius: 20px;
              border: 1px solid;
            }
            .digital-cover-wrapper {
              max-width: 200px;
              cursor: pointer;
            }
            .digital-cover-wrapper img {
              border: 2px solid;
              box-shadow: 3px 3px 3px 1px rgb(82 82 82 / 25%);
            }
            .digital-cover-wrapper.active img {
              border: 5px solid #f9b412;
              box-shadow: 3px 3px 3px 1px rgb(82 82 82 / 25%);
            }
            .digital-edition-name {
              text-transform: uppercase;
              font-weight: bold;
            }
            .digital-form {
              margin-bottom: 20px;
            }
            .digital-form .field {
              margin: 20px 0;
            }
            .digital-form label {
              font-weight: bold;
              margin-right: 10px;
              text-transform: capitalize;
            }
            .digital-form input {
              padding: 5px 10px;
              border: 2px solid #657754;
              border-radius: 10px;
              background-color: #fef0d2;
            }
            .digital-form-description {
              max-width: 80%;
              margin: 0 auto;
            }
            .magazine-promo img {
              max-width: 50%;
              border: 5px solid;
            }
            .important-notice {
              background-color: #9e2e2e;
              margin-bottom: 25px;
              padding: 5px;
              color: #fcf8e3;
            }
            .important-notice strong {
              border-bottom: 1px solid;
            }
            @media (max-width: 768px) {
              .form-options {
                flex-wrap: wrap;
              }
              .magazine-options {
                flex-wrap: wrap;
              }
              .magazine-option-selection {
                margin: 10px 0;
              }
              .magazine-faq :global(.image-left) {
                flex-direction: column;
              }
              .magazine-faq :global(img) {
                margin: 0 auto;
              }
              .magazine-faq :global(.magazine-text-bubble) {
                margin-top: 15px;
              }
              .digital-magazines-wrapper {
                flex-wrap: wrap;
              }
              .digital-cover-wrapper {
                margin-top: 20px;
              }
            }
          `}
          
        </style>
        </div>
        </Layout>
        </div>
    );

}

export async function getStaticProps() {
  const content = await import(`../data/magazine.md`)
  const data = matter(content.default);
  const subscriptionOptions = await import(`../data/subscriptionOptions.json`);
  const digitalMagazineOptions = await import(`../data/digitalMagazineOptions.json`);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      ...subscriptionOptions,
      ...digitalMagazineOptions
    },
  }
}
    
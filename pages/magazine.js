import React, { useState } from 'react';
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { FaCaretLeft } from "react-icons/fa";

export default function Magazine ({frontmatter, markdownBody, subscriptionOptions, digitalMagazineOptions}) {
  const [step, setStep] = useState('subscription-selection');
  const [selectedCountry, setCountry] = useState('uk');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('P-3U309485264973135L5BZDYI');
  const [digitalEdition, setDigitalEdition] = useState('July 2020');
  const [nameDigital, setNameDigital] = useState('');
  const [emailDigital, setEmailDigital] = useState('');
  const [currentEdition, setCurrentEdition] = useState('Physical')
  
  const loadSubscribeButton = (planID) => {  
    const element = document.getElementById("paypal-button-container");
    
    if(element.firstChild){
      element.removeChild(element.firstChild); 
    } 
    
    paypal.Buttons({
          style: {
              shape: 'pill',
              color: 'white',
              layout: 'vertical',
              label: 'subscribe'        
          },
          createSubscription: function(data, actions) {
            return actions.subscription.create({
              'plan_id': planID // Creates the subscription
            });
          },
          onApprove: function(data, actions) {
            setStep('subscription-complete');
            removePayPalButton();
          }
    }).render(element); 
  }
  
  const loadDigitalMagazineButton = () => {
    const element = document.getElementById("paypal-button-container");
    
    if(element.firstChild){
      element.removeChild(element.firstChild); 
    } 
    
    paypal.Buttons({
        style: {
            shape: 'pill',
            color: 'white',
            layout: 'vertical',
            label: 'checkout',
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: "GBP",
                        value: '2.99'
                    },
                    description: `The Crossing Board Digital Magazine: ${digitalEdition}`
                }]
            });
        },
        onApprove: function(data, actions) {
          setStep('loading');
          const element = document.getElementById("paypal-button-container");
          element.classList.add('hide');
          return actions.order.capture().then(function(details) {
            setStep('digital-complete');
            removePayPalButton();    
          });
        }
    }).render(element);
  }
  
  const removePayPalButton = () => {
    const element = document.getElementById("paypal-button-container");
    
    if(element.firstChild){
      element.removeChild(element.firstChild); 
    } 
  }
  
  const handleOptionChange = e => {
    e.persist(); // async access to event https://reactjs.org/docs/events.html
    setCurrentOption(e.target.value);
    loadSubscribeButton(e.target.value);
  };
  
  const handleCountryChange = e => {
    e.persist(); // async access to event https://reactjs.org/docs/events.html
    setCountry(e.target.value);
  };
  
  const handleNameChange = e => {
    e.persist();
    setNameDigital(e.target.value);
  };
  
  const handleEmailChange = e => {
    e.persist();
    setEmailDigital(e.target.value);
  };
  
  const showSubscriptionOption = () => {
    setCurrentOptions(subscriptionOptions.find((country) => country.slug === selectedCountry).options);
    setCurrentOption(subscriptionOptions.find((country) => country.slug === selectedCountry).options[0].id);
    loadSubscribeButton(subscriptionOptions.find((country) => country.slug === selectedCountry).options[0].id);
    setStep('subscription-options');
  }
  
  const showDigitalForm = () => {
    setStep('digital-form');
  }
  
  const handleDigitalFormSubmit = (e) => {
    e.preventDefault(); 
    const element = document.getElementById("digital-button");
    element.parentNode.removeChild(element);
    loadDigitalMagazineButton()
  }

  return(
        <div>
        <Head>
          <title>The Crossing Board - Magazine</title>
          <script src="https://www.paypal.com/sdk/js?client-id=AXf3nkWf9_Ujy_samFC6KBVN7zHF8dUeUSNjneCPlEpzDmboTB9Q0WPpow0iyCax1Xu0kPeBmvU20RoX&vault=true&currency=GBP" />
        </Head>
        <Layout>
        <div className="wrapper">
        <img src="../images/magazine/october-banner.png" alt="Next Issue" />
        <div className="magazine-faq">
          <ReactMarkdown source={markdownBody} escapeHtml={false} />
        </div>
        <div>
          <div className="magazine-options">
            <div className={`magazine-option-selection ${currentEdition === 'Physical' ? 'active' : ''}`} onClick={() => {setStep('subscription-selection'); setCurrentEdition('Physical'); removePayPalButton();}}>Hard Copy</div>
            <div className={`magazine-option-selection ${currentEdition === 'Digital' ? 'active' : ''}`} onClick={() => {setStep('digital-selection'); setCurrentEdition('Digital'); removePayPalButton();}}>Digital</div>
          </div>
          <form onSubmit={handleDigitalFormSubmit}>
            {step === 'loading' &&
              <div>
                <div>Processing... Please don't leave this page.</div>
              </div>
            }
            {step === 'subscription-selection' &&           
              <div>
                <div>
                  <p>If you don't want to miss out on our physical magazines, this is the option for you! Simply select from the shipping options below.</p>
                  <p><strong>Important notes...</strong></p>
                  <ul>
                    <li>Before your departure, please note that our magazines are sent to print on the 1st of every month (London, UK time zone). If you begin your subscription on or after this time, you will receive the next month’s issue. But don’t worry, we won’t charge you twice!</li>
                    <li>We ship all magazines by the 8th of that month at the latest, so please take this into consideration when choosing a postage option.</li>
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
                <button className="next-button" onClick={showSubscriptionOption}>Next</button>
              </div>
            }
            {step === 'subscription-options' &&
            <div style={{position: 'relative'}}>
            <div onClick={() => {setStep('subscription-selection'); removePayPalButton();}} className="back-button"><FaCaretLeft /></div>
            <div className="selection-info">
              <div>{subscriptionOptions.find((country) => country.slug === selectedCountry).name}</div>
              <div>{subscriptionOptions.find((country) => country.slug === selectedCountry).delivery}</div>
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
                      <div className="digital-cover-wrapper" onClick={() => {setDigitalEdition(edition.name); loadDigitalMagazineButton();}}>
                        <img src={edition.cover} alt={edition.name} />
                        <div className="digital-edition-name">{edition.name}</div>
                      </div>
                  	)
                  )}
                </div>
              </div>             
          }
          </form>
          {step === 'subscription-complete' &&
          <div className="thank-you">
            <h2>Thank you for your purchase! Yes yes!</h2>
            <p>Orders go for print on the 1st of every month and will be shipped on the 8th of that month.</p>
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
        <div id="paypal-button-container"></div>
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
              border: 1px solid;
              border-radius: 30px;
              text-transform: uppercase;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.5s ease-out;
            }
            .magazine-option-selection.active, .magazine-option-selection:hover {
              background-color: #667756;
              border: 1px solid #FFFFFF;
              color: #FFFFFF;
            }
            .digital-magazines-wrapper {
              display: flex;
              justify-content: center;
              margin: 20px;
            }
            .digital-cover-wrapper {
              max-width: 200px;
              cursor: pointer;
            }
            .digital-cover-wrapper img {
              border: 2px solid;
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
    
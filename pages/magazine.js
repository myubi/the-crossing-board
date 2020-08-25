import React, { useState } from 'react';
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { FaCaretLeft } from "react-icons/fa";

export default function Magazine ({frontmatter, markdownBody, subscriptionOptions}) {
  const [step, setStep] = useState(0);
  const [selectedCountry, setCountry] = useState('uk');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('P-3U309485264973135L5BZDYI');
  
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
            alert('You have successfully created subscription ' + data.subscriptionID); // Optional message given to subscriber
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
  
  const showSubscriptionOption = () => {
    setCurrentOptions(subscriptionOptions.find((country) => country.slug === selectedCountry).options);
    setCurrentOption(subscriptionOptions.find((country) => country.slug === selectedCountry).options[0].id);
    loadSubscribeButton(subscriptionOptions.find((country) => country.slug === selectedCountry).options[0].id);
    setStep(1);
  }

  return(
        <div>
        <Head>
          <title>The Crossing Board - Magazine</title>
          <script src="https://www.paypal.com/sdk/js?client-id=AXf3nkWf9_Ujy_samFC6KBVN7zHF8dUeUSNjneCPlEpzDmboTB9Q0WPpow0iyCax1Xu0kPeBmvU20RoX&vault=true" />
        </Head>
        <Layout>
        <div className="wrapper">
        <div className="magazine-faq">
          <ReactMarkdown source={markdownBody} escapeHtml={false} />
        </div>
        <div>    
          <form>
            {step === 0 &&           
              <div>
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
            {step === 1 &&
            <div style={{position: 'relative'}}>
            <div onClick={() => {setStep(0); removePayPalButton();}} className="back-button"><FaCaretLeft /></div>
            <div className="selection-info">
              <div>{subscriptionOptions.find((country) => country.slug === selectedCountry).name}</div>
              <div>{subscriptionOptions.find((country) => country.slug === selectedCountry).delivery}</div>
            </div>
            <div className="selection-title">Choose your option:</div>
            {currentOptions.map((option, index) => 
              ( 
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
              )
            )}
            </div>
          }
          </form>
          
        </div>
        <div id="paypal-button-container"></div>
        <style jsx>
          {`
            .wrapper {
              background-color: #fdf8e3;
              margin: 20px 10%;
              border-radius: 10px;
              padding: 20px;
              color: #667756;
              text-align: center;
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
            }
            .magazine-faq :global(.image-left) {
              display: flex;
              align-items: center;
            }
            .magazine-faq :global(img) {
              max-width: 200px;
              margin-right: 20px;
            }
            .magazine-faq :global(ul) {
              list-style-type: '${'\\1F31F'}';
            }
            .magazine-faq :global(li) {
              padding-left: 10px;
            }
            .magazine-faq :global(a) {
              color: #946e49;
              border-bottom: 2px dashed #D19740;
              text-decoration: none;
            }
            @media (max-width: 768px) {
              .form-options {
                flex-wrap: wrap;
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

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      ...subscriptionOptions
    },
  }
}
    
import LayoutHalloween from "../../components/LayoutHalloween";
import Head from 'next/head';
import React from 'react';

export default class Gate4 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      code1: '',
      unlock: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const currentSet = this.props.halloweenSets[3];
    const allWarnings = document.getElementsByClassName('warning');
    [...allWarnings].map(warning => {
      if(warning.classList.contains !== 'hidden') {
        warning.classList.add("hidden");
      }
    })
    
    if(this.state.code1 === currentSet.hints[0].answer )
    {
      this.setState({
        unlock: true
      });
    }
    else {
      if(this.state.code1 !== currentSet.hints[0].answer){
        document.getElementById('warning-code1').classList.remove("hidden");
      }
    }
  }
  
  render() {
    const currentSet = this.props.halloweenSets[3];
    
    return (
      <div>
      <Head>
        <title>The Crossing Board - Halloween</title>
      </Head>
      <LayoutHalloween>
      <div className="halloween-set-wrapper">
      {!this.state.unlock &&
        <form onSubmit={this.handleSubmit}>
          {currentSet.hints.map((hint, index) => 
              (
                <div className="hint-wrapper">
                  <div><img className="candy" src={`../../images/halloween/candy${index + 1}.png`} alt="" /></div>
                  <label htmlFor={`code${index + 1}`}>Candy {index + 1}</label>
                  <div className="hint-header">Hint:</div>
                  <div>
                    {hint.isImage ?
                    (<img src={hint.text} alt="Hint" />) :
                    hint.text.map(text =>
                    (
                      <p dangerouslySetInnerHTML={{__html: text}} />
                    )
                    )}
                  </div>
                  <div>Answer:</div>
                  <input 
                    type="text"
                    name={`code${index + 1}`}
                    id={`code${index + 1}`}
                    onChange={this.handleInputChange}
                    required />
                  <div id={`warning-code${index + 1}`} className="warning hidden">Wrong code!</div>
                </div>
              )
            )}
            <input type="submit" value="Submit" className="submit-button" />
          </form>
      }
      {this.state.unlock &&
        <div>
        <h1>Congratulations!</h1>
          <p>You have unlocked a few Halloween Wallpapers!</p>
          <p>Click on the image to download</p>
          <div className="prizes-wrapper">
          {currentSet.prizes.map(prize => (
            <a href={prize} download><img src={prize} alt="" /></a>
          ))}
          </div>
        </div>
      }

      </div>
      <style jsx>{`
        .halloween-set-wrapper {
          background-color: #2c2c2c;
          max-width: 80%;
          margin: 0 auto;
          padding: 20px;
          border-radius: 10px;
        }
        img {
          max-width: 100%;
        }
        label {
          font-size: 1.5em;
        }
        input {
          margin-top: 10px;
          padding: 10px;
        }
        .prizes-wrapper {
          display: flex;
          max-width: 300px;
          margin: 0 auto;
        }
        .hint-wrapper {
          border: 2px dashed #f68c1f;
          padding: 20px;
          margin: 20px 10px;
        }
        .candy {
          max-width: 50px;
        }
        .hint-header {
          margin-top: 10px;
        }
        .hint-wrapper :global(a) {
          color: #f68c1f;
          border-bottom: 2px dashed #D19740;
          text-decoration: none;
        }
        .warning {
          color: red;
        }
        .hidden {
          display: none;
        }
        .submit-button {
          background-color: orange;
          border: none;
          padding: 20px 50px;
          border-radius: 10px;
          text-transform: uppercase;
          font-size: 1.5em;
        }
      `}</style>
    </LayoutHalloween>
    </div>
    );    
  }
}

export async function getStaticProps() {
    const halloweenSets = await import(`../../data/halloweenSets.json`);

  return {
    props: {
      ...halloweenSets
    },
  }
}
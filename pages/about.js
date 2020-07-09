import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from 'next/head';
import { TiHeartFullOutline, TiStarFullOutline, TiSocialTwitter } from "react-icons/ti";
import { FaCrown } from "react-icons/fa";

export default function Info(props) {
  const aboutFrontmatter = props.data;
  const aboutBody = props.content;
  const memberOfTheMonth = props.profiles.find(member => member['member-of-the-month']);
  const otherMembers = props.profiles.filter(member => !member['member-of-the-month'])
  
  return (
    <div>
    <Head>
      <title>The Crossing Board - About</title>
    </Head>
    <Layout>
    <div className="about-wrapper">
      <ReactMarkdown source={aboutBody} />
    </div>
    <div className="member-of-the-month">
      <div className="member-of-the-month-text">Member of the Month</div>
      <div className="member-of-the-month-crown"><FaCrown /></div>
      <div className="passport-wrapper motm-passport">
        <div className="passport-sides passport-top">
          <span>PASSPORT</span>
        </div>
        <div className="contents-wrapper">
          <div className="profile-picture"><img src={memberOfTheMonth.picture} alt={memberOfTheMonth.name} /></div>
          <div className="text-wrapper">
            <div className="profile profile-name"><TiHeartFullOutline /><span>{memberOfTheMonth.name}</span></div>
            <div className="profile profile-role"><TiStarFullOutline /><span>{memberOfTheMonth.role}</span></div>
            <div className="profile profile-twitter"><TiSocialTwitter /><span><a href={`https://twitter.com/${memberOfTheMonth.twitter}`} target="_blank">{memberOfTheMonth.twitter}</a></span></div>
            <div className="profile profile-bio">{memberOfTheMonth.bio}</div>
          </div>
        </div>
        <div className="passport-sides passport-bottom">&lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt;</div>
      </div>
    </div>
    <div className="divider" />
    <div className="profiles-wrapper">
      {otherMembers.map(profile => (
        <div className="passport-wrapper">
          <div className="passport-sides passport-top">
            <span>PASSPORT</span>
          </div>
          <div className="contents-wrapper">
            <div className="profile-picture"><img src={profile.picture} alt={profile.name} /></div>
            <div className="text-wrapper">
              <div className="profile profile-name"><TiHeartFullOutline /><span>{profile.name}</span></div>
              <div className="profile profile-role"><TiStarFullOutline /><span>{profile.role}</span></div>
              <div className="profile profile-twitter"><TiSocialTwitter /><span><a href={`https://twitter.com/${profile.twitter}`} target="_blank">{profile.twitter}</a></span></div>
              <div className="profile profile-bio">{profile.bio}</div>
            </div>
          </div>
          <div className="passport-sides passport-bottom">&lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt;</div>
        </div>
        
      ))}
    </div>
    <style jsx>{`
      .about-wrapper {
        background-color: #fdf8e3;
        margin: 20px auto;
        border-radius: 10px;
        padding: 20px;
        color: #667756;
        max-width: 80vw;
      }
      .passport-sides {
        background-image: url('../images/passport-bg-01.jpg');
        color: rgba(55, 110, 85, 0.56);
        padding: 15px;
      }
      .passport-top{
        border-radius: 30px 30px 0 0;
      }
      .passport-top span{
        overflow: hidden;
        text-align: center;
        max-width: 50%;
      }
      .passport-top span:before, .passport-top span:after{
          background-color: rgba(55, 110, 85, 0.56);
          content: "";
          display: inline-block;
          height: 1px;
          position: relative;
          vertical-align: middle;
          width: 15%;
      }
      .passport-top span:before {
        right: 1.2em;
        margin-left: -50%;
      }

      .passport-top span:after {
        left: 1.2em;
        margin-right: -50%;
      }
      .passport-bottom{
        border-radius: 0 0 30px 30px;
        text-align: right;
        padding-right: 50px;
        box-shadow: inset 0px -5px #dcd0b6;
      }
      .profiles-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      .passport-wrapper {
        background-color: #fdf8e3;
        max-width: 600px;
        border-radius: 30px;
        margin: 20px;
        background-image: url('../images/passport-bg-02.jpg');
        color: #165940;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .motm-passport {
        margin: 0 auto 30px;
      }
      
      .member-of-the-month-text {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 5px;
        color: #fcf8e3;
      }
      
      .member-of-the-month-crown {
        font-size: 2em;
        line-height: 0.4em;
        color: #84b95b;
      }
      
      .divider {
        border-bottom: 5px solid #4a583d9c;
        max-width: 400px;
        margin: 0 auto;
      }
      
      .passport-wrapper a {
        color: #165940;
        transition: all .2s ease-in-out;
      }
      
      .passport-wrapper a:hover {
        color: #82b75a;
      }
      
      .contents-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
      }
      
      .profile-picture {
        background-color: #fefce7;
        border-radius: 20px;
        max-width: 150px;
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .profile-picture img {
        max-width: 100px;
        border-radius: 20px;
        margin: 10px;
      }
      
      .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0;
      }
      
      .profile span {
        margin-left: 10px;
      }
      
      .text-wrapper {
        text-align: left;
        padding-right: 10px;
      }
      
      .profile-bio {
        position: relative;
        background: #fefce7;
        border-radius: 1em;
        padding: 10px;
      }
      
      .profile-bio:after {
      	content: '';
      	position: absolute;
      	left: 0;
      	top: 50%;
      	width: 0;
      	height: 0;
      	border: 1.5em solid transparent;
      	border-right-color: #fefce7;
      	border-left: 0;
      	border-top: 0;
      	margin-top: -0.5em;
      	margin-left: -.8em;
      }
      
      @media (max-width: 768px) {
        .contents-wrapper {
          flex-direction: column;
        }
        .about-wrapper {
          max-width: 85vw;
        }
        
        .profile-bio {
          margin-top: 20px;
        }
        
        .profile-bio:after {
        	content: '';
        	position: absolute;
        	top: 0;
        	left: 50%;
        	width: 0;
        	height: 0;
        	border: 20px solid transparent;
        	border-bottom-color: #fefce7;
        	border-top: 0;
        	margin-left: -20px;
        	margin-top: -20px;
        }
        
      }
    `}</style>
  </Layout>
  </div>
  );
}


Info.getInitialProps = async function() {
  const content = await import(`../data/about.md`)
  const data = matter(content.default)
  const profiles = await import(`../data/profiles.json`)

  return {
    ...data,
    ...profiles
  }
}
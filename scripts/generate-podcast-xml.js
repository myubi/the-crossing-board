const fs = require('fs');

const glob = require('glob');

(async () => {

  const podcasts = glob.sync('public/podcasts/**/*.mp3');
  const podcastFileName = podcasts.map(file =>
    file
      .split('/')[2]
      .replace(/ /g, '-')
      .slice(0, -4)
      .trim()
  );
  
  const podcastXML = `
        <rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:rawvoice="http://www.rawvoice.com/rawvoiceRssModule/" version="2.0">
        <channel>
            <title>Fireside Chat</title>
            <link>https://www.thecrossingboard.com</link>
            <image>
                <url>https://thecrossingboard.com/images/FridayFiresideChat.jpg</url>
                <title>Fireside Chat</title>
                <link>https://www.thecrossingboard.com</link>
            </image>
            <description>
                Friday Fireside Chats is a weekly podcast where we discuss anything and everything related to Animal Crossing! 
            </description>
            <language>en-us</language>
            <copyright>The Crossing Board copyright 2020</copyright>
            <atom:link href="https://thecrossingboard.com/podcast.xml" rel="self" type="application/rss+xml"/>
            <lastBuildDate>Fri, 31 Jul 2020 10:00:00 UTC</lastBuildDate>
            <itunes:author>The Crossing Board</itunes:author>
            <itunes:summary>
              Friday Fireside Chats is a weekly podcast where we discuss anything and everything related to Animal Crossing! 
            </itunes:summary>
            <itunes:subtitle>Friday Fireside Chats is a weekly podcast where we discuss anything and everything related to Animal Crossing! </itunes:subtitle>
            <itunes:owner>
                <itunes:name>The Crossing Board</itunes:name>
                <itunes:email>jemima.tcb@gmail.com</itunes:email>
            </itunes:owner>
            <itunes:explicit>No</itunes:explicit>
            <itunes:keywords>
                animal crossing,video games, nintendo
            </itunes:keywords>
            <itunes:image href="https://thecrossingboard.com/images/FridayFiresideChat.jpg"/>
            <rawvoice:rating>TV-G</rawvoice:rating>
            <rawvoice:frequency>Weekly</rawvoice:frequency>
            <itunes:category text="Video Games"/>
            <pubDate>Fri, 31 Jul 2020 10:00:00 UTC</pubDate>
            ${podcastFileName
              .map((podcastItem, index) => {
                
                return `

                        <item>
                        <title>Fireside Chat ${index + 1}</title>
                        <link>
                            https://thecrossingboard.com/podcasts/${podcastItem}.mp3
                        </link>
                        <pubDate>Fri, 31 Jul 2020 10:00:00 UTC</pubDate>
                        <description>
                            Friday Fireside Chats is a weekly podcast where we discuss anything and everything related to Animal Crossing! 
                        </description>
                        <enclosure url="https://thecrossingboard.com/podcasts/${podcastItem}.mp3" length="36715125" type="audio/mpeg"/>
                        <guid>
                            https://thecrossingboard.com/podcasts/${podcastItem}.mp3
                        </guid>
                        <itunes:duration>19:07</itunes:duration>
                        <itunes:summary>
                            Friday Fireside Chats is a weekly podcast where we discuss anything and everything related to Animal Crossing! 
                        </itunes:summary>
                        <itunes:image href="https://thecrossingboard.com/images/FridayFiresideChat.jpg"/>
                        <itunes:keywords>
                            animal crossing, video games, nintendo
                        </itunes:keywords>
                        <itunes:explicit>no</itunes:explicit>
                    </item>
                    `;
              })}
            </channel>
        </rss>
    `;

  fs.writeFileSync('public/podcast.xml', podcastXML);
})();
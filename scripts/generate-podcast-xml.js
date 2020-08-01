const fs = require('fs');

const glob = require('glob');

const podcasts = require('../data/podcasts.json');

(async () => {
  
  const podcastXML = `<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:rawvoice="http://www.rawvoice.com/rawvoiceRssModule/" version="2.0">
        <channel>
            <title>Fireside Chat</title>
            <link>https://www.thecrossingboard.com</link>
            <image>
                <url>https://thecrossingboard.com/images/FridayFiresideChat.png</url>
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
            <itunes:image href="https://thecrossingboard.com/images/FridayFiresideChat.png"/>
            <rawvoice:rating>TV-G</rawvoice:rating>
            <rawvoice:frequency>Weekly</rawvoice:frequency>
            <itunes:category text="Video Games"/>
            <pubDate>Fri, 31 Jul 2020 10:00:00 UTC</pubDate>
            ${podcasts.items
              .map((podcast) => {
                
                return `

                        <item>
                        <title>${podcast.name}</title>
                        <link>
                            https://thecrossingboard.com/podcasts/${podcast.filename}
                        </link>
                        <pubDate>${podcast.timestamp}</pubDate>
                        <description>
                            ${podcast.description}
                        </description>
                        <enclosure url="https://thecrossingboard.com/podcasts/${podcast.filename}" length="${podcast.filesize}" type="audio/mpeg"/>
                        <guid>
                            https://thecrossingboard.com/podcasts/${podcast.filename}
                        </guid>
                        <itunes:duration>${podcast.duration}</itunes:duration>
                        <itunes:summary>
                            ${podcast.description}
                        </itunes:summary>
                        <itunes:image href="https://thecrossingboard.com/images/FridayFiresideChat.png"/>
                        <itunes:keywords>
                            animal crossing, video games, nintendo
                        </itunes:keywords>
                        <itunes:explicit>no</itunes:explicit>
                    </item>
                    `;
              })}
            </channel>
        </rss>`;

  fs.writeFileSync('public/podcast.xml', podcastXML);
})();
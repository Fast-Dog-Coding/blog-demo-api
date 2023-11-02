const CATEGORIES = Object.freeze({
  NodeJs: 'Node.js',
  Angular: 'Angular',
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  IBM_Cloud: 'IBM Cloud',
  IBM_Cloudant: 'IBM Cloudant',
  IBM_Domino: 'IBM Domino',
  HTML_CSS: 'HTML/CSS',
  MongoDB: 'MongoDB'
});

const PROMOTION_LEVELS = Object.freeze({
  HERO: 'hero',
  FEATURE: 'feature',
  MAIN: 'main',
  SIDE_BAR: 'side bar',
  NONE: 'none'
});

const POSTS = {
  1: {
    id: 1,
    categories: [],
    promotion: PROMOTION_LEVELS.HERO,
    title: 'Why Create this Blog Application?',
    lede: 'When evaluating potential candidates for a position, it\'s crucial to assess their skills. However, what if\n' +
      '        the applicant\'s work is mostly proprietary? Ideally, they should be able to provide you with a sample of their work\n' +
      '        that they can share.',
    imageUrl: '/images/rustic_house.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/billgarrett-newagecrap/">William Garrett</a>',
    bodyHtml: '<h2>Assessing Competence</h2>\n' +
      '    <p>When searching for the right fit for a job, whether you\'re a client or an employer, you naturally want some\n' +
      '        assurance that the job seeker can meet the demands of the role. This is a reasonable expectation.</p>\n' +
      '    <p>For a writing position, this might involve candidates submitting previously published articles. With these in\n' +
      '        hand, you can evaluate the writer\'s skills, tone, and style to determine if they align with your project\'s\n' +
      '        needs.</p>\n' +
      '    <p>When it comes to hiring a programmer or application developer, you may want to examine an application or program\n' +
      '        that the applicant has created, along with the source code for a technical review. This gives you the\n' +
      '        opportunity to\n' +
      '        assess the developer\'s capabilities: Are they employing modern techniques? Is the code maintainable?</p>\n' +
      '    <h2>The Challenge I Face</h2>\n' +
      '    <p>One challenge I encounter when fulfilling requests for work samples is that all the work I\'ve done is proprietary\n' +
      '        and belongs to my clients. I can\'t share code or show applications to third parties.</p>\n' +
      '    <p>Another challenge is that projects I\'ve worked on are typically team-managed.\n' +
      '        This means there\'s little original work I can claim as solely my own, as multiple developers may have made\n' +
      '        changes since I initially wrote the code. Likewise, I\'ve also modified code originally written by others.</p>\n' +
      '    <p>So, how can I meet potential clients\' or employers\' needs to validate my skills given these constraints?</p>\n' +
      '    <h2>The Solution: "Blog Demo"</h2>\n' +
      '    <p>One solution to this challenge is to develop an application that\'s solely mine and has been maintained only by me. I can\n' +
      '        confidently share such an application with potential clients or employers since I own it, and there are no\n' +
      '        third-party limitations. Furthermore, it serves as an authentic sample of my skills, as I am the sole\n' +
      '        developer.</p>\n' +
      '    <p>This is how the "Blog Demo" application came to be.</p>\n' +
      '    <p>Another reason for choosing a blog as a demonstration application is that the blog posts themselves offer an\n' +
      '        avenue to elaborate on\n' +
      '        <a href="https://fastdogcoding.com/demo/files/Resume_Grant_Lindsay_Senior_Application_Developer.pdf" title="link to my resume" target="_blank">my resume</a>.\n' +
      '        I can discuss my skills, the rationale behind my design choices in the\n' +
      '        application, and other insights on technical topics.</p>\n' +
      '    <h2>Conclusion</h2>\n' +
      '    <p>I trust you\'ll find this "Blog Demo" application valuable, regardless of your role. If you\'re a recruiter or\n' +
      '        manager, the live version with its content complements my resume. For fellow technicians or engineers, the\n' +
      '        source code will aid in assessing my suitability for the position at hand.</p>\n' +
      '    <p>Please don\'t hesitate to reach out with any comments, questions, or suggestions.</p>\n' +
      '    <p>In the meantime, you might find the following links helpful:</p>\n' +
      '    <ul>\n' +
      '        <li><a href="https://www.linkedin.com/in/grant-lindsay-us/" title="link to my LinkedIn profile" target="_blank">LinkedIn Profile</a></li>\n' +
      '        <li><a href="https://fastdogcoding.com/demo/files/Resume_Grant_Lindsay_Senior_Application_Developer.pdf" title="link to my resume" target="_blank">Resume</a></li>\n' +
      '        <li><a href="https://github.com/orgs/Fast-Dog-Coding/repositories" title="link to my github repositoriies" target="_blank">GitHub Repositories</a></li>\n' +
      '    </ul>',
    authorId: 1,
    publishedDate: '2023-09-01T13:00:00Z'
  },
  2: {
    id: 2,
    categories: [ CATEGORIES.NodeJs ],
    promotion: PROMOTION_LEVELS.FEATURE,
    title: 'Node.js: A Powerful Choice for Building APIs',
    lede: 'In today\'s fast-paced IT world, Node.js has become a powerful choice for building APIs, offering speed, efficiency, a unified language stack, and a rich ecosystem. Let\'s explore why Node.js shines in API development and compare it to alternative technologies.',
    imageUrl: '/images/rustic_kitchen.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/guldem/">Güldem Üstün</a>',
    bodyHtml: '<p>In today\'s fast-paced IT landscape, the need for efficient and scalable API development is more critical than\n' +
      '        ever. Node.js, a runtime built on Chrome\'s V8 JavaScript engine, has emerged as a formidable tool for creating\n' +
      '        APIs that meet the demands of both technicians and managers in the industry. In this blog post, we\'ll explore\n' +
      '        how Node.js can be a game-changer and compare it to alternative technologies.</p>\n' +
      '\n' +
      '    <h2>Why Node.js for APIs?</h2>\n' +
      '\n' +
      '    <h3>Speed and Efficiency</h3>\n' +
      '    <p>Node.js is known for its non-blocking, event-driven architecture. This makes it exceptionally fast and efficient,\n' +
      '        making it an excellent choice for real-time applications and APIs. Whether you\'re building a RESTful API or a\n' +
      '        WebSocket-based service, Node.js can handle it with ease.</p>\n' +
      '    <h3>Single Language Stack</h3>\n' +
      '    <p>For developers, one significant advantage of Node.js is the ability to use JavaScript both on the client and\n' +
      '        server-side. This single-language stack simplifies development and reduces the learning curve. This can be\n' +
      '        particularly beneficial for teams with a diverse skill set.</p>\n' +
      '    <h3>Vibrant Ecosystem</h3>\n' +
      '    <p>Node.js boasts a vast ecosystem of open-source packages available through npm (Node Package Manager). This\n' +
      '        extensive library of modules accelerates development, allowing you to build APIs rapidly without reinventing the\n' +
      '        wheel.</p>\n' +
      '\n' +
      '    <h2>Comparing Node.js to Alternatives</h2>\n' +
      '\n' +
      '    <p>Now, let\'s compare Node.js to some alternative technologies commonly used for API development:</p>\n' +
      '\n' +
      '    <h3>1. Ruby on Rails</h3>\n' +
      '    <p>Ruby on Rails is renowned for its simplicity and convention over configuration (CoC) philosophy. However, it\n' +
      '        might not be as performant as Node.js, especially for handling a large number of concurrent requests. Node.js\'s\n' +
      '        event-driven model gives it an edge in this aspect.</p>\n' +
      '    <h3>2. Python with Django or Flask</h3>\n' +
      '    <p>Python is another popular choice for web development. Django and Flask are powerful frameworks for building APIs\n' +
      '        in Python. While Python is known for its readability and ease of use, Node.js still excels in terms of speed\n' +
      '        and handling I/O-intensive tasks.</p>\n' +
      '    <h3>3. Java with Spring Boot</h3>\n' +
      '    <p>Java and Spring Boot provide robust solutions for building APIs, especially in large enterprises. They offer\n' +
      '        strong typing and a mature ecosystem. However, Node.js\'s lightweight nature and quick setup can be advantageous\n' +
      '        for smaller projects or startups aiming for rapid development.</p>\n' +
      '    <h3>4. .NET Core</h3>\n' +
      '    <p>For Microsoft-centric environments, .NET Core is a strong contender. It\'s known for its performance and support\n' +
      '        for multiple languages. However, it may not be as cross-platform friendly as Node.js, which can run on various\n' +
      '        operating systems.</p>\n' +
      '\n' +
      '    <h2>Closing Thoughts</h2>\n' +
      '    <p>In conclusion, Node.js is a compelling choice for API development, offering speed, efficiency, a single language\n' +
      '        stack, and a vast ecosystem of packages. However, the choice between Node.js and its alternatives depends on\n' +
      '        your specific project requirements, team expertise, and organizational needs. It\'s essential to evaluate each\n' +
      '        technology\'s pros and cons carefully.</p>\n' +
      '    <p>Remember that there\'s no one-size-fits-all answer. Ruby on Rails, Python, Java, .NET Core, and other technologies\n' +
      '        have their strengths and can be the right choice in different scenarios. Ultimately, the best choice for your\n' +
      '        API project will depend on your unique circumstances.</p>\n' +
      '    <p>So, whether you\'re a developer looking for a nimble solution or a manager concerned with scalability, Node.js\n' +
      '        deserves serious consideration when building your next API. It might just be the key to unlocking your\n' +
      '        project\'s full potential.</p>',
    authorId: 2,
    publishedDate: '2023-09-11T18:00:00Z'
  },
  3: {
    id: 3,
    categories: [ CATEGORIES.MongoDB, CATEGORIES.IBM_Cloudant ],
    promotion: PROMOTION_LEVELS.FEATURE,
    title: 'MongoDB: Unleashing the Power of NoSQL Databases',
    lede: 'Hey there! Today, we\'re diving into the world of databases and exploring MongoDB, a popular NoSQL database system. We\'ll also take a look at how it compares to traditional relational databases and other NoSQL options. So, grab your virtual passport, because we\'re about to embark on a data-driven journey!',
    imageUrl: '/images/rustic_porch.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/sarahvain/">Sarah Stierch</a>',
    bodyHtml: '<h2>MongoDB: A Brief Introduction</h2>\n' +
      '\n' +
      '    <p>MongoDB is a document-oriented NoSQL database that\'s been making waves in the tech world. As an application\n' +
      '        developer, you\'ll appreciate its flexibility and scalability. But before we get into the nitty-gritty, let\'s\n' +
      '        understand what sets MongoDB apart from the more traditional relational databases.</p>\n' +
      '\n' +
      '    <h2>Relational vs. NoSQL: The Showdown</h2>\n' +
      '    <p>In the red corner, we have the heavyweight champion, Relational Databases! On the other side,\n' +
      '        we\'ve got MongoDB, the agile contender.</p>\n' +
      '\n' +
      '    <h3>Data Structure</h3>\n' +
      '    <p>Relational databases, like MySQL and PostgreSQL, store data in tables with rows and columns, which\n' +
      '        is perfect for structured data. Whereas, NoSQL databases, like MongoDB use a document-based model,\n' +
      '        which means data is stored in JSON-like documents. This flexibility allows you to store\n' +
      '        semi-structured or unstructured data effortlessly.</p>\n' +
      '\n' +
      '    <h3>Scalability</h3>\n' +
      '    <p>When it comes to handling large datasets and high traffic, MongoDB flexes its muscles. It\'s designed for\n' +
      '        horizontal scalability, which means you can easily distribute your data across multiple servers or clusters.\n' +
      '        This can be a game-changer for applications that need to scale rapidly.</p>\n' +
      '    <p>Relational databases, while robust, can be a bit rigid in terms of scalability. You can vertically scale them by\n' +
      '        adding more resources to a single server, but there\'s a limit to how far you can go before hitting performance\n' +
      '        bottlenecks.</p>\n' +
      '\n' +
      '    <h3>Schema</h3>\n' +
      '    <p>One of MongoDB\'s defining features is its schema-less design. You\'re not locked into a predefined schema, making\n' +
      '        it easy to adapt to changing data requirements. This can save you time and effort during the development\n' +
      '        process.</p>\n' +
      '    <p>Relational databases demand a strict schema upfront. While this can provide data integrity, it can also be\n' +
      '        restrictive when your application\'s requirements evolve.</p>\n' +
      '\n' +
      '    <h3>Query Language</h3>\n' +
      '    <p>SQL is the lingua franca of relational databases, and mastering it is essential for developers. MongoDB, on the\n' +
      '        other hand, uses a query language that\'s more JSON-like, making it friendlier for those who are comfortable with\n' +
      '        JavaScript and JSON.</p>\n' +
      '\n' +
      '    <h3>Complex Queries</h3>\n' +
      '    <p>For complex queries involving multiple tables and joins, relational databases shine. They\'re well-suited for\n' +
      '        scenarios where data relationships are intricate and structured.</p>\n' +
      '    <p>MongoDB offers powerful querying capabilities too, but it excels when your data is more document-oriented, and\n' +
      '        you need to retrieve data quickly without complex joins.</p>\n' +
      '\n' +
      '    <h2>MongoDB vs. Other NoSQL Databases</h2>\n' +
      '    <p>Now that we\'ve seen how MongoDB stacks up against relational databases, let\'s see how it fares in the NoSQL\n' +
      '        arena, where various players offer different strengths.</p>\n' +
      '\n' +
      '    <h3>Cassandra</h3>\n' +
      '    <p>Cassandra is excellent for handling massive amounts of data across multiple nodes. It\'s designed for high\n' +
      '        availability and fault tolerance, making it a solid choice for applications that need to be always-on.</p>\n' +
      '    <p>MongoDB, while also scalable, might be easier to set up and work with for developers who are new to NoSQL.</p>\n' +
      '\n' +
      '    <h3>Redis</h3>\n' +
      '    <p>Redis is an in-memory data store known for its lightning-fast performance. It\'s fantastic for caching and\n' +
      '        real-time analytics. However, it\'s not a general-purpose database like MongoDB.</p>\n' +
      '    <p>If your application requires persistent storage and a more versatile query language, MongoDB is the way to\n' +
      '        go.</p>\n' +
      '\n' +
      '    <h3>CouchDB</h3>\n' +
      '    <p>CouchDB is a NoSQL database that shines in scenarios where data needs to be distributed and replicated\n' +
      '        efficiently. It\'s especially useful for applications that operate in unreliable network conditions. IBM has\n' +
      '        contributed to CouchDB and its own Cloudant database is based on it.</p>\n' +
      '    <p>MongoDB, with its flexible data model and powerful querying, offers a broader range of use cases.</p>\n' +
      '\n' +
      '    <h2>Wrapping Up</h2>\n' +
      '    <p>In our journey through the database landscape, we\'ve discovered MongoDB\'s strengths and compared it to both\n' +
      '        traditional relational databases and other NoSQL options. MongoDB\'s flexibility, scalability, and\n' +
      '        developer-friendly approach make it a compelling choice for many projects.</p>\n' +
      '    <p>However, it\'s essential to remember that there\'s no one-size-fits-all solution in the database world. Your choice\n' +
      '        should depend on your specific application\'s needs and the trade-offs you\'re willing to make.</p>\n' +
      '    <p>So, whether you\'re building the next big app or diving into the world of NoSQL, MongoDB is a versatile tool that\n' +
      '        can help you on your data-driven adventures. Happy coding, and may your databases always be responsive and your\n' +
      '        queries lightning-fast!</p>',
    authorId: 2,
    publishedDate: '2023-09-10T19:50:00Z'
  },
  4: {
    id: 4,
    categories: [ CATEGORIES.IBM_Domino ],
    promotion: PROMOTION_LEVELS.MAIN,
    title: 'The Rise and Decline of Notes and Domino: A Brief History and Analysis',
    lede: 'HCL Notes and Domino, previously known as IBM Notes and IBM Domino, were once powerful players in collaborative software. This blog post explores their history, highlights their strengths, including security and programmability, and offers insights into why their popularity eventually waned.',
    imageUrl: '/images/rustic_window.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/dejankrsmanovic/">Dejan Krsmanovic</a>',
    bodyHtml: '<p><strong>Introduction:</strong> Notes and Domino (once branded under Lotus, then IBM, and now\n' +
      '    <a href="https://www.hcl-software.com/domino">HCL</a>,) while still being used globally, once stood as titans in\n' +
      '    the world of collaborative software solutions. They boasted an impressive array of features, from robust security to\n' +
      '    advanced replication capabilities and programmability. However, despite their strengths, these once-popular products\n' +
      '    saw a decline in popularity over time.</p>\n' +
      '\n' +
      '<h2>A Short History:</h2>\n' +
      '<p>Notes and Domino were initially developed by Lotus Development Corporation in 1989. They\n' +
      '    revolutionized the way businesses handled communication and collaboration. The key innovation was their combination\n' +
      '    of email, calendar, and database capabilities in a single platform. In 1995, IBM acquired Lotus, leading to the\n' +
      '    rebranding of these products as IBM Notes and Domino. </p>\n' +
      '<p>In 2019, IBM sold these (and other) products to <a href="https://www.hcl-software.com/" target="_blank">HCL\n' +
      '    Technologies</a>, which continues to actively sell and support them. More on the history and current state of Notes\n' +
      '    and Domino\n' +
      '    <a href="https://en.wikipedia.org/wiki/HCL_Domino" target="_blank">can be found here</a>.</p>\n' +
      '\n' +
      '<h2>Strengths of Notes/Domino:</h2>\n' +
      '<ol>\n' +
      '    <li><strong>Security:</strong> Notes/Domino are known for their robust security features, implemented well ahead of\n' +
      '        their time. They offer encryption, two-factor user authentication, and sophisticated access control, making them\n' +
      '        a trusted choice for organizations dealing with sensitive data.\n' +
      '    </li>\n' +
      '\n' +
      '    <li><strong>Replication:</strong> Replication is a standout feature, allowing data synchronization across\n' +
      '        distributed servers. This makes them ideal for organizations with a global footprint, ensuring data consistency\n' +
      '        and availability.\n' +
      '    </li>\n' +
      '\n' +
      '    <li><strong>NoSQL Database Store:</strong> Lotus Domino uses a document-based NoSQL database, which was ahead of its\n' +
      '        time. It\n' +
      '        allows for flexible data modeling, making it suitable for a wide range of applications beyond traditional\n' +
      '        email.\n' +
      '    </li>\n' +
      '\n' +
      '    <li><strong>Programmability:</strong> LotusScript, a scripting language, enable extensive customization and\n' +
      '        automation. Developers can create custom applications within the platform, adding to its versatility. Java was\n' +
      '        integrated into IBM Notes beginning with Release 4.5. With Release 5, Java support was greatly enhanced and\n' +
      '        expanded, and JavaScript was added.\n' +
      '    </li>\n' +
      '</ol>\n' +
      '\n' +
      '<h2>The Decline in Popularity:</h2>\n' +
      '<p>Several factors contributed to the decline of Notes and Domino\'s popularity:</p>\n' +
      '<ul>\n' +
      '    <li><strong>Complexity:</strong> The all-in-one approach, while powerful, also made the software complex and\n' +
      '        challenging to manage. This complexity often led to higher IT costs.\n' +
      '    </li>\n' +
      '\n' +
      '    <li><strong>Evolution of Competing Platforms:</strong> Newer collaboration and email platforms entered the market,\n' +
      '        offering more streamlined and user-friendly experiences. Users began to migrate to these alternatives.\n' +
      '    </li>\n' +
      '\n' +
      '    <li><strong>Changing Business Needs:</strong> As businesses evolved, so did their collaboration requirements. Lotus\n' +
      '        Notes/Domino struggled to keep up with the demand for more agile and cloud-based solutions.\n' +
      '    </li>\n' +
      '\n' +
      '    <li><strong>Mobile Revolution:</strong> The rise of mobile devices shifted user expectations. Notes/Domino\'s\n' +
      '        mobile support lagged behind, causing frustration among users.\n' +
      '    </li>\n' +
      '</ul>\n' +
      '\n' +
      '<h2>Opinion:</h2>\n' +
      '<p>While Notes and Domino are undeniably powerful tools, their decline from their heyday can be attributed to a\n' +
      '    combination of factors. The complexity of the platform, changing business landscapes, and the emergence of more\n' +
      '    user-friendly alternatives played a significant role. However, it\'s worth noting that there are still passionate\n' +
      '    advocates of these products who appreciate their unique strengths.</p>\n' +
      '\n' +
      '<p>In conclusion, the story of Notes and Domino is a reminder that even groundbreaking software can face challenges in a\n' +
      '    rapidly evolving tech world. Their utility lives on in the memories of those who relied, and still rely, on them for\n' +
      '    their collaborative needs.\n' +
      '<p>\n' +
      '    <small class="text-secondary">&mdash;with contributions from <a href="https://openai.com/chatgpt" target="_blank">ChatGTP</a></small>\n' +
      '</p>',
    authorId: 1,
    publishedDate: '2023-09-15T16:30:00Z'
  },
  5: {
    id: 5,
    categories: [ CATEGORIES.IBM_Cloud ],
    promotion: PROMOTION_LEVELS.MAIN,
    title: 'Comparison of Cloud Service Providers',
    lede: 'It seems to me that IBM Cloud doesn\'t always get the same level of attention as other providers, like ' +
      'AWS and Azure. There may be a few reasons for this. One is market share and another is target audience.',
    imageUrl: '/images/rustic_fence.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/iulian-d/">Iulian Dumitru</a>',
    bodyHtml: '<h2>Market Share</h2>\n' +
      '<p>AWS and Azure have been around longer and have larger market shares. For example, consider the share among the top five services of $65B in the Cloud Services market in Q2 2023:</p>\n' +
      '<table class="table">\n' +
      '    <thead>\n' +
      '        <tr class="table-secondary"><th>Platform</th><th>Market Share</th></tr>\n' +
      '    </thead>\n' +
      '    <tbody>\n' +
      '        <tr><td>AWS</td><td>32%</td></tr>\n' +
      '        <tr><td>Azure</td><td>22%</td></tr>\n' +
      '        <tr><td>Google Cloud</td><td>11%</td></tr>\n' +
      '        <tr><td>Alibaba Cloud</td><td>4%</td></tr>\n' +
      '        <tr><td>IBM Cloud</td><td>3%</td></tr>\n' +
      '    </tbody>\n' +
      '</table>\n' +
      '<p class="text-muted small">Source: <a\n' +
      '        href="https://www.statista.com/chart/18819/worldwide-market-share-of-leading-cloud-infrastructure-service-providers/">Statista</a></p>\n' +
      '<p>Larger market share creates momentum. Leaders tend to get more visibility, which attracts new customers and, as a\n' +
      '    result, they continue to lead.</p>\n' +
      '<h2>Target Audience</h2>\n' +
      '<p>IBM Cloud focuses more on enterprise clients. IBM emphasize security, compliance, and hybrid cloud solutions, making\n' +
      '    them a go-to choice for industries like finance, healthcare, and government where stringent data regulations and\n' +
      '    on-premises integration are critical. IBM Cloud positions itself as a provider with deep expertise in these\n' +
      '    areas.</p>\n' +
      '\n' +
      '<p>The market leaders tend to have a broader target audience and are often associated with startups, small businesses,\n' +
      '    and a wide range of applications. They offer a wide array of services and are known for their scalability and\n' +
      '    flexibility, which can appeal to a wider set of customers.</p>\n' +
      '<h2>Conclusions</h2>\n' +
      '<p>The differences in levels of attention and even market share seems to be more about the target audience and\n' +
      '    positioning rather than the technology itself. Each has its strengths. Different platforms cater to different needs\n' +
      '    and customer bases.</p>\n' +
      '<p>IBM Cloud offers a strong platform with a focus on hybrid and multi-cloud solutions, so it\'s a good choice for\n' +
      '    enterprises with specific requirements around data protection, governance, and hybrid cloud integration.</p>\n' +
      '<p>Whereas, other options, like AWS and Azure, offer a more general-purpose cloud platform, which can have broader\n' +
      '    appeal.</p>' +
      '<p>\n' +
      '    <small class="text-secondary">&mdash;with contributions from <a href="https://openai.com/chatgpt" target="_blank">ChatGTP</a></small>\n' +
      '</p>',
    authorId: 1,
    publishedDate: '2023-11-02T19:00:00Z'
  },
  6: {
    id: 6,
    categories: [ CATEGORIES.IBM_Domino, CATEGORIES.MongoDB ],
    promotion: PROMOTION_LEVELS.SIDE_BAR,
    title: 'That\'s Not on the Roadmap Workflow Ecosystem',
    lede: 'Pass the mayo, appeal to the client, sue the vice president encourage & support business growth, yet I have a hard stop in an hour and half. In this space, can you put it on my calendar?',
    imageUrl: '/images/rustic_goat.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/freestocks/">freestocks.org</a>',
    bodyHtml: '<h2>Overcome Key Issues to Meet Key Milestones</h2>\n' +
      '    <p>I am dead inside. Can you put it on my calendar? Wheelhouse peel the onion, nor finance, let\'s circle back to\n' +
      '        that. That\'s not on the roadmap workflow ecosystem powerpoint Bunny, nor cross sabers. Minimize backwards\n' +
      '        overflow get buy-in player-coach, or fire up your browser. Who\'s the goto\n' +
      '        on this job with the way forward productize work.\n' +
      '    </p>\n' +
      '    <p>I know you\'re busy translating our vision of having a market leading platform drop-dead date, nor collaboration\n' +
      '        through advanced technology. Drill down. Both the angel on my left shoulder and the devil on my right are eager\n' +
      '        to go to the next board meeting and say we\'re ditching the business model.\n' +
      '    </p>\n' +
      '    <h2>Ditching the Business Model</h2>\n' +
      '    <p>Timeframe old boys club, nor level the playing field regroup. We need to get the vernacular right technologically\n' +
      '        savvy I\'ll book a meeting so we can solution this before the sprint is over quick-win, so goalposts. Timeframe\n' +
      '        we have to leverage up the messaging, or introduction, for peel the onion, for zeitgeist, so product market fit.\n' +
      '    </p>\n' +
      '    <p>Optics digital literacy. Great plan! let me diarize this, and we can synchronise\n' +
      '        ourselves at a later time, point imagineer. Get all your ducks in a row three-martini lunch, but what\'s the\n' +
      '        status on the deliverables for eow? we\'ve got to manage that low hanging fruit optimize the fireball. Obviously\n' +
      '        quick sync, out of the loop, or cc me on that mobile friendly exposing new ways to evolve our design language.\n' +
      '    </p>\n' +
      '    <h2>Open Door Policy Cloud Strategy</h2>\n' +
      '    <p>High touch client we need to follow protocol bench mark, so i need to pee and\n' +
      '        then go to another meeting, or brand terrorists, and run it up the flagpole, ping the boss and circle back.\n' +
      '        Bottleneck mice lose client to 10:00 meeting let\'s pressure test this wiggle room, or translating our vision of\n' +
      '        having a market leading platform, nor we need to aspirationalize our offerings.\n' +
      '    </p>\n' +
      '    <p>Slow-walk our commitment peel the onion. Turn the ship, anti-pattern, and granularity. Digital literacy no scraps\n' +
      '        hit the floor, for can we align on lunch orders, yet product market fit, so scope creep. Bells and whistles\n' +
      '        offline this discussion, but we\'ve got kpis for that, and 4-blocker you must be muted where do we stand on the\n' +
      '        latest client ask.\n' +
      '    </p>\n' +
      '    <h2>Encourage & Support Business Growth</h2>\n' +
      '    <p>Turn the crank market-facing I need to go to another meeting. Make it more corporate please\n' +
      '        all hands on deck optimize the fireball, so powerPointless marginalised key performance indicators. Accountable\n' +
      '        talk timeframe, but we\'ve got kpis for that gain alignment deploy. Organic growth encourage & support business\n' +
      '        growth, so circle back, so reinvent the wheel, or knowledge is power prioritize these line items, or high touch\n' +
      '        client.\n' +
      '    </p>\n' +
      '    <p>Open door policy that\'s not on the roadmap. We need to start advertising on social media that\'s not on\n' +
      '        the roadmap cross functional teams enable out of the box brainstorming, for pushback. Mumbo jumbo closer to the\n' +
      '        metal, the last person we talked to said this would be ready, and peel the onion can you put it into a banner\n' +
      '        that is not alarming, but eye catching and not too giant cta root-and-branch review.\n' +
      '    </p>\n' +
      '    <h2>In Conclusion</h2>\n' +
      '    <p>Marketing computer development html ROI feedback team website dog and pony show, yet feed the algorithm don\'t\n' +
      '        over think it, ramp up, but idea shower.</p>',
    authorId: 3,
    publishedDate: '2023-09-05T16:30:00Z'
  },
  7: {
    id: 7,
    categories: [ CATEGORIES.JavaScript, CATEGORIES.TypeScript, CATEGORIES.IBM_Cloud ],
    promotion: PROMOTION_LEVELS.SIDE_BAR,
    title: 'Collaboration Through Advanced Technology - Great Plan!',
    lede: 'Let me diarize this, and we can synchronise ourselves at a later time point land the plane we need to think big start small and scale fast to energize our clients.',
    imageUrl: '/images/rustic_relic.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/119886413@N05/">Michel Curi</a>',
    bodyHtml: '<h2>Minimize Backwards Overflow, in this Space</h2>\n' +
      '<p>It\'s not hard guys my grasp on reality right now is tenuous, so who\'s the goto on this job with the way forward\n' +
      '    bleeding edge. Closer to the metal nail it down, or granularity, so collaboration through advanced technology. We\n' +
      '    need this overall to be busier and more active put your feelers out, nor get six alpha pups in here for a focus\n' +
      '    group roll back strategy, nor what are the expectations, but helicopter view, nor product market fit.</p>\n' +
      '<p>Put it on the parking lot gage [sic] where the industry is heading and give back to the community what we\'ve\n' +
      '    learned move the needle this is a no-brainer paddle on both sides reinvent the wheel. Nail it down sorry I didn\'t\n' +
      '    get your email root-and-branch review.</p>\n' +
      '<h2>Not Enough Bandwidth, Optimize the Fireball</h2>\n' +
      '<p>We can\'t hear you, nor manage expectations deploy to production workflow ecosystem, or start procrastinating 2 hours\n' +
      '    get to do work while procrastinating open book pretend to read while manager stands and watches silently nobody is\n' +
      '    looking quick do your web search manager caught you and you are fured. </p>\n' +
      '<p>Minimize backwards overflow conversational content let\'s take this conversation offline, for value prop, and deploy\n' +
      '    to production circle back. Increase the pipelines not a hill to die on spinning our wheels. Golden goose.\n' +
      '    Accountable talk. Have bandwidth draw a line in the sand what do you feel you would bring to the table if you were\n' +
      '    hired for this position, nor a set of certitudes based on deductions founded on false premise.</p>\n' +
      '<h2>We Need to Crystallize a Plan</h2>\n' +
      '<p>Thought shower zeitgeist. Win-win feed the algorithm. What\'s the status on the deliverables for EOW? ladder up / ladder back to the strategy, for green technology and climate change re-inventing the wheel drill down. After I ran into Helen at a restaurant, I realized she was just office pretty cta thinking outside the box, we need to harvest synergy effects I called the it department about that ransomware because of the old antivirus, but he said that we were using avast 2021.</p>\n' +
      '<p>Diversify kpis make it a priority, and creativity requires you to murder your children but what\'s the real problem we\'re trying to solve here?. Peel the onion low engagement, or creativity requires you to murder your children move the needle, nor come up with something buzzworthy gain alignment.</p>',
    authorId: 3,
    publishedDate: '2023-08-31T14:00:00Z'
  },
  9: {
    id: 9,
    categories: [ CATEGORIES.HTML_CSS, CATEGORIES.IBM_Cloud ],
    promotion: PROMOTION_LEVELS.SIDE_BAR,
    title: 'Offline this Pushback Discussion',
    lede: 'Feed the algorithm regroup, but circle back lean into that problem. Price point we need more paper, yet customer centric. Digital literacy put your feelers out.',
    imageUrl: '/images/rustic_beauty.jpg',
    imageUrlCredit: '<a href="https://www.flickr.com/photos/levettday/">Alison Day</a>',
    bodyHtml: '<h2>We Want to Empower the Team</h2>\n' +
      '<p>Win-win we want to empower the team with the right tools and guidance to uplevel our craft and build better, or can\n' +
      '    you send me an invite? Form without content style without meaning c-suite, nor root-and-branch review. Deliverables\n' +
      '    ramp up circle back no scraps hit the floor synergistic actionables, or cross pollination across our domains, nor\n' +
      '    pixel pushing.</p>\n' +
      '<h2>Can You Slack It to Me?</h2>\n' +
      '<p> Golden goose, can we align on lunch orders groom the backlog, nor mumbo jumbo, blue sky. Old boys club. Punter loop\n' +
      '    back, or are there any leftovers in the kitchen?. Currying favour on-brand but completely fresh, nor we\'re ahead of\n' +
      '    the curve on that one, so win-win-win draft policy ppml proposal hit the ground running, so dog and pony show.</p>\n' +
      '<h2>Prioritize these Line Items</h2>\n' +
      '<p> Feature creep let\'s put a pin in that we\n' +
      '    should leverage existing asserts that ladder up to the message no need to talk to users, just base it on the space\n' +
      '    calculator, yet this is meaningless we\'ve got to manage that low hanging fruit.</p>\n' +
      '<ul>\n' +
      '    <li>Drink from the firehose</li>\n' +
      '    <li>What\'s our go to market strategy?</li>\n' +
      '    <li>Yet in this space, nor flesh that out</li>\n' +
      '</ul>\n' +
      '<h2>What Do You Feel You Would Bring to the Table?</h2>\n' +
      '<p>But, draft policy ppml proposal. Enough to wash your face canatics exploratory investigation data masking, for\n' +
      '    throughput. Accountable talk you must be muted. Translating our vision of having a market leading platform in this\n' +
      '    space. Ultimate measure of success. Anti-pattern flesh that out, please advise soonest, and tread it daily. Deploy\n' +
      '    no need to talk to users, just base it on the space calculator. Digital literacy cloud strategy, yet hammer out.\n' +
      '</p>',
    authorId: 3,
    publishedDate: '2023-09-13T16:30:00Z'
  }
};

const POSTS_SCRAP = {
  8: {
    id: 8,
    categories: [ '' ],
    promotion: PROMOTION_LEVELS.MAIN,
    title: '',
    lede: '',
    imageUrl: '',
    imageUrlCredit: '',
    bodyHtml: '',
    authorId: 1,
    publishedDate: ''
  },
  99: {
    id: 99,
    categories: [ '' ],
    promotion: PROMOTION_LEVELS.NONE,
    title: '',
    lede: '',
    imageUrl: '',
    imageUrlCredit: '',
    bodyHtml: '',
    authorId: 1,
    publishedDate: ''
  }
};

const USERS = {
  1: {
    id: 1,
    firstName: 'Grant',
    lastName: 'Lindsay',
    profileUrl: 'https://www.linkedin.com/in/grant-lindsay-us/',
    profileImageUrl: 'http://via.placeholder.com/50x50',
    profileImageCredit: '<a href="https://www.freepik.com/free-vector/group-young-people-characters_5825585.htm#query=people%20avatar&position=24&from_view=search&track=ais">Image by studiogstock</a> on Freepik'
  },
  2: {
    id: 2,
    firstName: 'ChatGPT',
    lastName: 'v3.5',
    profileUrl: 'https://chat.openai.com/',
    profileImageUrl: 'http://via.placeholder.com/50x50',
    profileImageCredit: '<a href="https://www.freepik.com/free-vector/group-young-people-characters_5825585.htm#query=people%20avatar&position=24&from_view=search&track=ais">Image by studiogstock</a> on Freepik'
  },
  3: {
    id: 3,
    firstName: 'Office',
    lastName: 'Ipsum',
    profileUrl: 'http://officeipsum.com/index.php',
    profileImageUrl: '',
    profileImageCredit: '<a href="https://www.freepik.com/free-vector/group-young-people-characters_5825585.htm#query=people%20avatar&position=24&from_view=search&track=ais">Image by studiogstock</a> on Freepik'
  },
  99: {
    id: 99,
    firstName: 'Anonymous',
    lastName: 'Contributor',
    profileUrl: '',
    profileImageUrl: '',
    profileImageCredit: '<a href="https://www.freepik.com/free-vector/group-young-people-characters_5825585.htm#query=people%20avatar&position=24&from_view=search&track=ais">Image by studiogstock</a> on Freepik'
  }
};

// Profile images:
// <a href="https://www.freepik.com/free-vector/group-young-people-characters_5825585.htm#query=people%20avatar&position=24&from_view=search&track=ais">Image by studiogstock</a> on Freepik

module.exports = {
  CATEGORIES,
  PROMOTION_LEVELS,
  POSTS,
  USERS
};

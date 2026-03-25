import Image from "next/image";
import { TestimonialRow } from "@/components/testimonial-row";
import { AnimatedDivider } from "@/components/animated-divider";

const featured = {
  quote:
    "I know this seems too good to be true but I know it to be true. Plainly put, Richard is the unicorn of men. In all of the close to 20 years I have known Richard and sought his counsel, never once has he ever crossed a boundary. I feel it is important to state this fact first because as women, I think it is important to know this fact upfront. Not to mention, it is not an exaggeration to say that he is the most acutely self-aware male I have ever met. He is able to examine situations in a multidimensional way and then put forth a plan of action that always hits the target. He gently makes you aware of your own blind spots and then reinforces your gifts, gifts you might not have realized you had. Gifts that have been laying dormant for a long time because as women, we are mostly afraid of our own power. There have been many times his belief in me and my abilities has helped buoy me up and out of a dark swamp. He is like the deus ex machina - the person that suddenly shows up out of nowhere and helps you with exactly what you need. There is no other male I have ever encountered in this field or in life that would be better suited to help women navigate through the storms of their own self-discovery, albeit a scary but exciting adventure indeed.",
  name: "Chriselda P.",
  role: "Sex & Judgment, Photographer, Educator, Activist",
  context: "New Orleans, LA / Austin, TX",
  duration: "2005-present",
};

const featuredPreview =
  featured.quote.split(" ").slice(0, 85).join(" ") + "…";

const testimonials: Array<{ quote: string; name: string; role: string; context: string; duration: string }> = [
  {
    quote:
      "I started working with Richard about 6 years ago. I quickly discovered that he really has a talent for helping with relationships and particularly romantic relationships. He provides trust and safety. Over time I came to dig in with him around all of my life and I no longer felt any need to work with a traditional therapist. Richard is not invested in labels but rather showing up where you are and allowing you to feel fully seen. There is nothing I couldn’t share with him and I pretty much have shared everything. He has helped me with my business from time to time but mostly we’ve focused on my family background and my romantic life. He never projects himself and he has surprised me more than once with knowing my heart and not joining the chorus of my friends and allowing me to make mistakes. He is always there. He really understands dynamics between people. He has held my hand, given me esteem baths, listened at all hours and I am grateful for his consistent and loving support and belief in me and my happiness.",
    name: "Valerie J.",
    role: "Small Business owner",
    context: "Mill Valley, California",
    duration: "2017-present",
  },
  {
    quote:
      "I met Richard a few years ago just before covid. I was grieving the loss of a family member, had recently moved back to Fairfax and felt very alone. It had been a while since anyone was “on my side.” Being a Counseling Psychology graduate of CIIS I had had a lot of experience with therapy on both the receiving and the giving end. I knew I was not looking for a traditional “therapist” but more of a mentor; someone who could work more intimately than someone confined by the patient therapist box. Richard has provided me with listening and understanding in an always non judgemental fashion which is very important to me. Unfortunately, in the midst of helping me get back on track with long term goals my life has been turned upside down by a horrific car accident and a pregnancy. Through all of this Richard has proved to be committed to my long term well being. He has and continues to offer me support through the hardest time of my life. He continues to check in with me offering help with a variety of practical stuff and to talk when I have really needed it. Richard is definitely not a fair weather person. He genuinely cares about people and is not in it just for the money or some ego trip. Richard is a true advocate, mentor and like a friend in many ways through and through. I highly recommend Richard to anyone looking for a genuine support system or who feels misunderstood or alone.",
    name: "Hilary R.",
    role: "CIIS-grad, new-Mom",
    context: "Fairfax/Petaluma, CA",
    duration: "2019-present",
  },
  {
    quote:
      "Richard is such a gem in this world. His ability to attune with his clients through deep listening, reflection, and guidance is remarkable. Richard has such a great skill at meeting people where they are at. He traverses different terrains of support, which allows him to meet the whole person rather than just a facet of their being. Career support, tangible next steps, relational guidance, and just good old companionship to help people navigate the river of life. I have been working with Richard on and off for years now and each time we connect, I feel really listened to and cared for. He widens the lens of vision, helps me to see beyond the current season of my life and into the greater arc of my biggest dreams. And for that, I am grateful. Highly recommend working with him if you are looking for someone with humility, skill, and authentic guidance.",
    name: "Madeleine Sophia G.",
    role: "Craniosacral Therapist, Herbalist",
    context: "Houston, Texas",
    duration: "2018-present",
  },
  {
    quote:
      "Richard is a gifted listener, finely attuned to one’s special problematic and able to rapidly assess one’s emotional terrain and its particular hotspots. He has a unique ability to imagine an array of possible outcomes and future possibilities in exquisite detail, which aid to broaden one’s perspective and illuminate one’s path. He will not just assist you in broadening your perspective of what is possible but he can also delineate a systematic path to get you there. He is deeply empathic and non-judgmental, and capable of holding a supportive space. I highly recommend working with Richard. You will find in him a highly intuitive and resourceful coach who will be able to help you navigate relationship or career obstacles and lead you through a process of inquiry to possible resolutions that had not been heretofore in your field of vision.",
    name: "Sonia P. Abastado",
    role: "Yoga Therapist, MA Berkeley",
    context: "Buenos Aires, Argentina",
    duration: "2013-present",
  },
  {
    quote:
      "I have had the ongoing opportunity and absolute honor of working with Richard for the past 10 months on both business projects and personal development topics. Richard has such an intuitive way of feeling into any given situation and picking up on things in ways I had not previously been able to see myself. He is able to observe a situation and ask just the right questions to guide you into forward-thinking momentum or more deeply reflect upon and tease apart pivotal issues that sometimes I am not even aware of myself. His talent for observation and gentle, yet effective communication are an absolute gift that provide opportunities for me to go deeper in my own journey, as well as trust more in all sides of our working relationship. If you are in a place in your life where you are ready to take on those big dreams or to dive into deep, personal transformation, his multifaceted talents are the exact support system for these pivotal circumstances. His highly attuned intuition, genuine curiosity and logistical approaches are such a blessing and I am grateful to have him in my life.",
    name: "Krysta C.",
    role: "Owner Symmetry Entertainment & Design, Symmetry Art Artistic Director",
    context: "Santa Rosa, CA",
    duration: "2022",
  },
  {
    quote:
      "Richard is one of the best coaches I have ever worked with. He is thorough and comprehensive in his treatment of difficult situations. Every time I think I am coming at him with too many layers of challenge, he delivers creative solutions that knock my doubts out of the ballpark. Not only has Richard helped me come up with rapid action plans for my salon and generating more return clientele and interactive events, he helps me create solutions and possibilities addressing difficult family dynamics, which is transforming my relationship with my son. Richard is so resourceful and creative, compassionate and action oriented. If you are looking for support from a coach who has a great capacity for being ingenious with difficult situations, you have found your match. I also really enjoy how easeful it is to discuss anything, and I feel like no detail is unheard or not addressed. All my praises to Richard.",
    name: "Lorelei Witte",
    role: "Vitaliti Salon Owner, Vitaliti Wellness Coach",
    context: "Fairfax, California",
    duration: "2017-current",
  },
  {
    quote:
      "When I met Richard in the summer of 2023, I was amidst radical survival challenges and had no one to talk to about the overwhelming circumstances. There was no plan B, and no one who would even say that they needed me to survive and get through. In situations like this, it is crucial to have someone to communicate with safely. The opportunity to have someone to check in with and ask for his perspective had an immense impact on me. In our communication, Richard always tries to encourage my sense of basic life security by suggesting practical crisis-management options. He was and has remained here for me when needed, always willing to provide non-judgmental feedback and validation. Richard’s support helped me make sense of my grief and provides continued guidance on moving forward.",
    name: "Anastasia C.",
    role: "Russian PhD student, Urbana-Champagne",
    context: "Urbana, Ill/Los Angeles",
    duration: "2023-present",
  },
  {
    quote:
      "Being able to tell you my story allowed me to see my life from a different perspective. For the first time, I felt that my journey so far was not a waste of time. Your kind words and acknowledgment were a sense of validation that I was not lost after all. Most importantly, your insights about my understanding of what it means to make it in life were invaluable, and a piece of wisdom I had never heard before. You helped me give myself permission to take some time and rediscover the new me, which I learned, to my surprise, is actually the old me from my early 20s before I ventured out on the path I have been on. You are a great listener and I so appreciate your poignant reflections.",
    name: "Alice W.",
    role: "Tech B2B/B2C Director, Writer",
    context: "Corte Madera, CA",
    duration: "2024-present",
  },
  {
    quote:
      "Richard was born to be a coach. He has an intelligence that is able to understand issues from all walks of life and compassionately process and offer solutions that work. He is an advocate for people to bring their natural gifts to the world, and can imagine it even bigger. Richard is humble, empathic and extremely smart. I have known Richard for 12 years, and in that time have seen him support and better the lives of many people. I would absolutely recommend Richard as your coach.",
    name: "Sarah Mangion",
    role: "Psychotherapist, MA CIIS",
    context: "Fairfax, California",
    duration: "2006-present",
  },
  {
    quote:
      "Richard has been helping me navigate my life since the spring of 2006. He has helped me through marriage, divorce, remarriage, relocation and business development. I first approached Richard to help me with my resume. Through talking further he helped me discover that my true passion lay in being an entrepreneur and wanting to open my own business. He very patiently walked me through the details of what that would entail. At that time, I was clear that I was not ready for that undertaking. However, 6 years later, with his encouragement and coaching, I went on to open my business, which has been a huge success. My business employs 20 people and generates $600,000+ in annual revenue. Coaching with Richard has been invaluable to me. He helped me find and strengthen my confidence and my ability to create the life and dream I always envisioned for myself.",
    name: "Sarah Duffy",
    role: "Owner, Buff Beauty Bar",
    context: "New Orleans, Louisiana",
    duration: "2006-present",
  },
  {
    quote:
      "I have worked with Richard for over 20+ years and have never once doubted his counsel. He is brilliant, compassionate, intuitive and awake. He has helped me both with my personal life and relationships as well as given me wonderful input on my creative life and aspirations. I feel grateful that I have had the support of such a caring and intelligent person. Anyone would be lucky to work with him.",
    name: "Peter Gizzi",
    role: "Poet, Professor U. Mass Amherst",
    context: "Northampton Region, Massachusetts",
    duration: "1990s-present",
  },
  {
    quote:
      "It would be difficult for me to remember a time when I did not know Richard or was not able to benefit from his sage advice regarding possibly every aspect of my life: including navigating the complicated dynamics of the microcosm of orchestral politics, dealing with the aftermath of my personal family drama, or finding the potential within myself to be how I want to be with the person I want to be with. The medium through which we have communicated has changed over the years from in-person to phone to video-chat. However, irrespective of the medium or the passage of time, I have been grateful for his ongoing insight and guidance in profound matters both personal and professional.",
    name: "John Stokes",
    role: "Musician, Professional Violoncellist, Founding member of Cuarteto Breton and Principal Cello ORCAM",
    context: "Madrid, Spain",
    duration: "1990s-present",
  },
  {
    quote:
      "Richard came into my life via a good friend and the experience I have with him could not be more positive. His guidance and care continue to help me navigate challenges in innumerable ways. The way his brain works is astonishing to me and a perfect complement for my own limitations. Richard is kind, understanding, open, practical, giving and a systems genius. I have enjoyed getting to know him and sharing my challenges and wins with him. I very much look forward to more as life is change.",
    name: "Harper A.",
    role: "Cultural Creative",
    context: "Los Angeles, CA",
    duration: "2018-present",
  },
  {
    quote:
      "Richard is the type of person and coach that listens to what you need and helps you think differently about how to approach those needs in a way that allows you to consider possibilities without the anxiety that comes with newness. This is essential for creatives, because we are always dealing with new situations in entrepreneurship that can make, at least me, get bogged down in the I do not wanna-ness of looking at new things. It was a pleasure to work with him.",
    name: "Alison C.",
    role: "Jazz Vocalist, Jazz Educator",
    context: "Washington, D.C.",
    duration: "2018-2020",
  },
  {
    quote:
      "Richard’s warmth and genuineness put me at ease. With his care, sincerity and deep listening, he excels in offering perfect bits of reflective wisdom that ring true at the perfect time, providing pivotal nuggets of insight that illuminate natural directive in my life. I am so grateful to know you Richard, and grateful to have your caring and guidance in my life.",
    name: "Jennaia Greene",
    role: "Business owner, Wellness practitioner, Community space organizer",
    context: "Fairfax, California",
    duration: "2017-current",
  },
  {
    quote:
      "Richard is a knowledge base. You can just ramble, he listens. He has the ability to pull out the cool things in you that you never realized were there about yourself. He shines a flashlight on your life and helps you see your self-worth. Then he helps you point in a direction and says go. It is not work for Richard to do what he does. He is like a key finder. Give him your honest time and tales, open up and show him your hopes and dreams, and he will find you the map you should follow. He will dream with you and help you find a new reality.",
    name: "Erik M.",
    role: "Creative Director",
    context: "Asheville, North Carolina",
    duration: "Not provided",
  },
  {
    quote:
      "I have worked alongside Richard. He is a great listener and good at getting to the heart of issues and deconstructing them for action.",
    name: "Jordan Shlain",
    role: "MD, CEO",
    context: "Ross, California",
    duration: "2000-2003",
  },
  {
    quote:
      "Richard has been a key thought partner in many capacities over the years. Whether providing counsel on building a non-profit board, developing strategy around fund development to ensure fiscal responsibility, issues around branding or clarifying a mission, or sharing insights on complex family and dating dynamics, his breadth of knowledge and targeted consultation has been invaluable to me at every turn. He is a fantastic listener and really has a way of making one feel understood. He is a very sophisticated thinker with a big heart.",
    name: "Herve Ernest",
    role: "Non-profit Founder, Marketing Director",
    context: "San Francisco, California",
    duration: "1990s-present",
  },
  {
    quote:
      "Richard is very gifted at quickly understanding the essence of a challenging situation and providing sage advice to navigate through the challenge in a grounded, strategic, and intelligent manner. I highly recommend him as a coach.",
    name: "Gaella Grace",
    role: "Writer, Author, Editor",
    context: "Fairfax, California",
    duration: "2017-current",
  },
  {
    quote:
      "Richard is a hardworking ally whose commitment to his clients is easy to see in his enthusiastic and consistent support. When Richard takes on clients he is with them all the way, listening with his heart and mind to check in with individuals as whole people. His flexible and holistic philosophy helped me feel fully seen by him, which I experienced as safe and encouraging. Richard is a good listener whose thoughtful prompts and accurate mirroring showed me where I was, helped me decide where I wanted to go, and guided me in developing realistic action steps to get there. The gentle reinforcement of being accountable to Richard as an outside ally motivated me to dig deeper and work smarter to accomplish my big dreams.",
    name: "June McCrory",
    role: "Singer-songwriter",
    context: "Point Reyes Station, California",
    duration: "2017-present",
  },
  {
    quote:
      "I had known Richard through community for over 6 years. He offered support to me when I led an LGBTQIA+ event at a venue he was a regular at some years ago, and we remained in dialog about a variety of professional and personal matters over time. Before engaging with Richard formally this past summer, I was feeling emotionally overwhelmed by new challenges as a founder and entrepreneur. Upleveling and scaling the work I do in the world is important to me, and it also comes with new pressure. I was feeling alone in my experience. Richard supported me by deeply listening to what I was going through, helping me see where I was not holding boundaries, and working alongside me as a teammate with actions that not only protected me as a founder but also gave me the strength to face a difficult situation. That support gave me the confidence and strength to step into a bigger version of myself. These were important mindset breakthroughs for going to the next level. Richard’s support was the emotional and mindset shift I needed to get through a ring of fire. His experience speaks volumes, his consulting chops were invaluable, and his passion for supporting young women entrepreneurs like myself is genuinely felt.",
    name: "Cindy M.",
    role: "Digital Marketer, M&A specialist, social-activist",
    context: "Santa Cruz/Bay Area, CA",
    duration: "2023-present",
  },
  {
    quote:
      "I always walk out from our sessions in such a positive space. Richard is truly a regenerative source. I had known Richard for many years, going back to when we both lived in North Beach and he was a patron at our family bakery. More recently we began running into each other locally in our small town. I was having some work-related issues and took it as a sign when I literally saw his flyer for Life is Change. We have been meeting regularly since summer 2023 and he has helped me immensely. As we reviewed my original work situation, he diligently helped me with that and also helped me come up with other solutions that may allow me to pursue new, exciting directions and passion projects. With his guidance and encouragement, I always walk out of our sessions in a positive space. If you are having any type of problem or issue, do not sleep on Life is Change. Richard helps with proactive solutions. He is knowledgeable in so many areas, not only work-related, and integrates his acumen into every part of the issue at hand. Life can be hard to navigate on your own. I am grateful to have someone like Richard in my corner to help with the bumps.",
    name: "Silvia S.",
    role: "Set Designer Catalog Shoots, Séance Jewelry",
    context: "Fairfax, CA",
    duration: "2023-present",
  },
  {
    quote:
      "I have been receiving coaching from Richard around various issues in my life over the past fourteen years. His wise counsel and out-of-the-box thinking helped me discern my vocational calling and, on a few different occasions, determine the next right move for myself professionally and geographically. His coaching also helped me stay motivated and focused throughout the grueling process of writing a dissertation. Richard is a master at the art of living and a loyal ally whose commitment and dedication to the people he coaches is a rare gift in today’s world.",
    name: "Karin A.",
    role: "Licensed Clinical Psychologist, PhD",
    context: "Washington, DC",
    duration: "2004-present",
  },
  {
    quote:
      "I cannot say enough about how important Richard has been in helping me navigate life and career challenges. His guidance and support have been invaluable, and I am grateful for the perspicacity, empathy, and support he brings to our sessions. Richard is intuitive, bright, and compassionate, with a unique insight into the big picture. I had been feeling stuck, juggling a lot of pieces and questions about where I wanted to go next in my life and how to do that. At our initial meeting he immediately provided practical and effective advice that helped me move from analysis and reflection to action. Importantly, his deep understanding of the artistic process and creative spirit, combined with his background in the entrepreneurial startup world, resonated with me. With his help I was able to discern, set, and execute actionable tasks and goals in the creative and professional realm. I have come to count on Richard’s counsel and support, and I am thrilled that he has helped me shape a clear vision and tangible next steps. I am excited for the future.",
    name: "David V.",
    role: "Start-up Founder, Senior Manager Google/Facebook, AI Audio & Speech",
    context: "Fairfax, California",
    duration: "2022-present",
  },
  {
    quote:
      "Richard has helped me for over two years during a time of major transition. On several occasions, I asked for guidance and support not only with business ideas, but also in my personal relationships. He is open-hearted, present, understands human behavior deeply, and listens earnestly. He listens to me beyond what I even realize I am sharing, which always blows my mind. In each interaction, he sees the big picture and brings me out of the hollows of limited thought into an open space of clarity. Richard offers a beautiful balance of wisdom and practicality. Now that I am writing and publishing my ninth book, I decided to hire Richard to assist me with marketing ideas and streamlining the process. He has already offered pointers I completely overlooked. It was a common-sense and honest approach to engaging my audience, and immediately I knew he was onto something. My book has taken on a whole new theme that I would have never thought about, adding depth to my story. I am excited to move forward with Richard’s services and feel like I am finally going to break past barriers in my career that have held me back. Every encounter with Richard leaves me feeling blessed and positive. I highly recommend him for any kind of coaching you may need. There is an authentic depth to him that you do not find very often in a coach, or in a human being for that matter.",
    name: "J. L. Forbes",
    role: "Published Author and Professional Tarot Card Reader",
    context: "Lagunitas, California",
    duration: "2015-present",
  },
  {
    quote:
      "Richard has been a longtime supporter and ally of mine dating back to 2006. Though I do a variety of coaching myself, I have brought many of my own difficulties to him for reflection and insight. I have always appreciated how caring, concerned, and consistently helpful he is. He shoots from the hip, listens deeply, asks depth-provoking questions, and offers practical reflections and advice when appropriate. He blends all of this with humor and a palpable care for my well-being and growth. I am deeply grateful for his ongoing support and always look forward to our conversations and the way he continually pushes me to expand. I highly recommend seeking counsel with Richard. He is truly one of a kind.",
    name: "Claire Rumore",
    role: "Coach & Counselor, CEO Your Sensual Wisdom",
    context: "Birmingham, Alabama",
    duration: "2006-present",
  },
  {
    quote:
      "My time with Richard has been very supportive during periods of transition and large decisions. In our discussions he has highlighted my strengths, helped me see the larger picture, and explore all my options. Richard has a wide range of expertise and always creates a sense of being seen while holding a safe container. He has been instrumental in my getting into a PhD program and working through emotional terrain.",
    name: "Melinda B.",
    role: "PhD candidate, Pastor, Multi-disciplinary story-based creative, mother",
    context: "Petaluma, California",
    duration: "2018-2020",
  },
  {
    quote:
      "Richard’s true gift is his inspiring wisdom that connects people to their true selves. He helped me uncover complex parts of myself and gave me a lot to work with as I moved forward. I highly recommend working with Richard.",
    name: "Ozlem P. Bishop",
    role: "Scientist, Financial Technologist, Strategic Advisor for Business Development, Partnerships & Alliances",
    context: "Ross, California",
    duration: "2017-2018",
  },
  {
    quote:
      "I have received counseling and coaching from Richard since I was an undergraduate at UC Berkeley over 10 years ago. He is a quick study and goal-oriented when you do not have the focus or strength to be. He has advised me on everything from university and grad school application details to legal arbitration, financial planning, and navigating my painful divorce. He is a great listener and provides a safe space to share intimate details. His counseling has been especially valuable with romantic relationships and difficult family dynamics. He is inherently empathetic and has a natural predisposition to problem-solve. He provides the right balance between listening, validating, and understanding the heart of matters while also gently suggesting ways to get unstuck and move beyond old patterns. I have continued to work with him after moving to NYC in 2009, and post-divorce he remains a primary emotional support and safe space. I am also excited to get his advice and expertise as I embark on my own business venture.",
    name: "Danielle Schmitz",
    role: "Free-lance Sommelier",
    context: "New York City, NY",
    duration: "2005-present",
  },
  {
    quote:
      "Richard’s talent for listening, quickly assessing needs, reading my inner landscape, and offering sound support and guidance is truly phenomenal. He has a calming presence, a no-nonsense attitude, and an ability to see my perspective while offering his own with kindness. His acknowledgment of my experience was a balm to me in a tumultuous time of growth.",
    name: "Kat Steele",
    role: "Community Builder, Social Activist, Nature Activist",
    context: "Fairfax, CA",
    duration: "2018-present",
  },
  {
    quote:
      "Richard is a master listener and non-judgmental in his listening. He is very open and offers great ideas. He has helped me greatly to relax more in the process of finding things out. Richard has a worldly energy about him with a vast array of experiences he has learned from. Richard is a wonderful human being. I am lucky to have met him and to have the opportunity to receive coaching from him.",
    name: "Daniel Ross",
    role: "Musician, Body-Worker (creator of Ross Technique for energy release)",
    context: "Lagunitas, California",
    duration: "2018-current",
  },
  {
    quote:
      "Working with Richard has helped me collect and organize my thought process while also putting ideas into action. It is like unlocking potential that has always been there, in a positive and grounded way. I am grateful for the opportunity to work with Richard because the experience has been inspiring and beneficial. He has a thorough understanding that life is malleable, flexible, and that visions can change. When one falls off track, Richard’s approach to re-steering the course is compassionate but effective. If someone wants to change a career, build a business, or build upon creative endeavors and goals, I highly recommend Richard.",
    name: "Jay Aruta",
    role: "General Contractor, Volunteer Children’s Nature Guide",
    context: "Lagunitas, California",
    duration: "2017-current",
  },
  {
    quote:
      "I was referred to Richard by a client he has consulted for over the years. He has been indispensable both as a business consultant and as a personal coach, and I can honestly say that my business would not be where it is right now without his immeasurable help. He has assisted me every step of the way in the sometimes daunting process of launching a new community center. Richard is a very strategic thinker and combines practicality with a comprehensive understanding of the elements that help a new business succeed. He has also provided me with personal guidance, offering support and insight as I navigate team-building dynamics, stepping into a leadership role, and overcoming my own internal limits to success. Richard is patient, thorough, generous, skillful and smart, and I would recommend him as a life coach and consultant to anyone trying to start or grow a business.",
    name: "Kym Kuzmic",
    role: "Teacher, Body-Worker, Founder of the Hive Marin community center",
    context: "San Geronimo, California",
    duration: "2018-current",
  },
  {
    quote:
      "I first met Richard about 10 or more years ago. At the time I was trying to launch a wine, food and lifestyle brand/business. He provided a great deal of expertise and gave me many insights. We remained in contact over the years, and in time I realized he could help me with other parts of my life. I have sought him out as an ally and supporter through issues including a divorce, a difficult health journey, and reclaiming my life thereafter. I have also brought him in recently to help with my family’s interior design business, PRDP, here in the UK. I really appreciate having Richard to turn to for guidance as well as the practical resources he offers regarding both my professional and personal life.",
    name: "Lucinda Parker Roberts",
    role: "Author, Blogger, Entrepreneur, Transplant Survivor",
    context: "Surrey, UK",
    duration: "2000s-present",
  },
  {
    quote:
      "I imagine I am not the easiest person to coach and counsel. I am aware of my own resistance, and I need someone who can hold that without feeling affronted or needing to label it as a character flaw. My need, desire and ability, or lack thereof, to change deeply seeded core beliefs and patterning is handled through other channels and is not what I come to address in this process. My BS detector is set to high. I am more receptive to subtle persistence rather than big pushes, requiring time to receive and absorb input from a place of trust. Richard’s approach allows an organic relationship to develop. He possesses a sincere appreciation and understanding of creative process and personality. A community-minded networker and dream builder, he is also someone with many suggestions who has shown up to review proposals and applications and walk me through various processes as they present themselves.",
    name: "Katherine D.",
    role: "Visual Artist, Maker, cancer survivor",
    context: "Key West, Florida",
    duration: "2005-present",
  },
  {
    quote:
      "I have known Richard for many years, but I sought him out in 2014 for counseling as a 12-year relationship abruptly came to an end and I was very out of sorts. Richard is a great listener and has a special feel for the complexities of relationships and the dynamics that surround them. He provided patience, empathy and support as I traversed difficult emotional terrain, helping me unpack it all and not allowing me to slip into despair. His insights helped me see my inner story more clearly and, over time, the self-stories he reflected back resonated with me, grounded me, and helped me see my way forward. I relocated to Thailand and continue to check in over Skype with Richard and receive support on a variety of key life topics. I endorse Richard wholeheartedly.",
    name: "Eric Schurig",
    role: "Sound Designer/Pro Tools Audio Engineer",
    context: "Bangkok, Thailand",
    duration: "2014-present",
  },
  {
    quote:
      "Working with Richard is like talking to a best friend who can understand what you need better than yourself. He was able to hear my creative but very disorganized ideas for my business and help me find structure and organization with just a few simple conversations. I was surprised how easily and quickly he was able to help me understand my goals and create a plan for success. In addition, Richard offers very insightful personal advice and I have found his coaching style to be inspirational as well as practical.",
    name: "Holly B.",
    role: "Owner Mettacine, Yoga Teacher, Ceremony Leader",
    context: "Fairfax, CA",
    duration: "2018-present",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative flex h-screen min-h-[640px] w-full items-end overflow-hidden">
        <Image
          src="/woman-dancing-on-beach-with-reflection-in-wet-sand.jpg"
          alt="Person moving across reflective shoreline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-18 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Testimonials</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.06] text-white sm:text-6xl lg:text-7xl">
            What clients say about working with Richard.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
            Real words from people across creative, professional, and personal transitions.
          </p>
        </div>
      </section>

      {/* Featured testimonial — full-bleed ink */}
      <section className="w-full pb-0">
        <div className="bg-ink px-8 py-20 text-white sm:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {featured.context}
            </p>
            <blockquote className="mt-6 max-w-5xl font-display text-2xl leading-relaxed sm:text-3xl lg:text-4xl lg:leading-[1.25]">
              &ldquo;{featuredPreview}&rdquo;
            </blockquote>
            <footer className="mt-10 flex items-center gap-5">
              <div className="h-px w-10 bg-white/20" />
              <div>
                <p className="text-sm font-semibold">{featured.name}</p>
                <p className="text-xs text-white/50">{featured.role} &middot; {featured.duration}</p>
              </div>
            </footer>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/45">
              Full testimonial appears below
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials — editorial stacked list */}
      {testimonials.length > 0 && (
        <section className="w-full px-4 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {testimonials.map((item, index) => (
              <div key={item.name}>
                <AnimatedDivider index={index} />
                <TestimonialRow {...item} index={index} />
              </div>
            ))}
            <AnimatedDivider index={testimonials.length} />
          </div>
        </section>
      )}

      {/* Warm CTA band */}
      <section className="w-full pb-0">
        <div className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl fade-up flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Ready to start your own next chapter?</h2>
              <p className="mt-2 text-sm text-ink/60">
                If these stories resonate, let&rsquo;s talk about where you are and where you want to go.
              </p>
            </div>
            <a
              href="/connect"
              className="shrink-0 inline-flex items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-surface transition hover:opacity-80"
            >
              Let&rsquo;s Connect
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

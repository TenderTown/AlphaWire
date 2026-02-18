import { DIMS } from "./constants";

export const WORDS_MOST = [
  { text: "Daring", dims: { RT: 3 } }, { text: "Cautious", dims: { RT: -3 } },
  { text: "Bold", dims: { RT: 3 } }, { text: "Careful", dims: { RT: -2 } },
  { text: "Adventurous", dims: { RT: 2 } }, { text: "Protective", dims: { RT: -2 } },
  { text: "Disciplined", dims: { ED: 3 } }, { text: "Spontaneous", dims: { ED: -3 } },
  { text: "Systematic", dims: { ED: 3 } }, { text: "Flexible", dims: { ED: -1 } },
  { text: "Methodical", dims: { ED: 2 } }, { text: "Impulsive", dims: { ED: -3 } },
  { text: "Intense", dims: { EV: 3 } }, { text: "Calm", dims: { EV: -3 } },
  { text: "Passionate", dims: { EV: 2 } }, { text: "Composed", dims: { EV: -2 } },
  { text: "Reactive", dims: { EV: 3 } }, { text: "Steady", dims: { EV: -2 } },
  { text: "Independent", dims: { AA: 3 } }, { text: "Collaborative", dims: { AA: -2, SO: 2 } },
  { text: "Self-reliant", dims: { AA: 2 } }, { text: "Cooperative", dims: { AA: -2, SO: 1 } },
  { text: "Nonconformist", dims: { AA: 3 } }, { text: "Agreeable", dims: { AA: -1, SO: 1 } },
  { text: "Patient", dims: { TH: 3 } }, { text: "Restless", dims: { TH: -3 } },
  { text: "Persistent", dims: { TH: 2, CI: 1 } }, { text: "Fast-moving", dims: { TH: -2 } },
  { text: "Resolute", dims: { CI: 3 } }, { text: "Open-minded", dims: { CI: -1, AQ: 1 } },
  { text: "Stubborn", dims: { CI: 3 } }, { text: "Yielding", dims: { CI: -2 } },
  { text: "Adaptable", dims: { AQ: 3 } }, { text: "Consistent", dims: { AQ: -2 } },
  { text: "Versatile", dims: { AQ: 2 } }, { text: "Focused", dims: { AQ: -1, ED: 1 } },
  { text: "Outgoing", dims: { SO: 3 } }, { text: "Reserved", dims: { SO: -2 } },
  { text: "Sociable", dims: { SO: 3 } }, { text: "Private", dims: { SO: -3 } },
  { text: "Talkative", dims: { SO: 2 } }, { text: "Solitary", dims: { SO: -3 } },
  { text: "Tireless", dims: { TS: 3 } }, { text: "Energetic", dims: { TS: 3 } },
  { text: "Enduring", dims: { TS: 2 } }, { text: "Lethargic", dims: { TS: -3 } },
  { text: "Resilient", dims: { TS: 2, CI: 1 } }, { text: "Fragile", dims: { TS: -2 } },
  { text: "Competitive", dims: { RT: 1, CI: 1 } }, { text: "Analytical", dims: { ED: 1, AA: 1 } },
  { text: "Intuitive", dims: { ED: -1, EV: 1 } }, { text: "Practical", dims: { AQ: 1, ED: 1 } },
];

export const WORDS_LEAST = [
  { text: "Reckless", dims: { RT: -2 } }, { text: "Timid", dims: { RT: 2 } },
  { text: "Rigid", dims: { ED: -2, AQ: 2 } }, { text: "Chaotic", dims: { ED: 2 } },
  { text: "Emotional", dims: { EV: -2 } }, { text: "Detached", dims: { EV: 2 } },
  { text: "Defiant", dims: { AA: -2 } }, { text: "Conforming", dims: { AA: 2 } },
  { text: "Impatient", dims: { TH: 2 } }, { text: "Passive", dims: { TH: -1, RT: 1 } },
  { text: "Stubborn", dims: { CI: -2, AQ: 2 } }, { text: "Wishy-washy", dims: { CI: 2 } },
  { text: "Scattered", dims: { AQ: -1, ED: 2 } }, { text: "Predictable", dims: { AQ: 2 } },
  { text: "Loner", dims: { SO: 2 } }, { text: "Needy", dims: { SO: -2, AA: 1 } },
  { text: "Withdrawn", dims: { SO: 2 } }, { text: "Attention-seeking", dims: { SO: -1 } },
  { text: "Lazy", dims: { TS: 2 } }, { text: "Hyperactive", dims: { TS: -1 } },
  { text: "Exhausted", dims: { TS: 2 } }, { text: "Restless", dims: { TS: -1, TH: 1 } },
];

export const BEHAVIORAL_QS = [
  { q: "When facing a decision with an uncertain outcome, my body tends to feel:", opts: [
    { t: "Tense and constricted — uncertainty feels physically uncomfortable", p: { RT: 2 } },
    { t: "Alert but manageable — I notice it but it doesn't overwhelm me", p: { RT: 5 } },
    { t: "Energized — uncertainty creates a kind of focus in me", p: { RT: 7 } },
    { t: "Thrilled — not knowing the outcome is genuinely exciting", p: { RT: 10 } },
  ]},
  { q: "In games or sports, I've always been drawn to:", opts: [
    { t: "Games with clear rules and predictable outcomes", p: { RT: 2 } },
    { t: "Games that balance skill and chance", p: { RT: 5 } },
    { t: "High-stakes competitions where the outcome is uncertain", p: { RT: 8 } },
    { t: "Anything where I could go all-in — winner take all", p: { RT: 10 } },
  ]},
  { q: "When someone tells me something is \"risky,\" my gut reaction is:", opts: [
    { t: "That's a reason to stay away", p: { RT: 1 } },
    { t: "I want to understand the risk before deciding", p: { RT: 4 } },
    { t: "Interesting — tell me more about the upside", p: { RT: 7 } },
    { t: "That makes me MORE interested, not less", p: { RT: 10 } },
  ]},
  { q: "Growing up, my room/workspace was typically:", opts: [
    { t: "A creative mess — I knew where everything was in the chaos", p: { ED: 1 } },
    { t: "Generally tidy with occasional disorder", p: { ED: 4 } },
    { t: "Organized with a specific system for most things", p: { ED: 7 } },
    { t: "Immaculate — everything had its exact place", p: { ED: 10 } },
  ]},
  { q: "When I make a plan for the day, I typically:", opts: [
    { t: "Don't really make plans — I see where the day takes me", p: { ED: 1 } },
    { t: "Have a loose idea but go off-script easily", p: { ED: 3 } },
    { t: "Follow it mostly, with room for adjustments", p: { ED: 6 } },
    { t: "Follow it precisely — deviation feels wrong", p: { ED: 10 } },
  ]},
  { q: "When it comes to sticking with commitments — exercise, routines, habits — for as long as I can remember, I:", opts: [
    { t: "Start strong but rarely sustain it — this has always been my pattern", p: { ED: 2 } },
    { t: "Stick with it for a while but eventually drift", p: { ED: 4 } },
    { t: "Maintain most commitments consistently with occasional breaks", p: { ED: 7 } },
    { t: "Follow through with near-mechanical consistency once committed — always have", p: { ED: 10 } },
  ]},
  { q: "When someone gives me detailed instructions, my natural response is:", opts: [
    { t: "Skim them and figure it out my own way", p: { ED: 1 } },
    { t: "Read them but adapt as I go", p: { ED: 4 } },
    { t: "Follow them closely but use judgment when something doesn't fit", p: { ED: 6 } },
    { t: "Follow them to the letter — instructions exist for a reason", p: { ED: 10 } },
  ]},
  { q: "When I watch a movie with an intense scene, I:", opts: [
    { t: "Observe it intellectually — it's just a story", p: { EV: 1 } },
    { t: "Feel something but it passes quickly", p: { EV: 3 } },
    { t: "Get genuinely caught up in the emotion of the scene", p: { EV: 6 } },
    { t: "Am deeply affected — I might think about it for days", p: { EV: 10 } },
  ]},
  { q: "After receiving unexpected bad news, my emotional recovery typically takes:", opts: [
    { t: "Minutes — I process and move on quickly", p: { EV: 1 } },
    { t: "Hours — I need a bit of time but bounce back same day", p: { EV: 4 } },
    { t: "A full day or more — I need to sleep on it", p: { EV: 7 } },
    { t: "Days or longer — significant events stay with me intensely", p: { EV: 10 } },
  ]},
  { q: "People who know me well would say I:", opts: [
    { t: "Am hard to read — they often can't tell what I'm feeling", p: { EV: 1 } },
    { t: "Am even-keeled — I have emotions but keep them measured", p: { EV: 4 } },
    { t: "Wear my heart on my sleeve — my feelings are visible", p: { EV: 7 } },
    { t: "Feel everything deeply — my highs are high and my lows are low", p: { EV: 10 } },
  ]},
  { q: "When something exciting happens, my reaction is:", opts: [
    { t: "Internal satisfaction — a quiet sense of accomplishment", p: { EV: 2 } },
    { t: "Pleased — I feel good but don't need to celebrate", p: { EV: 4 } },
    { t: "Genuinely excited — I want to share it with someone", p: { EV: 7 } },
    { t: "Euphoric — I ride the high for hours or days", p: { EV: 10 } },
  ]},
  { q: "When forming an opinion about something important, I naturally:", opts: [
    { t: "Ask several people I trust what they think before I decide", p: { AA: 1 } },
    { t: "Research multiple viewpoints and weigh them together", p: { AA: 4 } },
    { t: "Form my own view first, then check it against others", p: { AA: 7 } },
    { t: "Trust my own analysis — other opinions mostly create noise", p: { AA: 10 } },
  ]},
  { q: "In a group where everyone agrees on something I think is wrong, I:", opts: [
    { t: "Probably go along — maybe they see something I don't", p: { AA: 1 } },
    { t: "Feel uneasy but stay quiet to avoid conflict", p: { AA: 3 } },
    { t: "Respectfully voice my disagreement", p: { AA: 7 } },
    { t: "Am energized by the disagreement — being the lone voice feels natural", p: { AA: 10 } },
  ]},
  { q: "I would describe my lifelong relationship with authority figures as:", opts: [
    { t: "Respectful and deferential — they're in charge for a reason", p: { AA: 2 } },
    { t: "Cooperative — I work within the system but have my views", p: { AA: 4 } },
    { t: "Independent — I respect competence, not titles", p: { AA: 7 } },
    { t: "Questioning — I've always challenged authority", p: { AA: 10 } },
  ]},
  { q: "As a child, if someone offered me 1 treat now or 3 treats in an hour:", opts: [
    { t: "Take the 1 right now — waiting feels impossible", p: { TH: 1 } },
    { t: "Try to wait but probably give in after a few minutes", p: { TH: 3 } },
    { t: "Wait the full hour — delayed gratification comes naturally", p: { TH: 7 } },
    { t: "Wait AND feel smug about my patience", p: { TH: 10 } },
  ]},
  { q: "In conversations, I tend to:", opts: [
    { t: "Finish other people's sentences — I process quickly and get impatient", p: { TH: 1 } },
    { t: "Sometimes jump ahead but catch myself", p: { TH: 4 } },
    { t: "Listen fully before responding most of the time", p: { TH: 7 } },
    { t: "Am a deeply patient listener — I never feel the need to rush", p: { TH: 10 } },
  ]},
  { q: "When standing in a long line, I feel:", opts: [
    { t: "Agitated almost immediately — I might leave", p: { TH: 1 } },
    { t: "Annoyed but I'll wait if I have to", p: { TH: 4 } },
    { t: "Fine — I'll find something to occupy my mind", p: { TH: 7 } },
    { t: "Completely unbothered — time moves at its own pace", p: { TH: 10 } },
  ]},
  { q: "Once I've made up my mind about something, it takes ___ to change it:", opts: [
    { t: "Very little — I'm open to new information at any point", p: { CI: 2 } },
    { t: "A reasonable argument with good evidence", p: { CI: 4 } },
    { t: "Strong evidence that directly contradicts my reasoning", p: { CI: 7 } },
    { t: "Almost nothing — once I'm convinced, I'm locked in", p: { CI: 10 } },
  ]},
  { q: "When I believe something strongly and people criticize that belief, I feel:", opts: [
    { t: "Shaken — maybe I'm wrong if others disagree", p: { CI: 1 } },
    { t: "Willing to reconsider — I don't want to be closed-minded", p: { CI: 3 } },
    { t: "More resolved — external pressure strengthens my position", p: { CI: 8 } },
    { t: "Energized — opposition confirms I'm seeing something others aren't", p: { CI: 10 } },
  ]},
  { q: "I've been told I'm \"too stubborn\" or \"won't let things go\":", opts: [
    { t: "Never — people see me as very accommodating", p: { CI: 1 } },
    { t: "Occasionally, but I don't see it as a pattern", p: { CI: 4 } },
    { t: "Regularly — it's something I'm known for", p: { CI: 8 } },
    { t: "Constantly — it's probably my defining trait", p: { CI: 10 } },
  ]},
  { q: "When my usual routine is disrupted unexpectedly, I feel:", opts: [
    { t: "Stressed — I need things to go as planned", p: { AQ: 1 } },
    { t: "Mildly annoyed but I adjust", p: { AQ: 4 } },
    { t: "Fine — I adapt quickly to new circumstances", p: { AQ: 7 } },
    { t: "Excited — disruption often leads to something better", p: { AQ: 10 } },
  ]},
  { q: "Throughout my life, my interests and hobbies have generally been:", opts: [
    { t: "Consistent — I've always deepened my mastery in the same areas", p: { AQ: 1 } },
    { t: "Mostly the same core interests with a few additions over time", p: { AQ: 4 } },
    { t: "A mix of old favorites and new explorations", p: { AQ: 6 } },
    { t: "Constantly evolving — I've always been drawn to discovering new things", p: { AQ: 10 } },
  ]},
  { q: "When I visit a restaurant I love, I:", opts: [
    { t: "Order my usual — I know what I like", p: { AQ: 1 } },
    { t: "Usually order the same thing with occasional experiments", p: { AQ: 4 } },
    { t: "Try something new about half the time", p: { AQ: 6 } },
    { t: "Almost always try something different — variety is the point", p: { AQ: 10 } },
  ]},
  { q: "When someone suggests a completely different approach to something I'm doing:", opts: [
    { t: "Defensive — my way works fine", p: { AQ: 1 } },
    { t: "Skeptical but willing to listen", p: { AQ: 4 } },
    { t: "Curious — I want to understand their reasoning", p: { AQ: 7 } },
    { t: "Excited — new approaches are opportunities to improve", p: { AQ: 10 } },
  ]},
  { q: "When I need to work through a difficult problem, I naturally:", opts: [
    { t: "Close the door and think alone — solitude is essential", p: { SO: 1 } },
    { t: "Prefer to be alone but might run ideas past one person", p: { SO: 3 } },
    { t: "Like to brainstorm with a few trusted people", p: { SO: 7 } },
    { t: "Think best out loud with others — conversation sharpens my thinking", p: { SO: 10 } },
  ]},
  { q: "At a large social event, after 2 hours I typically feel:", opts: [
    { t: "Drained — I've been ready to leave for a while", p: { SO: 1 } },
    { t: "Ready to wind down — it's been enough", p: { SO: 4 } },
    { t: "Good — I could stay or go, either is fine", p: { SO: 6 } },
    { t: "Energized — I'm just getting started", p: { SO: 10 } },
  ]},
  { q: "My ideal work environment is:", opts: [
    { t: "Completely solo — headphones on, door closed, no interruptions", p: { SO: 1 } },
    { t: "Mostly independent with occasional collaboration", p: { SO: 4 } },
    { t: "A balance of teamwork and solo focus time", p: { SO: 6 } },
    { t: "Highly collaborative — I thrive when surrounded by people", p: { SO: 10 } },
  ]},
  { q: "Compared to people around me, I've always been someone who:", opts: [
    { t: "Fatigues quickly under sustained mental effort — I need frequent breaks", p: { TS: 1 } },
    { t: "Has average stamina — I'm tired by the end of a full day", p: { TS: 4 } },
    { t: "Has more gas in the tank than most people around me", p: { TS: 7 } },
    { t: "Can keep going long after everyone else has stopped — it's always been this way", p: { TS: 10 } },
  ]},
  { q: "After a stressful or exhausting week, my recovery typically requires:", opts: [
    { t: "An entire weekend of doing nothing — I'm depleted", p: { TS: 1 } },
    { t: "A good night's sleep and a lazy morning", p: { TS: 4 } },
    { t: "A few hours of rest and I'm back to normal", p: { TS: 7 } },
    { t: "I bounce back almost immediately — stress doesn't drain me much", p: { TS: 10 } },
  ]},
  { q: "For as long as I can remember, my ability to sustain deep focus compared to others has been:", opts: [
    { t: "Below average — I've always needed frequent breaks and variety", p: { TS: 2 } },
    { t: "About average — an hour or two before I need a change of pace", p: { TS: 4 } },
    { t: "Above average — I can lock in for several hours when engaged", p: { TS: 7 } },
    { t: "Exceptional — deep focus for 5+ hours is my natural state and always has been", p: { TS: 10 } },
  ]},
];

export const PAIRS = [
  { a: { text: "I'd rather be safe and miss an opportunity", dims: { RT: -2 } }, b: { text: "I'd rather take a chance and risk failing", dims: { RT: 2 } } },
  { a: { text: "I value freedom and spontaneity", dims: { ED: -2 } }, b: { text: "I value structure and routine", dims: { ED: 2 } } },
  { a: { text: "I recover from setbacks quickly", dims: { EV: -2 } }, b: { text: "Setbacks affect me deeply for a while", dims: { EV: 2 } } },
  { a: { text: "I prefer to work through problems with others", dims: { AA: -2, SO: 1 } }, b: { text: "I prefer to figure things out on my own", dims: { AA: 2, SO: -1 } } },
  { a: { text: "I want results quickly", dims: { TH: -2 } }, b: { text: "I'm willing to wait for the best outcome", dims: { TH: 2 } } },
  { a: { text: "I change my mind easily with new facts", dims: { CI: -2 } }, b: { text: "I hold my positions firmly under pressure", dims: { CI: 2 } } },
  { a: { text: "I prefer mastering one thing deeply", dims: { AQ: -2 } }, b: { text: "I prefer learning many things broadly", dims: { AQ: 2 } } },
  { a: { text: "Stability makes me feel secure", dims: { RT: -1, AQ: -1 } }, b: { text: "Stability makes me feel restless", dims: { RT: 1, AQ: 1 } } },
  { a: { text: "I trust the process", dims: { ED: 2, TH: 1 } }, b: { text: "I trust my instincts", dims: { ED: -1, AA: 1 } } },
  { a: { text: "I'm a sprinter — intense bursts of energy", dims: { TH: -2, EV: 1, TS: -1 } }, b: { text: "I'm a marathoner — steady and enduring", dims: { TH: 2, EV: -1, TS: 1 } } },
  { a: { text: "When I'm wrong, I admit it quickly and move on", dims: { CI: -2, AQ: 1 } }, b: { text: "When wrong, I need to understand why before letting go", dims: { CI: 1, AA: 1 } } },
  { a: { text: "I feel things deeply — emotions are vivid", dims: { EV: 2 } }, b: { text: "I'm even-keeled — emotions rarely disrupt my thinking", dims: { EV: -2 } } },
  { a: { text: "I like to follow proven methods", dims: { ED: 1, AQ: -1 } }, b: { text: "I like to experiment with new approaches", dims: { ED: -1, AQ: 2 } } },
  { a: { text: "I seek advice before big decisions", dims: { AA: -2, SO: 1 } }, b: { text: "I trust myself more than any advisor", dims: { AA: 2, SO: -1 } } },
  { a: { text: "I recharge by being around people", dims: { SO: 2 } }, b: { text: "I recharge by being alone", dims: { SO: -2 } } },
  { a: { text: "I burn bright but burn out quickly", dims: { TS: -2, EV: 1 } }, b: { text: "I have slow-burning, steady energy all day", dims: { TS: 2, EV: -1 } } },
];

export const SPECTRUMS = [
  { left: "I avoid risks whenever possible", right: "I seek out risks and uncertainty", dim: "RT" },
  { left: "I go with the flow and improvise", right: "I follow plans and systems precisely", dim: "ED" },
  { left: "My emotions are quiet and slow", right: "My emotions are intense and immediate", dim: "EV" },
  { left: "I rely heavily on others' opinions", right: "I trust only my own judgment", dim: "AA" },
  { left: "I need instant gratification", right: "I can wait indefinitely for the right outcome", dim: "TH" },
  { left: "I change my mind easily", right: "Once decided, I'm nearly immovable", dim: "CI" },
  { left: "I master one thing and stick with it", right: "I constantly evolve and try new things", dim: "AQ" },
  { left: "I process best in total solitude", right: "I process best through conversation", dim: "SO" },
  { left: "I fatigue quickly under sustained effort", right: "I have seemingly endless energy reserves", dim: "TS" },
];

export const IDEAL_SPECTRUMS = [
  { left: "Risk averse — protects capital above all", right: "Risk seeking — bets big to win big", dim: "RT" },
  { left: "Freestyle — trades on feel and intuition", right: "Systematic — follows strict rules always", dim: "ED" },
  { left: "Emotionally flat — never rattled", right: "Emotionally intense — deeply feels every move", dim: "EV" },
  { left: "Consensus-driven — follows the crowd", right: "Fiercely independent — trusts only themselves", dim: "AA" },
  { left: "Needs instant results — scalps and day trades", right: "Infinite patience — holds for years", dim: "TH" },
  { left: "Quick to change mind — flexible", right: "Unshakeable conviction — holds through anything", dim: "CI" },
  { left: "One strategy — mastered deeply", right: "Many strategies — adapts constantly", dim: "AQ" },
  { left: "Trades alone — no outside input", right: "Trades with community — shares ideas constantly", dim: "SO" },
  { left: "Short focused sessions — quality over quantity", right: "Marathon sessions — trades all day every day", dim: "TS" },
];

export function matchArchetype(scores) {
  const profiles = [
    { idx:0,  RT:[1,3], ED:[7,10], EV:[1,3], AA:[7,10], TH:[4,6], CI:[4,6], AQ:[1,3], SO:[1,3], TS:[4,6] },
    { idx:1,  RT:[4,6], ED:[7,10], EV:[1,3], AA:[4,6], TH:[4,6], CI:[4,6], AQ:[4,6], SO:[4,6], TS:[7,10] },
    { idx:2,  RT:[7,10], ED:[1,3], EV:[7,10], AA:[7,10], TH:[1,3], CI:[7,10], AQ:[7,10], SO:[4,6], TS:[7,10] },
    { idx:3,  RT:[4,6], ED:[4,6], EV:[1,3], AA:[7,10], TH:[7,10], CI:[7,10], AQ:[4,6], SO:[1,3], TS:[7,10] },
    { idx:4,  RT:[1,3], ED:[7,10], EV:[4,6], AA:[1,3], TH:[7,10], CI:[1,3], AQ:[1,3], SO:[4,6], TS:[1,3] },
    { idx:5,  RT:[4,6], ED:[4,6], EV:[4,6], AA:[4,6], TH:[4,6], CI:[4,6], AQ:[7,10], SO:[4,6], TS:[7,10] },
    { idx:6,  RT:[7,10], ED:[4,6], EV:[1,3], AA:[7,10], TH:[7,10], CI:[7,10], AQ:[1,3], SO:[1,3], TS:[7,10] },
    { idx:7,  RT:[4,6], ED:[4,6], EV:[4,6], AA:[1,3], TH:[4,6], CI:[4,6], AQ:[7,10], SO:[7,10], TS:[4,6] },
    { idx:8,  RT:[4,6], ED:[7,10], EV:[7,10], AA:[4,6], TH:[1,3], CI:[1,3], AQ:[7,10], SO:[4,6], TS:[7,10] },
    { idx:9,  RT:[1,3], ED:[7,10], EV:[1,3], AA:[7,10], TH:[7,10], CI:[4,6], AQ:[4,6], SO:[1,3], TS:[4,6] },
    { idx:10, RT:[7,10], ED:[1,3], EV:[4,6], AA:[7,10], TH:[1,3], CI:[7,10], AQ:[7,10], SO:[1,3], TS:[7,10] },
    { idx:11, RT:[1,3], ED:[4,6], EV:[7,10], AA:[1,3], TH:[7,10], CI:[1,3], AQ:[7,10], SO:[7,10], TS:[1,3] },
    { idx:12, RT:[7,10], ED:[1,3], EV:[7,10], AA:[1,3], TH:[1,3], CI:[4,6], AQ:[4,6], SO:[7,10], TS:[4,6] },
    { idx:13, RT:[4,6], ED:[1,3], EV:[7,10], AA:[4,6], TH:[7,10], CI:[7,10], AQ:[1,3], SO:[4,6], TS:[4,6] },
    { idx:14, RT:[1,3], ED:[4,6], EV:[1,3], AA:[1,3], TH:[4,6], CI:[1,3], AQ:[4,6], SO:[7,10], TS:[4,6] },
    { idx:15, RT:[7,10], ED:[7,10], EV:[1,3], AA:[4,6], TH:[4,6], CI:[4,6], AQ:[4,6], SO:[4,6], TS:[7,10] },
    { idx:16, RT:[1,3], ED:[4,6], EV:[1,3], AA:[7,10], TH:[4,6], CI:[4,6], AQ:[1,3], SO:[1,3], TS:[4,6] },
    { idx:17, RT:[4,6], ED:[4,6], EV:[4,6], AA:[4,6], TH:[4,6], CI:[4,6], AQ:[4,6], SO:[4,6], TS:[4,6] },
    { idx:18, RT:[4,6], ED:[4,6], EV:[7,10], AA:[1,3], TH:[1,3], CI:[4,6], AQ:[7,10], SO:[7,10], TS:[7,10] },
    { idx:19, RT:[4,7], ED:[1,3], EV:[7,10], AA:[4,6], TH:[1,3], CI:[4,7], AQ:[4,6], SO:[4,6], TS:[1,3] },
  ];
  let bestIdx = 0, bestScore = -Infinity;
  profiles.forEach(p => {
    let score = 0;
    Object.keys(p).forEach(k => {
      if (k === "idx") return;
      const v = scores[k] || 5;
      const [lo, hi] = p[k];
      const mid = (lo + hi) / 2;
      const range = (hi - lo) / 2;
      score += Math.max(0, 1 - Math.abs(v - mid) / (range + 3));
    });
    if (score > bestScore) { bestScore = score; bestIdx = p.idx; }
  });
  return bestIdx;
}

export function calculateScores({ wordsSelected, wordsLeast, behAns, pairAns, specVals, idealVals }) {
  const raw = {};
  const counts = {};
  DIMS.forEach(d => { raw[d.key] = 0; counts[d.key] = 0; });

  // WORDS — primary instrument, highest weight (2.0x)
  wordsSelected.forEach(idx => {
    const w = WORDS_MOST[idx];
    Object.entries(w.dims).forEach(([k, v]) => { raw[k] += v * 2.0; counts[k]++; });
  });

  wordsLeast.forEach(idx => {
    const w = WORDS_LEAST[idx];
    Object.entries(w.dims).forEach(([k, v]) => { raw[k] += v * 2.0; counts[k]++; });
  });

  // BEHAVIORAL — strong secondary signal (1.5x)
  Object.entries(behAns).forEach(([qi, optIdx]) => {
    const opt = BEHAVIORAL_QS[qi].opts[optIdx];
    Object.entries(opt.p).forEach(([k, v]) => {
      raw[k] += v * 1.5;
      counts[k]++;
    });
  });

  // PAIRS — high signal, resistant to social desirability (1.5x)
  Object.entries(pairAns).forEach(([qi, side]) => {
    const pair = PAIRS[qi];
    const choice = side === "a" ? pair.a : pair.b;
    Object.entries(choice.dims).forEach(([k, v]) => { raw[k] += v * 1.5; counts[k]++; });
  });

  // SPECTRUMS — weakest signal, tiebreaker only (0.25x)
  Object.entries(specVals).forEach(([dim, val]) => {
    raw[dim] += Number(val) * 0.25;
    counts[dim]++;
  });

  // Calculate INNATE scores — no ideal-self contamination
  const final = {};
  DIMS.forEach(d => {
    const base = counts[d.key] > 0 ? (raw[d.key] / counts[d.key]) : 5;
    final[d.key] = Math.max(1, Math.min(10, base + 5));
  });

  return final;
}

// Strain Map — measures gap between innate wiring and aspirational self
// High strain = fighting your nature. This is diagnostic, NOT a score modifier.
export function calculateStrain(innateScores, idealVals) {
  const strain = {};
  DIMS.forEach(d => {
    const innate = innateScores[d.key] || 5;
    const ideal = idealVals[d.key] ? Number(idealVals[d.key]) : 5;
    strain[d.key] = Math.abs(ideal - innate);
  });
  return strain;
}

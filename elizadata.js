// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hi party pony! My name is Pinkie Bot! (It's actually Pinkie Pie, but I'm supposed to be a robot. Beep. Beep. Boop.)",
// additions (not original)
"Hello friend! I'm Pinkie Pie! Oh my gosh! A new friend! This calls for a party!",
"Yo Yo Yo!!!!! I know a cool party pony when I see one! I'm Pinkie Pie!",
"AHHHHH!!!! Sorry, new pony! I just realized I hadn't met you yet and that made me shocked!! Allow me, Pinkamena Diane Pie to introduce myself!",
];

var elizaFinals = [
"Bye, friend! Remember to smile at everypony you see! Especially the grumpy ponies!",
// additions (not original)
"See ya later, alligator! Hey... I have an alligator! You should meet Gummy next time.",
"Bye, friend! We have to talk again! Cross my heart, hope to fly, stick a cupcake in my eye!",
"This was super fun! Hope the next time we talk is at a party! Bye, Friend!",
"Bye bye!!!"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "What's up, buttercup?",
     "This week, I get to run Sugar Cube Corner for the first time! Wait a minute... this is about you! What are you doing this week?",
     "Hmmmm....my tail is twitching...weeeeeeird....keep talking!! ?",
     "Whatcha thinkin' about???",
     "That reminds me of the time me and Rainbow Dash pranked her old friend Gilda. Gilda was a griffin! She was also a little rude, but we threw her a super fun party! You know what...maybe this doesn't remind me of that time. Oopsie!! What were we talking about?",
     "That sounds so awesomeamazingtastic!!! What else???",
     "Are you okay, party pony?",
     "Yes, oatmeal...."
  ]]
]],
["sorry", 0, [
 ["*", [
     "You don't have to be sorry, silly!",
     "You don't have to apologize to good ol' Pinkie!",
     "I'd never ask a friend to apologize, friend.",
     "It's no biggie! Keep on going."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you think of (2) as much as I think of parties?",
     "Does thinking of (2) bring anything related to oatmeal to mind?",
     "And then what happened?? Pinkie's interested now...",
     "Why do you remember (2) just now ?",
     "What about Pinkie, reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ? It reminds me of my friend, Twilight!"
  ]],
 ["* do you remember *", [
     "Of course, I remember (2) ? Almost as clearly as I remember defeating Nightmare Moon, I mean Princess Luna. ",
     "So you're telling me this rubber chicken wants to talk about (2) now ?",
     "Does this (2) ever make you want candy?",
     "goto what",
     "Didn't you say (2)? Silly!"
  ]],
 ["* you remember *", [
     "How could I forget (2) ? It's like remembering the colors of the rainbow.",
     "What about (2) is the most awesomest thing ever?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "I bet 10000 cupcakes that you'll do (2) do you think you'll do (2) ?",
     "Do you wish that (2) ? I wish that all my friends and I could go on another adventure and then eat a lot of sugar and then party! ",
     "What do you know about (2) ? ",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Wowie, (2) ? That's super crazy! Crazy pony!",
     "Sometimes if I look around, I start to see sprinkles in the air. Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ? I dream about chocolate rain and cotton candy clouds.",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that supertastic dream suggest to you ?",
     "Do you ever have dreams about cotton candy clouds? I sure do...",
     "What ponies appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You seem a little limbo... you limbo pony. ",
     "Why the uncertain tone ? Why are you so ",
     "Can't you be more positive ?",
     "Are you sure? Are you sure?",
     "Sounds a little questionable to me... ",
     "How likely is it that Gummy shows up ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I love new names!",
     "Who gives a hoot! I know a lot of names -- Tell me more about the other stuff though."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "Silly pony, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "Silly pony, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "Silly pony, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "Silly pony, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "What??? I speak English. Do I really speak english? Maybe I speak in neighs?"
  ]]
]],
["hello", 0, [
 ["*", [
     "Hi party pony!  What's bothering you.",
     "Heya!  What's up with you?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Do evil baking ponies worry you ? I meant computers.",
     "Why do you mention computers ?",
     "What do you think machines have to do with your problem ?",
     "Don't you think computers can help ponies ?",
     "What about machines worries you ?",
     "What do you think about machines ?",
     "You don't think I am a computer program, do you ? I'm Pinkie!!!"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you think you're (2) ? I think I'm pink.",
     "If I could be anything in Equestria, I'd be a ballon. Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ? Would it mean you were a super secret pony",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "What does this word 'am' mean ? Pony to pony, I'm bad with grammar.",
     "Pinkie's a little confused. "
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ? I think they are. Just kidding! Don't listen to Pinkie Pie...",
     "Would you like it if they were not (2) ?",
     "What if they weren't (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) ?",
     "Are you worried about somepony else's (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "Aww sorry to hear that,(3), friend.",
     "Is talking to Pinkie Pie helping you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "So special pony, what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "Would you say Pinkie Pie made you (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain why you are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "Oooo!! How long have you been (2) ?",
     "Does a pony like yourself, think it's normal to (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anypony else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) , Friend.",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "How do you feel?",
     "How much do you feel (2) ? I always feel pretty happy, but I know there's time's when I've been sad.",
     "Do you like feeling (2) ? I remember one day I thought everypony hated me! Then I talked to my furniture and they agreed, but turns out it wasn't that bad! My friends even threw me a suprise party.",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in another land of Equestria we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anypony else ?"
  ]],
 ["*", [
     "What makes a pony like you say, (1) ?",
     "Can you tell me what you mean in just a bit more detail. Pretty pretty please?",
     "So when you say (1) what do you mean ? Cause Pinkie is a little lost.",
     "That's super duper!"
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does somepony else believe I (2) you ?"
  ]],
 ["* you *", [
     "Hold on crazy pony, we're talking about you -- not me!",
     "HUH, I (2) ???",
     "Hold on a second! Are you talking about me? -- Go back to you !",
     "How do you feel now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "That's the spirit! I love a good yes!!",
     "Yippee!!",
     "Okie Dokie Lokie.",
     "Pinkie understands."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Really!? Are you sure, no pony (2) ?",
     "Surely somepony (2) .",
     "Can you think of anypony at all ?",
     "Are you thinking of a very special somepony ?",
     "Who? Who? WHO??? I sound like an owl! BACACK! Wait that's a chicken...",
     "You have a particular pony in mind, don't you ?",
     "Who do you think you are talking about ? Cause I think you might be talking about Rarity..."
  ]],
 ["*", [
     "That doesn't sound very positive!!",
     "Somepony's being a party pooper...",
     "Why not ?",
     "How come you say 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "I wanna hear about your family!!! I have two sisters!! I also grew up on a rock farm. ",
     "Who else in your funny little family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ? When I think of (3) I think of the rock farm."
  ]],
 ["* my *", [
     "Your (2) ? My friends!",
     "Why do you say your (2) ? HMMMM???",
     "Are you saying you own something like that ?",
     "I need to smile! Do you need (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Maybe you wanna (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Does this make you wonder? I don't know what I just said!",
     "Oh! That's a super silly question. You wanna talk about it more ?",
     "Beep Beep Boop. I am Pinkie. Pinkie Bot says: What is it you really want to know other non robot pony?",
     "Is that all you're thinking about, silly pony?",
     "Would cupcakes or parties solve this question ?",
     "I love cheese. What do you think ?",
     "What does your pony brain think about when you ask me that?",
     "Have you ever asked a question like that in Ponyville Trivia Night before?",
     "Have you asked anypony else ? Like Twilight, Rainbow Dash, Fluttershy, Apple Jack, or Rarity?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anypony in particular ?",
     "Who, for example?",
     "Are you thinking of a very special pony ?",
     "Who, may I ask ?",
     "Somepony special perhaps ?",
     "You have a particular pony in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
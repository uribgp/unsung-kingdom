export const cassandra = {
  talk1: [
    "…。", // cassandra
    "What are you looking at?", // cassandra
    "Is this a prison?", // ann
    "…。", // cassandra
    "Yes.", // cassandra
    "Did you do something wrong?", // ann
    "Yes.", // cassandra
    "I'm not allowed outside anymore.", // cassandra
    "Well that's...", // ann
    "This is a keyless prison made of Aragnier's thread.", // cassandra
    "The thread that he weaves can't be cut unless he's killed.", // cassandra
    "Aragnier?", // ann
    "Aragnier is a giant spider monster.", // cassandra
    "It disappeared after building this prison.", // cassandra
    "Now no one can find it.", // cassandra
    "I guess it grew bored of here and moved on.", // cassandra
  ],
  talk2: [
    "You want to speak to me?", // cassandra
    "Hey can you bring me some wine if you have the time?", // cassandra
    "I know it's illegal to purchase alcohol, but I know where to find it.", // cassandra
    "I'll tell you where to get it.", // cassandra
    ["OK", "Of course"],
    "So...", // cassandra
    "There's a wine cellar at the end of this underground passage.", // cassandra
    "Just ahead?", // ann
    "Yes.", // cassandra
    "And the key?", // ann
    "Look closely at the candlestick next to the door.", // cassandra
    "They key should be hidden there.", // cassandra
    "Who would hide the key there?", // ann
    "My brother often goes in and out of there.", // cassandra
    "He's searching for Aragnier's hiding place so he can get me out of here.", // cassandra
    "I see.", // ann
    "So is it too much trouble?", // ann
    "Don't worry, Aragnier is long gone.", // cassandra
    "Otherwise my brother would have noticed it.", // cassandra
    "But you'll definitely find the wine.  Please bring me some.", // cassandra
  ],
  util: {
    door: ["Check", "Leave it alone"],
    key: "I have the underground passage key",
    unlock: "Unlocked the passage",
    locked: "Locked", // ann
    wine: "I got the wine",
  },
  progress: [
    "Did you find the key?", // cassandra
    "Look closely at the bottom of the candlestick next to the door.", // cassandra
    "Did you find the wine yet?", // cassandra
  ],
  solve: [
    "Was the wine there?", // cassandra
    "Yes, a lot of it.", // ann
    "Well done!", // cassandra
    "Thank you, it's so refreshing.", // cassandra
    "Being trapped here is so awful, this wine really is a nice comfort.  I can't thank you enough.", // cassandra
    "It's ok.  Letting me know where the key was is more than enough.", // ann
    "But where is there wine stored down here?", // ann
    "Moonshine runners use this passage to smuggle liquor.", // cassandra
    "The people in the castle purchase the liquor.  This Prohibition is ridiculous.", // cassandra
    "Is that so?", // ann
    "Yep.  Just awhile ago a smuggler entered actually.", // cassandra
    "Thanks for talking to me.", // cassandra
  ],
  solved: "Thank you for the wine.",
  tweet: [
    "Is this the wine?", // ann
    "Two more.", // ann
    "Need to find one more", // francisca
    "It looks like they're all gathered", // jaquelyn
  ],
};
export const princess = {
  talk1: [
    "Cha!", // loretta
    "Who?", // mary
    "How did you get in here?", // loretta
    "Um, well...", // ann
    "Who are you two?", // ann
    "This is a dangerous place for children.", // ann
    "Excuse me!  We're fine!", // loretta
    "This house belongs to me and Mary.", // loretta
    "Your house? What do you mean?", // ann
    "Are you foreigners?", // loretta
    "You've never heard of the Princess Mary?", // loretta
    "Oh?", // ann
    "They can't be from around here.", // mary
    "This is Loretta. The daughter of the Duke of Troias.", // mary
    "Why are you here!?", // ann
    "It's dangerous, there's monsters.", // ann
    "Leave me.", // loretta
    "Mary, who are they?", // loretta
    "Report them to your father.", // loretta
    "You know I can't do that.", // mary
    "I can't enter the castle from down here.", // mary
    "And we're meeting here secretly, we're not supposed to be down here either.", // mary
    "True.", // loretta
    "So it's a secret that any of us were ever here.", // mary
    "Uh, yeah.  Sure.", // ann
    "Your father is royalty, right?", // ann
    "What are you doing down here anyways?", // ann
    "I can't possibly say.", // mary
    "Yeah, secret research and experiments that I can't tell my father about.", // loretta
    "Don't disturb us.", // loretta
    "Ok...", // ann
    "You entered through the underground passage, right?", // mary
    "Correct.", // ann
    "Then did you meet Cassandra on your way?", // mary
    "A woman trapped in the prison of Aragnier's Thread.", // mary
    "We met her.", // ann
    "How is she?", // mary
    "In what sense?", // ann
    "Was she angry, or sad?", // mary
    "Uh, hmmm...", // ann
    "It didn't look fun being trapped there...", // ann
    "I see...", // mary
    "You know her?", // ann
    "Yes. she's imprisoned because of me.", // mary
    "It's not your fault, Mary!", // loretta
    "Yes, it is...", // mary
    "Hey, don't believe that Mary.", // loretta
    "It really wasn't your fault.", // loretta
    "I think I understand.", // ann
    "Can I ask what happened?", // ann
    "It's fine.", // mary
    "Cassandra used to be my caretaker.", // mary
    "I was so proud of her.", // mary
    "Cassandra was the sister of a knight, and she was also an excellent swordfighter.", // mary
    "I wanted to be like her.", // mary
    "I always urged her to take me hunting with her.", // mary
    "I asked her day after day, and finally one day she took me to the forest with her.", // mary
    "She found a safe area", // mary
    "but somehow a powerful monster found us.  They're usually never in that area.", // mary
    "She slayed it while protecting me.", // mary
    "But I was injured.", // mary
    "How unfortunate", // ann
    "Yes, this eye.", // mary
    "My father was furious and locked her up.  He was so mad I couldn't help her.", // mary
    "I don't hold a grudge regarding my injury.", // mary
    "She's still my hero.", // mary
    "So it's all my fault that she's trapped down there.", // mary
    "How awful.", // ann
    "Hey, it wasn't Mary's fault right?", // loretta
    "That's right.  You can't blame yourself.", // ann
    "Even if you say so, it doesn't change that she's locked up.", // mary
    "That's why you're concerned about how she's doing.", // ann
    "Mary is making a gift for Cassandra", // loretta
    "Hey, don't tell them that!", // mary
    "And it's not much of a gift anyways.", // mary
    "It's ok, maybe they can help you.", // loretta
    "Sure... I need some help.", // mary
    "We can help!", // ann
    "Can you bring me #{MAGIC_STONES} carbuncle stones?", // mary
    "Please!", // loretta
    "Princess Mary orders it!", // loretta
    ["I understand", "I'm afraid not"],
    "Thank you.", // mary
    "There's no need.  They don't have the right to refuse.", // loretta
    "Come on, go.", // mary
  ],
  door: [
    "We're experimenting right now.", // loretta
    "Don't disturb.", // loretta
    "Oh, don't go in!", // loretta
    "We're busy in here...", // loretta ?????
  ],
  progress: [
    "#{MAGIC_STONES} carbuncle stones。", // mary
    "Bring them quickly.", // loretta
  ],
  solve: [
    "They brought the stones!", // mary
    "They did it!", // loretta
    "Thank you!", // mary
    "You're welcome.", // ann
    "It's great that they're a gift for Casssandra.", // ann
    "What are you making?", // ann
    "It's a secret.", // mary
    "Come on, thank you.", // mary
  ],
  solved: [
    "Thank you, you saved my gift.", // mary
    "Your help is no longer needed, you may leave.", // loretta
  ],
};
export const moonshine = {
  talk1: [
    "Wow! Who are you?", // dionysus
    "Why are you down here?", // dionysus
    "And who are you?", // ann
    "I heard there is a suspicious guy who brings in moonshine, would that be you?", // ann
    "No, of course not.", // dionysus
    "Then what's in that barrel?", // ann
    "…。", // dionysus
    "Oh right, this is wine.", // dionysus
    "Mmmm hmmm.", // ann
    "Are you trying to throw me out of the castle?", // dionysus
    "Is that what you're hoping for?", // dionysus
    "That's not the case...", // ann
    "Can you tell me about this place?", // ann
    "I want to know about this passage, and the castle.", // ann
    "Certainly, I know all about it.", // dionysus
    "As you know, this underground passage leads to the royal castle.", // dionysus
    "Beyond this hallway is a door leading to the castle storage.", // dionysus
    "And you deliver your moonshine there?", // ann
    "Yes.  One barrel a day.", // dionysus
    "I bring it to the back of the underground passage.", // dionysus
    "When 20 barrels have accumulated, it is brought into the castle.", // dionysus
    "Does that mean,", // francisca
    "that the last door into the castle only opens from within?", // francisca
    "Yes.", // dionysus
    "Why are you trying to break into the castle?", // dionysus
    "You can't get past this room to the door anyways.", // dionysus
    "Why not?", // ann
    "Orthus is protecting the next room.", // dionysus
    "You can't open the door if you've been eaten.", // dionysus
    "Orthus?", // ann
    "Oh right.  Orthus is the castle's two headed guard dog.", // dionysus
    "I always wait for him to sleep and then sneak through, but three of you could never sneak by him.", // dionysus
    "Now that you know, you should turn back.", // dionysus
  ],
  talk2: [
    "Orthus is the castle's two headed guard dog.  You won't get past him.", // dionysus
    "Now that you know, you should turn back.", // dionysus
  ],
  talk3: [
    "Are you seriously going in there?", // dionysus
    "Stop it.", // dionysus
    "Do you want to die?", // dionysus
    "It's the only way.", // ann
    "I don't want to see the corpses of three young women.", // dionysus
    "Then what should we do?", // ann
    "Hmm ...", // dionysus
    "Ok, it's dangerous but I have a plan.", // dionysus
    "Let's cooperate.", // dionysus
    "Hmm?", // ann
    "ああ。", // dionysus
    "I'll make Orthus easier for you to beat.", // dionysus
    "How?", // ann
    "Just leave it to me.", // dionysus
    "But make sure you beat him, I'm putting my neck out there too.", // dionysus
    "Just wait a minute.", // dionysus
    "He went in there.", // jaquelyn
    "With the wine barrel, what's he planning?", // ann
    "OK!  I'm in!", // dionysus
    "It's going well.", // dionysus
    "What are you doing?", // ann
    "Letting him have this barrel of wine.", // dionysus
    "Once he's finished, he'll be easier to defeat.", // dionysus
    "I'll lose today's score, but it'll be worth it in the long run.", // dionysus
    "Come on, go in!", // dionysus
  ],
  talk4: [
    "Orthus is drunk.", // dionysus
    "Come on, nows your chance.", // dionysus
  ],
  talk5: [
    "Is it safe!", // dionysus
    "Did you beat it?", // dionysus
    "Is it done?", // dionysus
    "Now I don't have to be scared of him anymore.", // dionysus
    "Thanks for giving him your barrel of wine.", // ann
    "Haha!  Even the dragon in the Temple of Grifarde could be defeated if it was drunk enough!", // dionysus
    "I'm glad we ran into each other.", // dionysus
    "What a beneficial exchange.", // dionysus
    "Thank you!", // ann
    "Well then, good luck sneaking into the castle.", // dionysus
  ],
  solved: [
    "Well then, be careful.", // dionysus
  ],
  orthrus1: [
    "Wow, that's a big dog!", // ann
    "Yeah, he looks pretty hostile.", // jaquelyn
    "Let's go back and consider how to defeat it.", // francisca
  ],
  orthrus2: [
    "Alright Orthus.", // ann
    "Everyone, let's go!", // ann
    "We managed to beat it.", // ann
    "Let's tell the smuggler.", // jaquelyn
  ],
};
export const aragnie = {
  jack: [
    "Hey, you!", // ann
    "You three, from the garden...", // jack
    "What are you doing here?", // jack
    "You've crossed the line!", // ann
    "What are you doing this time?", // ann
    "I'm not answering you.", // jack
    "I really don't have the time for this.", // jack
    "Yoink.", // jack
    "Oh, wait!", // ann
    "Why is Jack the Kingkiller here?", // ann
    "Is he the knight, Hector, after all?", // jaquelyn
    "Hmmm.", // ann
    "I don't know, but let's go find out.", // ann
  ],
  hector1: [
    "Who are you!", // hector
    "Uh...", // ann
    "And what are you doing with my key?", // hector
    "We just borrowed this.", // ann
    "Are you Cassandra's brother?", // ann
    "I see.  My sister told you about it.", // hector
    "Yes.  I am Cassandra's brother.", // hector
    "What are you doing here?", // hector
    "Cassandra told us about everything.", // ann
    "You're looking for Aragnier to break Cassandra out of prison, right?", // ann
    "I was hunting it for a time.", // hector
    "But I gave up on it awhile ago.", // hector
    "Then why are you here?", // ann
    "It's...", // hector
    "I...", // hector
    "I have a confession to make.", // hector
    "I have a grudge against the king.", // hector
    "I want my revenge.", // hector
    "It's you...", // ann
    "It wasn't always like this!", // hector
    "I once swore allegiance to the king, I was his loyal knight.", // hector
    "I began to resent him after he expelled me.", // hector
    "Even then, I only thought of defeating Aragnier and releasing my sister.", // hector
    "But I searched for years, and I've found nothing!", // hector
    "Then after I'd given up, and I was at my lowest point, a man came to me.", // hector
    "Yes, the guy in the black robe. You must have met.", // hector
    "Hey!", // ann
    "What did you talk to him about?", // ann
    "He's a snake.", // hector
    "He fed my anger towards the king, made it grow.", // hector
    "He told me about the smuggler.", // hector
    "Explained that the door will open once twenty barrels have accumulated.", // hector
    "He guided me here.", // hector
    "I've already lost my mind.", // hector
    "He... takes advantage of people's vulnerabilities.", // ann
    "Hey, if you could defeat Aragnier and free Cassandra, would you abandon your revenge?", // ann
    "...I don't know.", // hector
    "Perhaps.", // hector
    "Help us find the spider.", // ann
    "I can't. I couldn't find Aragnier.  I spent years searching.", // hector
    "Look, over there.", // hector
  ],
  hector2: [
    "I found him!", // mary
    "Hector it's been a long time!", // mary
    "Princess Mary!", // hector
    "Lady Loretta!", // hector
    "It's not courageous to kill King Edgar", // loretta
    "Hector, please don't resent your father.", // mary
    "Cassandra's imprisonment and your dismissal are all my fault.", // mary
    "I've caused so much grief.", // mary
    "…", // hector
    "Please, just give me a chance.", // mary
    "A chance?", // hector
    "Yes, look at this?", // mary
    "A lantern?", // hector
    "This is a magic stone lantern.", // mary
    "This light illuminates the traces of Aragnier.", // mary
    "That's...", // hector
    "Mary and I studied for years and came up with this.", // loretta
    "These three helped us find the carbuncle stones.", // loretta
    "We needed them to make the magical light.", // ann
    "Your sister... will this save her?", // hector
    "Yes!", // loretta
    "Quit your plot for revenge.", // loretta
    "Let's go free Cassandra's ", // mary
    "You three, come on!", // mary
    "Huh?", // ann
    "You can't refuse the princess!", // loretta
    "I'm afraid we don't have the strength to defeat Aragnier after crafting the lantern.", // loretta
    "I see, defeat Aragnier, leave it to us!", // ann
    "Wait.", // hector
    "No, don't wait.", // mary
    "…", // hector
    "...Right.", // hector
    "There's no reason to hesitate.", // hector
    "Let's go free my sister..", // hector
  ],
  cassandra1: [
    "Cassandra.", // hector
    "Hector, who did you bring with you?", // cassandra
    "Cassandra, it's been so long.", // mary
    "Ah!", // cassandra
    "Why... Why are you here?", // cassandra
    "I need to apologize to you.", // mary
    "Huh?", // cassandra
    "I need to get you out of here.", // mary
    "I can't go out.", // cassandra
    "And you don't need to apologize.", // cassandra
    "I need to apologize to you.", // cassandra
    "Listen, Cassandra.", // hector
    "The princess made a tool to find Aragnier.", // hector
    "What?", // cassandra
    "Is that true?", // cassandra
    "Yes.  For you?", // hector
    "Just for me?", // cassandra
    "There is no reason to ignore the princess's feelings.", // hector
    "…", // cassandra
    "Now let's light the magic stone.", // loretta
    "Whoa!", // ann
    "I can see Aragnier's threads!", // ann
    "Now we can hunt it down.", // ann
  ],
  cassandra2: "…。",
  lamp: ["Search", "Wait"],
  aragnie_hector: [
    "I never knew there was such a place!", // hector
    "Aragnier must be hiding here!", // hector
    "Let's proceed.", // ann
    "Whoa!!", // hector
    "This is so cool...", // hector
    "Seriously?", // francisca
  ],
  boss: [
    "Here it is!  Aragnier!", // mary
    "It looks strong...", // mary
    "Come on, defeat it!", // loretta
    "Wait for my heart to slow down.", // ann
    "We beat it...", // ann
    "Well done!", // loretta
    "I'm ashamed.", // hector
    "What an amazing fight.", // hector
    "Let's get back to Cassandra!", // mary
  ],
  last1: [
    "It really opened!", // loretta
    "Great!", // mary
    "Cassandra, you're free at last.", // mary
    "…。", // cassandra
    "I can't leave here after all.", // cassandra
    "What, why not?", // mary
    "Your eye.", // cassandra
    "Every time I see that eye it cuts my heart.", // cassandra
    "You are being punished in your own prison.", // cassandra
    "How can I look upon your face?", // cassandra
    "Cassandra, stop.", // mary
    "Yeah, don't be afraid to come out.", // loretta
    "You don't know?", // loretta
    "Mary has that same feeling when she sees you in prison.", // loretta
    "Lady Loretta ...", // cassandra
    "Cassandra, come out.", // hector
    "Let's go some place far away and start over.", // hector
    "... I understand.", // cassandra
    "How can I thank you?", // cassandra
    "Cassandra, you spent seven years in this prison because of my mistake.", // mary
    "I didn't do this out of pity, it is my atonement.", // mary
    "Come on, don't look back.  Come out!", // mary
    "Ok.", // cassandra
  ],
  last2: [
    "They're gone.", // loretta
    "Yeah...", // mary
    "Cassandra...", // mary
    "My sister...", // mary
    "Cheer up, Mary.", // loretta
  ],
  last3: [
    "Hector has abandoned his plot of revenge against the king.", // ann
    "That's right.  We did our best Ann.", // jaquelyn
    "Let's go back and check the history book.", // francisca
  ],
};

# Sports Innovation Challenge
Social media scraper that looks through user profiles for profane or obscene messages. 
The identification mechanism utilizes an NLP algorithm trained on a Kaggle dataset.

### To-do
- [ ] Make frontend aesthetically pleasing
- [ ] Connect frontend w/ backend POST

### Features

### Progress Report/Current State:
Backend
- the twitAPI folder contains classes that interface to twitter to gather the necessary data
- Server resources folder countains the files that actually create objects and call the methods, before sending them to the server.
  WITHIN TWITAPI:
-Twitterer.java:
  - This was the original tweet grabbing function, but it's limited and should BE PHASED OUT.
  - Twitterfunctions still uses it for some reason.
- Twitterfunctions.java:
  - /b calls two classes to grab tweets; twitterer and twitter. I have no idea where twitter is from, but twitterer is from Twitterer.Java
  - Checks if a profile is highschool by checking the bio for a height statement, or a grad year
    - These are implemented with manual checks for years/height
    - Looking ahead, we need a better method of doing this.
  - Checks a list of handles for highschoolers using the above function.
  - Has a method to grab URLs
  - Has a method to grab the profile name
  - Checks for interested universities using a keyword search for things like "blessed", "receive" etc.
  - Has the method which uses micheal's NLP thingy to find flagged tweets for a handle. ()
  - Has a method to check rleative interest based on the amoun of GT tweets retweeted (find better data to use for this eventually)
  - percentfit method, currently incomplete but will be based off of evaluations like the one above in the future.
    - maybe look at a different model to express fit. a percent may not be the best.
- TwitterDriver.java:
  - This might be completely obsolete but I'll have to test it to make sure
  - Essentially just calls twitterer and prints some tweets to console. Pretty sure I just created it and messed with it a bit to check out functions of TwitAPI
  
Interface:
- 
  
### Planned Changes:
- 
### Contributors
William Chen, Margarita Groisman, Michael Chen, Jeffrey Luo

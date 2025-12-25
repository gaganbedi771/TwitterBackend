const mongoose = require("mongoose");

const { TweetRepository, HashtagRepository } = require("../repository/index");

exports.create = async (data) => {
  const session = await mongoose.connection.startSession();

  try {
    session.startTransaction();

    //get content only to extract hashtags
    const content = data.content;
    const tags = [
      ...new Set(
        content.match(/#[a-zA-Z0-9_]+/g)?.map((tag) => {
          return tag.substring(1).toLowerCase();
        }) || []
      ),
    ];

    //make tweet
    const tweet = await TweetRepository.create(data, session);

    //get already present tags
    const existingTagsfromDb = await HashtagRepository.getTagByName(
      tags,
      session
    );
    const existingTagsTitleList = existingTagsfromDb.map((tag) => tag.title);

    //takeout tags that are not present and make new tags
    const newTagsToCreateTitleList = tags.filter((tag) => {
      return !existingTagsTitleList.includes(tag);
    });
    const tagsObjWithTweet = newTagsToCreateTitleList.map((tag) => {
      return {
        title: tag,
        tweets: [tweet.id],
      };
    });
    const newTagsFromDb = await HashtagRepository.bulkCreate(
      tagsObjWithTweet,
      session
    );

    //add tagId in tweet's hashtag array and update
    existingTagsfromDb.forEach((tag) => {
      tweet.hashtags.push(tag.id);
    });
    newTagsFromDb.forEach((tag) => {
      tweet.hashtags.push(tag.id);
    });
    await tweet.save({ session });

    //update tweetId in already present tags
    const existingTagIds = existingTagsfromDb.map((tag) => tag.id);
    const updateExistingTags = await HashtagRepository.bulkUpdate(
      existingTagIds,
      tweet.id,
      session
    );
    await session.commitTransaction();
    return tweet;
  } catch (error) {
    console.log("Error at service layer ", error);
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

exports.get = async (id) => {
  try {
    const tweet = await TweetRepository.get(id);
    return tweet;
  } catch (error) {
    console.log("Error at service layer ", error);
    throw error.message;
  }
};

exports.delete = async () => {
  try {
  } catch (error) {
    console.log("Error at service layer ", error);
    throw error.message;
  }
};

exports.x = async () => {
  try {
  } catch (error) {
    console.log("Error at service layer ", error);
    throw error.message;
  }
};

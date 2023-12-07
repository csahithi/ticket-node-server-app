import FollowersModel from "./model.js";

export const createFollower = async (follower) => {
    const newFollower = await FollowersModel.create(follower);
    return newFollower;
}

export const findAllFollowers = async () => {
    const followers = await FollowersModel.find();
    return followers;
}

export const findFollowerById = async (followerId) => {
    const follower = await FollowersModel.findOne({_id: followerId});
    return follower;
}

// Who all are following an user ?
export const findAllFollowersByUserId = async (UserId) => {
   const allFollowers = await FollowersModel.find({followingId: UserId});
   return allFollowers;
}

// Who are the ones the user is following ?
export const findAllFollowingByUserId = async (UserId) => {
    const allfollowing = await FollowersModel.find({followerId: UserId});
    console.log(allfollowing)
    return allfollowing;
}

export const updateFollower = async (followerId, follower) => {
    return await FollowersModel.updateOne({_id: followerId}, {$set: follower})
}

export const deleteFollower = async (followerId) => {
    return await FollowersModel.deleteOne({_id: followerId})
}



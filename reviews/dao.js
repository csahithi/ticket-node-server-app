import ReviewModel from "./model.js";

// export const createReview = async (review) => {
//     return await ReviewModel.create(review);
// }

export const findAllReviews = async () => {
    return await ReviewModel.find();
}

export const createReview = async (eventId, userId, reviewText, rating) => {
    const review = {
      eventId,
      userId,
      review: reviewText,
      rating,
    };
  
    return await ReviewModel.create(review);
  };
export const findReviewById = async (reviewId) => {
    return await ReviewModel.findById(reviewId);
}

export const findReviewsByEventId = async (eventId) => {
    return await ReviewModel.find({eventId: eventId});
}

export const findReviewsByUserId = async (userId) => {
    return await ReviewModel.find({userId: userId});
}

export const updateReview = async (reviewId, review) => {
    return await ReviewModel.updateOne({_id: reviewId}, {$set: review})
}

export const deleteReview = async (reviewId) => {
    return await ReviewModel.deleteOne({_id: reviewId});
}

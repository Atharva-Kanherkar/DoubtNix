const { Reply, doubtCreation } = require('../models/doubt');

 

exports.HandleReplyCreation = async (req, res, next) => {
    try {
        const { doubt, keyTakeAway,codeSnippet,pictures,user,content } = req.body;
        const newReply = await Reply.create({
            doubt,
            keyTakeAway,
            codeSnippet,
            pictures,
            user,
            content
        });

        res.status(201).json({
            message: 'Reply created successfully',
            newReply
        });
    } catch (err) {
        res.status(500).json({
            errorMessage: err.message
        });
    }
};

exports.handleReplyViews = async (req, res, next) => {
    const { replyId } = req.params;

    try {
        const reply = await Reply.findById(replyId);
        if (!reply) {
            return res.status(404).json({ error: 'Reply not found' });
        }

 
        reply.views += 1;
        await reply.save();

        return res.status(200).json({ message: 'View count updated for the reply', reply });
    } catch (error) {
        console.error('Error while updating view count:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.handleReplyUpvotes = async (req, res, next) => {
    const { replyId } = req.params;

    try {
        const reply = await Reply.findById(replyId);
        if (!reply) {
            return res.status(404).json({ error: 'Reply not found' });
        }

 
        reply.upvotes += 1;
        await reply.save();

        return res.status(200).json({ message: 'Upvote count updated for the reply', reply });
    } catch (error) {
        console.error('Error while updating upvote count:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.handleReplyDownvotes = async (req, res, next) => {
    const { replyId } = req.params;

    try {
        const reply = await Reply.findById(replyId);
        if (!reply) {
            return res.status(404).json({ error: 'Reply not found' });
        }

 
        reply.downvotes+= 1;
        await reply.save();

        return res.status(200).json({ message: 'Downvote count updated for the reply', reply });
    } catch (error) {
        console.error('Error while updating downvote count:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

 

 

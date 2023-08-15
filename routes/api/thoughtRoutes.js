const router = require('express').Router();

const { getThoughts, getSingleThought, newThought, updateThought, removeThought, newReaction, removeReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(newThought);

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(removeThought);

router.route('/:thoughtId/reactions')
.post(newReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;
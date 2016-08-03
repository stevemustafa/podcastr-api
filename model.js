var mongoose    =     require('mongoose');
var schema      =     mongoose.Schema;

var podcastSchema = schema({
  name: String,
  category: Array,
  img: String,
  saved: Boolean,
  description: String
});

module.exports.PodcastSchema = podcastSchema;

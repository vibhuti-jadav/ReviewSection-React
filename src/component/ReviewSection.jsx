import { useState } from 'react';

function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const text = e.target.text.value;
    const rating = parseInt(e.target.rating.value);

    const newReview = { name, text, rating, id: Date.now() };
    setReviews([newReview, ...reviews]);
    e.target.reset();
  };

  const sortedReviews = [...reviews].sort((a, b) =>
    sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating
  );

  return (
    <div className="max-w-2xl mx-auto  p-6 rounded-lg shadow  border bg-slate-900">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="w-full p-2 border border-white text-white rounded"
        />
        <textarea
          name="text"
          placeholder="Write your review..."
          required
          className="w-full p-2 border border-white text-white  rounded"
        ></textarea>

        <select  name="rating"  required     className="w-full p-2 border border-white text-white  rounded"  >
          <option value="" className='text-black'>Select Rating</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option className='text-black' key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
          ))}
        </select>

        <button  type="submit"  className="bg-blue-600 text-white  hover:bg-blue-700  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2 "  >Submit Review </button>


      </form>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-gray-400 font-semibold">All Reviews</h2>
          <div>
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-4 py-1 text-sm border  rounded-l ${sortOrder === 'asc' ? 'bg-blue-600 p-2 text-white' : 'bg-white rounded-full p-2'}`}
            >
              Lowest
            </button>

            
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-4  py-1 text-sm border rounded-r ${sortOrder === 'desc' ? 'bg-blue-600 p-2 text-white' : 'bg-white p-2 rounded-full'}`}
            >
              Highest
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {sortedReviews.map((review) => (
            <div key={review.id} className="shadow bg-gray-600 p-4 rounded">
              <div className="font-bold text-blue-500">{review.name}</div>
              <div className="text-yellow-500">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-gray-200 mt-2">{review.text}</p>
            </div>
          ))}
          {sortedReviews.length === 0 && (
            <p className="text-gray-500">No reviews yet. Be the first to add one!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;





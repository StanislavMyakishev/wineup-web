import { useState } from 'react'
import ReviewCard from './ReviewCard'

const ReviewBox = () => {
  const [showResults, setShowResults] = useState('hidden')
  const [clicked, setClicked] = useState(false)
  const handleAllReview = () => {
    return (
      clicked ? setClicked(false) : setClicked(true),
      clicked ? setShowResults('hidden') : setShowResults('')
    )
  }
  const reviews = [
    {
      logDate: '11.10.2020',
      logName: 'Petar',
      stars: '1',
      review:
        'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
    },
    {
      logDate: '10.10.2020',
      logName: 'Petar',
      stars: '2',
      review: 'Здесь будут оставлять свои ревю...',
    },
    {
      logDate: '11.10.2020',
      logName: 'Petar',
      stars: '3',
      review:
        'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
    },
    {
      logDate: '11.10.2020',
      logName: 'Petar',
      stars: '4',
      review:
        'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
    },
  ]
  return (
    <div>
      <h1>Отзывы</h1>
      <div className='box'>
        {reviews.map((review, index) => (
          <div
            id={index}
            className={`marginComponent ${index > 2 ? showResults : ''}`}
          >
            <ReviewCard
              logDate={review.logDate}
              logName={review.logName}
              stars={review.stars}
              review={review.review}
            />
          </div>
        ))}
        <div>
          {reviews.length > 3 ? (
            <button
              type='button'
              className='btnAllReviews'
              onClick={() => handleAllReview()}
            >
              <text className='textAllReviews'>
                {clicked ? 'Скрыть' : 'Все отзывы'}{' '}
              </text>
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <style jsx>
        {`
          .box {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .hidden {
            display: none;
          }
          .btnAllReviews {
            display: flex;
            align-self: center;
            background: transparent;
            border: none;
            width: 160px;
            outline: 0;
          }
          .textAllReviews {
            font-size: 12px;
            color: grey;
            font-family: arial;
            font-style: italic;
            text-decoration-line: underline;
            padding-left: 40px;
            cursor: pointer;
          }
          .marginComponent {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  )
}
export default ReviewBox
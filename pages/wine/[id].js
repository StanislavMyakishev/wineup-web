import WinePosition from '../../components/WinePosition'
import ItemDescription from '../../components/ItemDescriptionCard'
import ReviewBox from '../../components/ReviewBox'
import Header from '../../components/Header'
import Search from '../../components/Search'
import Wrapper from '../../components/Wrapper'

const Wine = () => {
  return (
    <Wrapper>
      <Header />
      <Search />
      <div className='wine-position'>
        <WinePosition
          imageSrc='https://amwine.ru/upload/resize_cache/iblock/7bc/620_620_1/7bcaa8fad7ebb211cbcda8a27b5382ba.png'
          info={{
            name: 'Estate Vineyards Sauvignon Blanc',
            grape: 'Арени',
            size: 0.75,
            country: 'Португалия',
            sugar: 'сухое',
            color: 'красное',
            shop: 'Ароматный мир',
            alcohol: 12,
            brand: 'Gevorkian Winery',
            year: 2011,
            fitsPercent: 75,
            stars: 3,
            price: '1200',
            discount: {
              price: '900',
              percent: 12,
            },
          }}
        />
      </div>

      <div className='line' />

      <div className='container'>
        <ItemDescription
          color='Вино элегантного розового цвета.'
          scent='Свежий аромат вина наполнен оттенками полевых цветов.'
          gastro='Вино является идеальным аперитивом, хорошо сочетается со свежими фруктами и десертами.'
          taste='Изысканный вкус вина характеризуется ягодными тонами, легкой кислинкой и богатыми оттенками малины в долгом послевкусии.'
        />

        <div className='line-vertical' />

        <ReviewBox />
      </div>

      <div className='line' />

      <style jsx>{`
        .wrapper {
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
        }

        .wine-position {
          margin-top: 80px;
        }

        .container {
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
        }

        .line {
          width: calc(100% - 120px);
          height: 2px;

          margin: 60px auto;
          padding: 0 60px;

          background-color: rgba(196, 196, 196, 0.5);
        }

        .line-vertical {
          width: 2px;
          min-height: 100%;

          margin: 90px auto 30px auto;

          background-color: rgba(196, 196, 196, 0.5);
        }
      `}</style>
    </Wrapper>
  )
}

export default Wine

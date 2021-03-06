import { useState } from 'react'
import CustomCheckBox from './CustomCheckBox'
import InputPrice from './InputPrice'
import ButtonGroup from './ButtonGroup'

/**
 * @param {string} type - 'checkbox' || 'number' || 'buttons'
 * @param {Array<Object>} inputList - Список полей ввода для этой группы
 * @param {function} onChange - Функция-обработчик изменений для этой группы полей ввода
 * @param props
 * @returns {JSX.Element} InputGroup - Список кастомных полей ввода одной группы
 */
const InputGroup = ({ type, inputList, onChange, ...props }) => {
  let customInputList
  switch (type) {
    case 'checkbox':
      customInputList = inputList.map(checkbox => (
        <li key={checkbox.id}>
          <CustomCheckBox checkbox={checkbox} onChange={onChange} />
        </li>
      ))
      break
    case 'buttons':
      customInputList = <ButtonGroup buttons={inputList} onChange={onChange} />
      break
    case 'number':
      customInputList = (
        <InputPrice
          inputFrom={inputList[0]}
          inputTo={inputList[1]}
          currency={props.currency}
          onChange={onChange}
        />
      )
      break
    default:
      customInputList = <li className={`${type} default`} />
      break
  }
  const fullWidth = type === 'number'
  return (
    <>
      <ul className={`input-list ${fullWidth ? 'full-width' : ''}`}>
        {customInputList}
      </ul>
      <style jsx>
        {`
          .input-list {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            margin: 0 auto;
            width: 165px;
          }
          .full-width {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

const InputContainer = ({ title, type, inputList, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='criteria-title'>{title}</div>
      <div className='list-container'>
        <InputGroup type={type} inputList={inputList} onChange={onChange} />
        <button
          className='arrow-btn'
          onClick={() => setIsOpen(!isOpen)}
          type='button'
        >
          <img
            className={` arrow-${isOpen ? 'down' : 'up'}`}
            src={`assets/arrow${isOpen ? 'Down' : 'Up'}.svg`}
            alt='arrow'
          />
        </button>
      </div>
      <style jsx>
        {`
          .list-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .criteria-title {
            color: white;
            font-size: 22px;
            font-weight: bold;
          }
          .arrow-btn {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px;
          }
        `}
      </style>
    </>
  )
}

export default InputContainer

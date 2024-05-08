import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

const Statistic = (props) => (
  <table>
    <tbody>
      <tr>
        <td>good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{props.all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{props.average}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{props.positive}</td>
      </tr>
    </tbody>
  </table>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <div>
          <h1>give feedback</h1>
          <Button onClick={() => setGood(good + 1)} text='good' />
          <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
          <Button onClick={() => setBad(bad + 1)} text='bad' />
        </div>
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
      </div> 

      <div>
        <h1>statistics</h1>
        <Statistic good={good} neutral={neutral} bad={bad} all={good + neutral + bad} average={(good - bad) / (good + neutral + bad)} positive={(good / (good + neutral + bad)) * 100 + ' %'} />  
                
        
      </div>   
    </div>
  )
}

export default App
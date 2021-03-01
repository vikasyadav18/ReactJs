
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const NpmClock = () => (
  <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)


export default NpmClock; 


// Steps to use npm component ------

// 1.search any type of npm component on google . for ex="npm react clock circle "
// 2.install the package of that perticular component.
// 3.also check the dependany | installation in "package.json" file. 
// 4.import the package .
// 5. call the component to use it. 
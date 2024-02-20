import Formulario from './components/Form'
// import Youtube from './components/Youtube'

import ReactGA from 'react-ga4'

const App = () => {
  // ReactGA.initialize('G-38ZPM6NFPD')

  // Multiple products (previously known as trackers)
  ReactGA.initialize([
    {
      trackingId: 'G-38ZPM6NFPD',
      // gaOptions: {...}, // optional
      // gtagOptions: {...}, // optional
    },
    // {
    //   trackingId: 'your second GA measurement id',
    // },
  ])

  // Send pageview with a custom path
  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    // title: 'Custom Title',
  })

  // Send a custom event
  ReactGA.event({
    category: 'your category',
    action: 'your action',
    // label: 'your label', // optional
    value: 99, // optional, must be a number
    nonInteraction: true, // optional, true/false
    transport: 'xhr', // optional, beacon/xhr/image
  })
  return (
    <div>
      {/* <Youtube /> */}
      <Formulario />
    </div>
  )
}

export default App

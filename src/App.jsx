import './App.css'
import OrganizationalChart from './Pages/OrganizationalChart/OrganizationalChart'
import OrganizationalChartSVG from './Pages/OrganizationalChartSVG'
import PageOne from './Pages/pageOne'
import RecruitmentProcess from './Pages/RecruitmentProcess/RecruitmentProcess'

function App() {
  return (
      <div className="App">
      <PageOne />
      {/* <OrganizationalChart></OrganizationalChart> */}
      <OrganizationalChart></OrganizationalChart>
      <OrganizationalChartSVG></OrganizationalChartSVG>
      <RecruitmentProcess></RecruitmentProcess>
    </div>
  )
}

export default App

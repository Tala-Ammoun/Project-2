import React ,{useState}from 'react'
import Jobs from './Jobs'
// import SearchResults from '../SearchResults.json'
// import SearchBar from '../../components/SearchBar'
import jobTest from  '../../test'


function JobsSearch() {
    console.log(jobTest)
    const [searchTerm, setSearchTerm] = useState("");

    function handleInputChange(event) {
      setSearchTerm(event.target.value);
    }
    console.log(searchTerm)

  function  handleFetchJobs(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2a8fd49437mshbdf1ea1b79875a2p1a77e9jsn52c0b56f707a',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    
    fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }
    
    
  return (
    <div>
       {/* <SearchBar/> */}
       <div className="search">
    <div className="search-input mt-6 flex max-w-md gap-x-4">
     <label htmlFor="job-title" className="sr-only">Job title</label>
     <input id="job-title" name="job" value={searchTerm} type="input"onChange={handleInputChange} className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="What Job are you looking for?"/>
     <button type="submit" onClick={handleFetchJobs} className="search-button flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Get Hired!</button>
   </div>
</div>
       
      {jobTest.jobs_results.map((job,i)=>{
          return(<div key={i}> <Jobs title={job.title} company_name={job.company_name} thumbnail={job.thumbnail} key={job.id} id={i}/>
                       
          </div>)
                 

      })}
      
    </div>
  )

}

export default JobsSearch


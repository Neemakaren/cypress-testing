import {useState} from 'react'
import Accordion from './Accordion';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


const Card = () => {
  const [accordions, setAccordion] = useState([ 
    { 
        key: 1, 
        title: 'What is GeeksforGeeks?', 
        data: `GeeksforGeeks is a one stop solution  
                  for all computer science students.`, 
        isOpen: false
    }, 
    { 
        key: 2, 
        title: 'What GeeksforGeeks offer us?', 
        data: `GeeksforGeeks offers Free Tutorials,  
                  Millions of Articles, Live, Online and  
                  Classroom Courses,Frequent Coding Competitions,  
                  Webinars by Industry Experts, Internship  
                  opportunities and Job Opportunities.`, 
        isOpen: false
    }, 
    { 
        key: 3, 
        title: 'Which is the best portal to study Computer Science?', 
        data: `GeeksforGeeks is the best Computer Science portal  
                  for geeks. It contains well written, well thought  
                  and well explained computer science and programming  
                  articles.`, 
        isOpen: false
    }, 
]); 

const toggleAccordion = (accordionkey) => { 
    const updatedAccordions = accordions.map((accord) => { 
        if (accord.key === accordionkey) { 
            return { ...accord, isOpen: !accord.isOpen }; 
        } else { 
            return { ...accord, isOpen: false }; 
        } 
    }); 

    setAccordion(updatedAccordions); 
}; 

  return (
   <>
    <div> 
            {/* <Navbar/>  */}
            <div className="p-2 m-8"> 
                <h2 className='text-2xl mb-2 mx-auto text-green-800 w-[1100px]  my-0 mx-auto'>FREQUENTLY ASKED QUESTIONS</h2> 
                {accordions.map((accordion) => ( 
                    <Accordion 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                        
                    /> 
                ))} 
            </div> 
        </div> 
        <div className=' gap-2 flex  flex-row sm:justify-start w-[1100px] my-0 mx-auto my-8 px-4 pt-8'> 
            <h6 className='pr-6 '>Share This:</h6>
            <FaFacebook className='mr-2 mr-8 text-2xl hover:text-[#55A747]'/>
          <FaInstagram className='mr-8 text-2xl hover:text-[#55A747]'/>
          <FaTwitter className='mr-8 text-2xl hover:text-[#55A747]'/>
          <FaYoutube className='mr-8 text-2xl hover:text-[#55A747]'/>
        </div>
   </>
  )
}

export default Card
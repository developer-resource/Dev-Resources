import React from 'react'
import { VscLocation } from 'react-icons/vsc'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { AiOutlineBulb, AiOutlineCalendar } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { LuSchool2 } from 'react-icons/lu'
const CardDetailsComponent = ({ duration = 10, startDate = 10, batch = 10 }) => {

    return (
        <div className='dark:text-colorTextDark p-4 w-screen text-colorText '>
            {/* Heading */}
            <section className='text-center flex justify-center items-center md:mt-5'>
                <div className='flex gap-10 items-center flex-col justify-center'>
                    <img
                        className='h-32 rounded w-3h-32 overflow-hidden item object-contain'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' alt='organizationLogo' />
                    {/* <p className='text-2xl'>Spenza Pvt Ltd.</p> */}
                    <h1 className='text-7xl font-extrabold text-gray-600 dark:text-gray-200'>Meta Pvt. Ltd</h1>
                </div>
            </section>

            {/* Card Content */}
            <section className='text-md justify-evenly lg:text-2xl shadow-xl p-3 lg:p-10 rounded flex flex-col gap-10 mt-16 '>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-12 w-[60%]'>
                        <div className='flex'>
                            <span className='font-bold flex items-center'><LiaLaptopCodeSolid size={30} className='me-2' /> Job Type -</span>
                            <span className='ms-2'>Internship</span>
                        </div>

                        <div className='flex'>
                            <span className='font-bold flex items-center'><VscLocation size={30} className='me-2' /> Location -</span>
                            <span className='ms-2'>Siwan, USA</span>
                        </div>

                        <div className='flex'>
                            <div className='flex gap-2 flex-wrap items-start w-[80%]'>

                                {/* Skills */}
                                <span className='font-bold flex items-center'><AiOutlineBulb size={30} className='me-2' /> Skills -</span>
                                <div className='flex w-[80%] gap-8 flex-wrap'>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>JavaScript</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>React.js</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Webpack</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Tailwind CSS</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Slack</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Slack</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Python</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Scikit Learn</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>Clickup</span>
                                    <span className='rounded-full border border-gray-600 text-gray-600 dark:border-none dark:bg-gray-600  text-[1rem] dark:text-gray-300 px-4 py-1 font-semibold '>JavaScript</span>
                                </div>

                            </div>
                        </div>

                        <div className='flex'>
                            <span className='font-bold flex items-center'><MdAttachMoney size={30} className='me-2' /> Stipend -</span>
                            <span className='ms-2'>$2150</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-12 w-[40%] text-start'>
                        {duration &&
                            <div className='flex'>
                                <span className='font-bold flex items-center'><BiTimeFive size={30} className='me-2' /> Duration -</span>
                                <span className='ms-2'>6 Months</span>
                            </div>
                        }

                        {startDate &&
                            <div className='flex'>
                                <span className='font-bold flex items-center'><AiOutlineCalendar size={30} className='me-2' /> Start Date -</span>
                                <span className='ms-2'>6 Months</span>
                            </div>
                        }

                        {batch &&
                            <div className='flex'>
                                <span className='font-bold flex items-center'><LuSchool2 size={30} className='me-2' /> Batch -</span>
                                <span className='ms-2'>2023,24,25</span>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    <div>
                        <span className='font-bold flex mb-3 cursor-pointer underline'><BsInfoCircle size={30} className='me-2' /> About Job</span>
                    </div>
                    <div>
                        <p className='text-start'>
                            Company Overview:

                            ABC Corporation is a leading global technology company that specializes in developing innovative software solutions for various industries. With a diverse team of professionals and a commitment to excellence, we are dedicated to delivering cutting-edge products and services to our clients worldwide.

                            Job Description:

                            We are seeking a talented and creative Content Writer to join our dynamic marketing team. As a Content Writer, you will be responsible for producing high-quality and engaging content across various platforms, including website articles, blog posts, social media posts, email newsletters, and more. Your role will involve conducting thorough research on industry-related topics, creating compelling narratives, and optimizing content for search engines.

                            Responsibilities:

                            Create well-researched and compelling content for various platforms, such as website articles, blog posts, social media posts, and email newsletters.
                            Conduct thorough research on industry-related topics to ensure accuracy and relevance of content.
                            Collaborate with the marketing team to develop content strategies and ensure consistency in brand messaging.
                            Optimize content for search engines to improve organic visibility and drive website traffic.
                            Edit and proofread content to ensure grammatical accuracy and adherence to brand guidelines.
                            Stay updated with industry trends, best practices, and emerging technologies to continuously improve content quality and effectiveness.
                            Collaborate with graphic designers and multimedia specialists to enhance content with visuals and multimedia elements.
                            Monitor and analyze content performance using relevant metrics and make data-driven recommendations for improvement.
                            Manage multiple projects and meet deadlines in a fast-paced and deadline-driven environment.
                            Contribute to brainstorming sessions and idea generation for content marketing initiatives.
                            Qualifications:

                            Bachelor's degree in English, Journalism, Marketing, or a related field.
                            Proven experience as a content writer or in a similar role.
                            Exceptional writing and editing skills with a keen eye for detail.
                            Strong research skills and ability to transform complex information into clear and concise content.
                            Familiarity with SEO principles and best practices.
                            Proficiency in using content management systems (CMS) and other relevant tools.
                            Excellent organizational and time management skills.
                            Ability to work both independently and collaboratively in a team environment.
                            Strong communication and interpersonal skills.
                            Portfolio of previous writing samples demonstrating creativity and versatility.
                            Benefits:

                            Competitive salary package.
                            Comprehensive health and dental insurance.
                            Retirement savings plan.
                            Flexible work hours.
                            Professional development opportunities.
                            Collaborative and inclusive work culture.
                            Exciting projects and opportunities for growth.
                            Application Process:

                            To apply for this position, please submit your resume, cover letter, and writing samples to [email protected] with the subject line "Content Writer Application - [Your Name]." Only shortlisted candidates will be contacted for further evaluation.
                        </p>
                    </div>

                </div>


                <div className='text-center'>
                    <button className='px-10 py-1 rounded-full font-bold  bg-indigo-600 dark:bg-white dark:hover:bg-gray-100 dark:text-black hover:bg-indigo-700 text-white text-md '>Apply</button>
                </div>
            </section>
        </div>
    )
}

export default CardDetailsComponent
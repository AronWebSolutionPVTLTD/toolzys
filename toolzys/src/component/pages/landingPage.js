import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const LandingPage =()=> {
    
        return (
        <div className="App">
            {/* header section  */}
            <header className='py-34px'>
                <div className="px-5 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <span className="logo_icon_box block w-42px h-42px lg:w-29px lg:h-29px bg-logo-icon-bg p-1">
                                <img src="images/logo-icon.png" className='h-29px lg:h-auto' alt='logo' />
                            </span>
                            <span className="block h-29px p-1 -mb-1"><img src="images/logo-text.png" alt='Toolzys' className="max-w-full h-full object-contain" /></span>
                        </div>
                        <div className="landingpage_navigation">
                            <span className='w-36px block lg:hidden'><img src='Images/hamburger-icon.png' /></span>
                            <ul className='hidden lg:flex items-center gap-x-8'>
                                <li className='nav_item'><a className='nav_link'>Resources</a></li>
                                <li className='nav_item'><a className='nav_link'>Pricing</a></li>
                                <li className='nav_item'><a className='nav_link'>Templates</a></li>
                                <li className='nav_item'><a className='nav_link'>Products</a></li>
                                <li className='nav_item'><a className='nav_link'>Login</a></li>
                                <li className='nav_item'><a className='btn btn-solid uppercase'>Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </header>

            {/* Monetize section  */}
            <section className='monetize_section flex flex-wrap items-center py-8'>
                <div className='container'>
                    <div className='monetize_main flex justify-center text-center'>
                        <div className='monetize_content max-w-930px'>
                            <h2 className='text-5xl font-bold leading-58px mb-14 capitalize'><span className='text-highlight-color'>Monetize</span> your passion, build your empire</h2>
                            <p className='text-32px leading-35px mb-14'>With so many selling options and features, content creators can now make money from their fanbase.</p>
                            <div className='flex items-center justify-center gap-8 flex-wrap hero_btn_wrapper'>
                                <a className='btn btn-outline min-w-300px min-h-74px'>Toolzys.com/<span className='text-grey-color'>username</span></a>
                                <a className='btn gradient-bg min-w-300px min-h-74px'>Build your empire</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            {/* Hero section  */}
            <section className='hero_section h-screen md:h-auto relative'>
                <div className='hero_content'>
                    <div className='container'>
                        <h2 className='text-center text-5xl leading-70px capitalize font-bold'>There is <span className='text-highlight-color'>no limit</span> to what you can <span className='uppercase text-red-color'>earn</span></h2>
                    </div>   
                </div>
                <div className='hero-img absolute top-0 left-0 md:static'>
                    <img src='Images/hero-img.png' alt='Hero Image' />
                </div>
                <div className='hero_btn_wrapper absolute bottom-20 md:bottom-52 left-0 w-full text-center'><a className='btn gradient-bg min-w-247px min-h-74px uppercase'>start earning</a></div>
            </section>

            {/* Features section  */}
            <section className='h-screen md:h-auto relative -mt-1px'>
                <div className='absolute top-0 left-0 md:static w-full h-full'>
                    <img src="Images/features-bg.png" className='w-full h-full object-cover' alt='Features' />
                </div>
                <div className='absolute top-1/2 left-0 w-full right-0 -translate-y-1/2'>
                    <h2 className='text-center text-4xl leading-54px text-white font-bold capitalize'>Features to Monetize</h2>
                    <div className='features_container my-40'>
                    <Swiper
                    className='text-white'
                    spaceBetween={50}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 3.5,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 4.5,
                            spaceBetween: 50,
                        },
                        1555: {
                            slidesPerView: 5.5,
                            spaceBetween: 50,
                        }
                    }}
                    >
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/Communication.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>Live Chat</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/vide-chat-icon.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>VIDEO CHAT</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/donation-icon.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>DONATIONS</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/voice-call-icon.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>VOICE CALL</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/Communication.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>Live Chat</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/Communication.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>Live Chat</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='feature_item gradient-bg grid justify-items-center gap-y-6 p-6 rounded-20px'>
                                <img src="Images/Communication.png" alt="Communication" />
                                <p className='uppercase text-2xl leading-35px'>Live Chat</p>
                                <a className='btn uppercase bg-green-bg min-h-46px gap-x-2'>Upgarde <span className='text-red-color-1'>Pro</span></a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </section>

            {/* Image with text section  */}
            <section className='min-h-screen pt-16'>
                <div className='container h-full grid'>
                    <div className='text-center'>
                        <div className='mb-8'>
                            <h2 className='uppercase text-32px leading-35px font-bold mb-4'>Why join Toolzys?</h2>
                            <p className='text-primary-color font-semibold text-xl leading-9'>Without going into a rant, lemme give you 3 main reasons:</p>
                        </div>
                        <div className='text-xl font-semibold leading-9 text-primary-color max-w-1265px mx-auto'>
                            <p>1. A haven for NSFW content creatorsIt is the ONLY platform of its kind that allows adult content creators to monetize theirNSFW content and earn money online in a safe and secure way!</p>
                            <p>2. AI-enabled analytics toolWith our latest analytics tools, you can monitor your growth with microscopicprecision! You can not only track your media links across the web but can also seethe performance of your custom links, social media links, and landing page. All thesetidbits help you fill up on your mistakes and boost your growth!</p>
                            <p>3. UNLIMITED media hosting!Yes, you read that right. Gone are the days when you had to delete your archivedfiles for lack of space. Now, upload as many naughty selfies as you want without anyhesitation. Let those pics and videos speak for you as your wallet grows</p>
                        </div>
                    </div>
                    <div className='mt-24 md:mt-52'>
                        <img src='Images/Phone-section.png' className='mx-auto' />
                    </div>
                </div>
            </section>

            {/* Image with text overlay section */}
            <section className='image_text_overlay relative min-h-70vh md:h-auto'>
                <div className='absolute top-0 left-0 md:static w-full h-full'>
                    <img src="Images/image-text-bg.jpg" className='w-full h-full object-cover' alt='An Opportunity to increase your fanbase' />
                </div>
                <div className='container'>
                    <div className='grid text-center justify-items-center absolute top-1/2 -translate-y-1/2 left-0 w-full right-0'>
                    <h2 className='text-white text-26px leading-39px max-w-215px mb-14 font-bold'>An Opportunity to increase your fanbase</h2>
                    <a className='btn btn-outline uppercase'>Join now</a>
                    </div>
                </div>
            </section>

            {/* Image with text section  */}
            <section className='min-h-screen py-16 md:py-24'>
                <div className='container h-full grid'>
                    <div className='mb-16 md:mb-32'>
                        <img src='Images/social-icons.png' className='mx-auto mb-10' />
                        <img src='Images/iphone12.png' className='mx-auto' />
                    </div>
                    <div className='text-center'>
                        <h2 className='text-2xl leading-35px font-semibold mb-8'>Stay connected to everyOne</h2>
                        <div className='text-2xl font-medium leading-9 text-logo-icon-bg max-w-920px mx-auto capitalize'>
                            <p className='mb-8'>For an adult content creator, managing multiple platforms could get tiring. Not anymore!On Toolzys, </p>
                            <p>you get to link all your social media platforms and have your own NSFW empireright here.So get your moves from Youtube, shake a leg with your followers on TikTok, and automateyour posts on Reddit while tweeting about them on Twitter in just one platform: </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social media section */}
            <section className='py-24 md:py-52'>
                <div className='container'>
                    <h2 className='text-center text-32px leading-48px mb-16 md:mb-32 font-bold'>Join our online <span className='italic font-semibold text-dark-red-color'>Community</span></h2>
                    <div className='flex justify-center gap-x-6 md:gap-x-14'>
                        <a><img src="Images/twitter-icon.png" /></a>
                        <a><img src="Images/fb-icon.png" /></a>
                        <a><img src="Images/linkedin-icon.png" /></a>
                        <a><img src="Images/instagram-icon.png" /></a>
                    </div>
                </div>
            </section>

            {/* Newsletter section */}
            <section className='py-12 md:py-24'>
                <div className='container'>
                    <div className='max-w-547px mx-auto'>
                        <h2 className='text-center text-32px leading-48px mb-16 font-bold'>Get the latest <span className='italic font-semibold text-dark-red-color'>Updates </span></h2>
                        <form className='newsletter_form grid justify-items-center'>
                            <input type="email" name="email" placeholder='Enter your email address.....' className='text-dark-grey-color mb-4 text-19px block w-full min-h-74px bg-logo-icon-bg/30 text-center' />
                            <button type="submit" className='btn btn-solid min-h-58px'>Subscribe</button>
                        </form>
                    </div>
                    
                </div>
            </section>

            {/* Footer */}
            <footer className='bg-primary-color py-16 mt-24 md:mt-52'>
                <div className='container'>
                    <div className='flex flex-wrap lg:flex-nowrap justify-center md:justify-between gap-y-7 gap-x-5'>
                        <div className='footer_logo_col flex items-center justify-center lg:justify-start'>
                            <div className='flex items-center gap-x-6'>
                                <span className="logo_icon_box flex justify-center items-center w-71px h-67px bg-logo-icon-bg p-1"><img src="images/logo-icon.png" className='h-39px' alt='logo' /></span>
                                <span className='text-2xl text-white leading-9 font-semibold uppercase'>TOOLZYS</span>
                            </div>
                        </div>
                        <div className='footer_col text-center'>
                            <p className='text-white text-lg font-bold leading-7 mb-4'>Company</p>
                            <ul className='font-bold'>
                                <li className='footer_nav_item'><a>About us</a></li>
                                <li className='footer_nav_item'><a>Blog</a></li>
                                <li className='footer_nav_item'><a>Career</a></li>
                                <li className='footer_nav_item'><a>Help center</a></li>
                            </ul>
                        </div>
                        <div className='footer_col text-center'>
                            <p className='text-white text-lg font-bold leading-7 mb-4'>Products</p>
                            <ul className='font-bold'>
                                <li className='footer_nav_item'><a>Security</a></li>
                                <li className='footer_nav_item'><a>API</a></li>
                                <li className='footer_nav_item'><a>Interest</a></li>
                                <li className='footer_nav_item'><a>Blockchain</a></li>
                            </ul>
                        </div>
                        <div className='footer_col text-center'>
                            <p className='text-white text-lg font-bold leading-7 mb-4'>Support</p>
                            <ul className='font-bold'>
                                <li className='footer_nav_item'><a>FAQ</a></li>
                                <li className='footer_nav_item'><a>Request Form</a></li>
                                <li className='footer_nav_item'><a>Support 24/7</a></li>
                                <li className='footer_nav_item'><a>Glossary</a></li>
                            </ul>
                        </div>
                        <div className='footer_col text-center flex items-center'>
                            <div className='language_selector w-full'>
                                <p className='text-white block text-lg font-bold leading-7 mb-8'>Languages</p>
                                <div className='language_selector_box px-4 py-1 border-2 border-solid border-white/60 rounded-xl text-dark-grey-color-2'>
                                    <div className='active_language flex justify-between items-center'><span className='lang_item'>English</span><img src="Images/arrow-down.png" /></div>
                                    <div className='language_option_box hidden'>
                                        <span className='lang_item'>English</span>
                                        <span className='lang_item'>French</span>
                                        <span className='lang_item'>Spanish</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        );
    } 
export default LandingPage;
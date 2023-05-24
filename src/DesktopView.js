import React from 'react';
import appleAppStore from './assets/image/AppStore.svg';
import googlePlay from './assets/image/GooglePlay.svg';
import instagram from './assets/image/instagram.svg';
import mail from './assets/image/mail.svg';
import rightMobile from './assets/image/right-mobile.jpg';
import whatsApp from './assets/image/whatsapp.svg';
import logo from './assets/logo/logo.svg';

const DesktopView = () => {
    return (
        <section className='flex gap-x-1 ml-10'>
            <div className=''>
                <img src={logo} alt="" className='mt-[77px] w-12' />
            </div>
            <div className='flex items-center w-full'>
                <div className='w-full flex flex-col items-start justify-between gap-y-48'>
                    <div className='w-full'>
                        <h2 className='text-4xl font-bold text-black w-96 mb-20'>
                            O primeiro app em prol da dignidade menstrual
                        </h2>
                        <form className='w-full'>
                            <label className=''>
                                <p className='text-xl font-semibold'>Insira o seu nome na lista!</p>
                            </label>
                            <label className="bg-[#CC72FF] rounded-[38px] flex mt-2 items-center gap-x-12">
                                <input type="text" placeholder="Seu e-mail" className="text-purple focus:outline-none shadow-box border-2 border-border-color bg-white rounded-[40px] pl-[26px] py-[15px]" />
                                <span className='text-[#fff] font-medium text-xl'>Quero ser Opal</span>
                            </label>
                        </form>
                    </div>
                    <div className='flex items-center gap-x-[53px]'>
                        <img src={googlePlay} alt="" className='w-40' />
                        <img src={appleAppStore} alt="" className='w-40' />
                    </div>
                </div>
                <div className='relative'>
                    <img src={rightMobile} alt="" />
                    <div className='absolute bottom-5 right-10 flex items-center justify-center gap-x-4 px-4 py-2 bg-purple-social rounded-full'>
                        <h2 className='text-[#361252] '>Fale conosco</h2>
                        <div className='flex gap-x-2 '>
                            <img src={whatsApp} alt="" className='w-10' /><img src={mail} alt="" className='w-10' /><img src={instagram} alt="" className='w-10' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesktopView;
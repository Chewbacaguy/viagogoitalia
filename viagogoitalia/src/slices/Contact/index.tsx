"use client";
import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import clsx from "clsx";
import { PiArrowsClockwise, PiGear, PiPhoneCallFill } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";
import React, { useState, useEffect} from 'react';
import emailjs from '@emailjs/browser'
import { createClient } from "@/prismicio";

export type ContactProps = SliceComponentProps<Content.ContactSlice>;

const Contact = ({ slice }: ContactProps): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    // This effect will only run once after the initial render
    // You can put any initialization logic here if needed
    console.log('Component mounted');
    return () => {
      // This cleanup function will be called when the component unmounts
      console.log('Component unmounted');
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("viagogoitalia", "viagogo_italia", formData, "5irujdBHzvTm6UJZp")
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
          setMessage("Your email was sent successfully!");
          setFormData({
            name: "",
            email: "",
            description: "",
          });
        },
        (error) => {
          console.log(error.text);
          console.log("it aint working yet")
          setEmailSent(false);
          setMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (

    <Bounded data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    >
       {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              className="rounded-lg "
              field={slice.primary.image}
              priority
              sizes="90vw"
            />
       )}
      <div className="container px-6 md:px-12">
        <div
        className="block rounded-lg bg-white/10 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-white/20">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"> 
          <form onSubmit={sendEmail}>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none "
                  id="exampleInput91"
                  placeholder=" " 
                  onChange={handleChange} name="name"/>
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0] truncate pt-[0.32rem] leading-[1.6] text-white opacity-0 transition-all duration-200 ease-out peer-focus:top-[0.2rem] peer-focus:scale-[0.8] peer-focus:-translate-y-8 peer-focus:text-white peer-placeholder-shown:opacity-100"
              >Nome
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input type="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" 
                  placeholder=" "
                  onChange={handleChange} name="email"/>
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white opacity-0 transition-all duration-200 ease-out peer-focus:top-[0.5rem] peer-focus:scale-[0.8] peer-focus:-translate-y-8 peer-focus:text-primary peer-placeholder-shown:opacity-100"
              >Indirizzo e-mail
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <textarea
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none rows-3"
              id="exampleFormControlTextarea1" placeholder=" "
              onChange={handleChange} name="description"></textarea>
            <label
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white opacity-0 transition-all duration-200 ease-out peer-focus:top-[0.2rem] peer-focus:scale-[0.8] peer-focus:-translate-y-8 peer-focus:text-primary peer-placeholder-shown:opacity-100">
              Message
            </label>
          </div>
            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                  className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                  type="checkbox" value="" id="exampleCheck96" checked />
              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" >
                    Inviami una copia di questo messaggio
                </label>
            </div>
            <button type="submit"
                className="mb-6 w-full rounded bg-white text-yellow-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                Inviare
              </button>

              {emailSent && (
                <p className="text-center text-gradient font-bold italic text-sm pt-2 mr-6">{message}</p>
                )}
                {!emailSent && (
                <p className="text-center text-red-600 font-bold italic text-sm pt-2 ml-2 mr-6">{message}</p>
              )}
          </form>



          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-6 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-white p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="black" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Contatto
                  </p>
                  <a href="tel:+393278072900 text-sm text-slate-100">
                        +39 3278072900
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="srink-0">
                  <div className="inline-block rounded-md bg-white p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="black" className="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Email
                  </p>
                  <p className="text-sm text-slate-100">
                    <a href="mailto:visosobigliettionline@gmail.com" className="text-sm text-slate-100">
                      visosobigliettionline@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-yellow-400 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="black" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Mobile</p>
                  <p className="text-sm text-slate-100">
                    <a href="tel:+393278072900" className="text-sm text-slate-100">
                      +39 3278072900
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-yellow-400 p-4 text-primary relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="black" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md"></div>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Email</p>
                  <a href="mailto:visosobigliettionline@gmail.com" className="text-sm text-slate-100">
                      visosobigliettionline@gmail.com
                    </a>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        </div>
        </div>
        
        
        
        </div>
      
  
      
    </Bounded>
   

  );
};

export default Contact;

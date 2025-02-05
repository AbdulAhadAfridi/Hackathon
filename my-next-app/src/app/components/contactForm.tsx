// import React from 'react'

// const contactForm = () => {
//   return (
//     <>
//      {/* Contact Form */}
//      <div className="bg-white w-full lg:w-[531px] h-auto lg:h-[734px] mt-8 lg:mt-14 p-8">
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block font-medium text-black text-base md:text-lg mb-2"
//                 >
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
//                   placeholder="Abc"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block font-medium text-black text-base md:text-lg mb-2"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
//                   placeholder="Abc@def.com"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="subject"
//                   className="block font-medium text-black text-base md:text-lg mb-2"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
//                   placeholder="This is optional"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="message"
//                   className="block font-medium text-black text-base md:text-lg mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   className="block w-full h-32 p-4 border border-gray-300 rounded-[10px] shadow-sm"
//                   placeholder="Hi! I would like to ask about..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full lg:w-[237px] lg:h-[48px] h-12 mt-8 px-6 py-2 border border-black text-black font-semibold rounded-[10px] hover:bg-black hover:text-white"
//               >
//                 Submit
//               </button>
//             </div>
//     </>
//   )
// }

// export default contactForm


"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { client } from "@/sanity/lib/client"
const formSchema = z.object({
    yourName: z.string().min(1, "Name is required").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(1, "Message is required").max(500, "Message must be less than 500 characters"),
})


type FormType = z.infer<typeof formSchema>
const ContactForm = () => {
    const form = useForm<FormType>({
        resolver:zodResolver(formSchema),
        defaultValues: {
          yourName: "",
        },
      })
     
     async function onSubmit(values: FormType) {
      await client.create({
        _type: "contactForm",
        name: values.yourName,
        email: values.email,
        subject: values.subject,
        message: values.message,
       })
      }
    

  return (
    <div>
        <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white w-full lg:w-[531px] h-auto lg:h-[734px] mt-8 lg:mt-14 p-8 space-y-8">
    {/* Name Field */}
    <FormField
      control={form.control}
      name="yourName"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block font-medium text-black text-base md:text-lg mb-2">Your Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="Abc"
              className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Email Field */}
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block font-medium text-black text-base md:text-lg mb-2">Email Address</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="email"
              placeholder="Abc@def.com"
              className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Subject Field */}
    <FormField
      control={form.control}
      name="subject"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block font-medium text-black text-base md:text-lg mb-2">Subject</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="This is optional"
              className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Message Field */}
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block font-medium text-black text-base md:text-lg mb-2">Message</FormLabel>
          <FormControl>
            <textarea
              {...field}
              placeholder="Hi! I would like to ask about..."
              className="block w-full h-32 p-4 border border-gray-300 rounded-[10px] shadow-sm"
            ></textarea>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button
      type="submit"
      className="w-full lg:w-[237px] lg:h-[48px] h-12 mt-8 px-6 py-2 border border-black text-black font-semibold rounded-[10px] hover:bg-black hover:text-white"
    >
      Submit
    </Button>
  </form>
</Form>
      
    </div>
  )
}

export default ContactForm


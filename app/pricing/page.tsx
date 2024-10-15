'use client ' ;
import { Navbar } from "@/components/Navbar";

 

/*
const pricingPlans = [
    {
      name: "Basic",
      price: "9",
      priceId: "price_1PyFKGBibz3ZDixDAaJ3HO74",
      features: [
        "100 AI-generated posts per month",
        "Twitter thread generation",
        "Basic analytics",
      ],
    },
    {
      name: "Pro",
      price: "29",
      priceId: "price_1PyFN0Bibz3ZDixDqm9eYL8W",
      features: [
        "500 AI-generated posts per month",
        "Twitter, Instagram, and LinkedIn content",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      priceId: null,
      features: [
        "Unlimited AI-generated posts",
        "All social media platforms",
        "Custom AI model training",
        "Dedicated account manager",
      ],
    },
  ];*/
  
  export default function PricingPage () {

    return (
        <div className="min-h-screen bg-black text-gray-100"> 
        <Navbar/>
        <main className="container mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Pricing Plans
        </h1>    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
        </div>
          </main>
        </div>
    )
  }
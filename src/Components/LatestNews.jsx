import { useState } from "react"

 const news= [
    {
      "id": 1,
      "title": "স্কুল শিক্ষার্থীদের মধ্যে বিনামূল্যে ড্রেস, ব্যাগ ও জুতা বিতরণ শুরু জুলাই থেকে",
      "summary": "সরকার দেশের সরকারি প্রাথমিক বিদ্যালয়ের ১ কোটি ৭ লাখ শিক্ষার্থীর মধ্যে পর্যায়ক্রমে বিনামূল্যে ড্রেস, ব্যাগ, জুতা ও মোজা বিতরণের উদ্যোগ নিয়েছে। আগামী জুলাই থেকে একটি পাইলট প্রকল্পের মাধ্যমে প্রথম পর্যায়ে ৪ লাখের বেশি শিক্ষার্থীর মাঝে এসব সামগ্রী বিতরণ করা হবে।",
      "published_date": "২০২৬-০৬-০৮",
      "source": "দ্যা বিজনেস স্ট্যান্ডার্ড",
      "url": "https://www.tbsnews.net/bangladesh/govt-provide-free-uniforms-bags-shoes-and-socks-107m-primary-students-1457316",
      "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop"
    },
    {
      "id": 2,
      "title": "একদিনে ৫০% উপস্থিতি, তাপপ্রবাহে ফের schools বন্ধের দাবি",
      "summary": "তীব্র তাপপ্রবাহের কারণে রাজধানীর বিভিন্ন প্রাথমিক বিদ্যালয়ে উপস্থিতি উল্লেখযোগ্যভাবে কমেছে, কিছু স্কুলে ৫০ শতাংশের কাছাকাছি ছিল। এর পরিপ্রেক্ষিতে, রাজধানীসহ পাঁচ জেলার মাধ্যমিক বিদ্যালয় ও কলেজ বন্ধ রাখার সিদ্ধান্ত নিয়েছে সরকার। তবে প্রাথমিক স্তরের ক্লাস চালু রাখায় অভিভাবকরা তাদের বিদ্যালয় বন্ধের দাবি জানিয়েছেন।",
      "published_date": "২০২৬-০৫-২০",
      "source": "নিউএইজ",
      "url": "https://newagebd.net/post/Education/233888/low-presence-of-students-seen-at-dhaka-primary-schools-amid-heatwave",
      "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop"
    },
    {
      "id": 3,
      "title": "নতুন শিক্ষাক্রমে ষষ্ঠ শ্রেণি থেকেই বাধ্যতামূলক কারিগরি শিক্ষা",
      "summary": "প্রধানমন্ত্রীর শিক্ষা উপদেষ্টা মাহদী আমিন জানিয়েছেন, দেশের শিক্ষাব্যবস্থাকে দক্ষতাভিত্তিক ও কর্মমুখী করতে ষষ্ঠ শ্রেণি থেকেই প্রযুক্তিগত ও বৃত্তিমূলক শিক্ষা বাধ্যতামূলক করার পরিকল্পনা নিয়েছে সরকার। এই লক্ষ্যে আগামী অর্থবছরের বাজেটে প্রায় ১৪ লাখ ট্যাবলেট বিতরণের একটি বড় প্রকল্পও অন্তর্ভুক্ত করা হয়েছে।",
      "published_date": "২০২৬-০৬-০৮",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/news/393613",
      "image": "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sfGVufDB8fDB8fHww"
    },
    {
      "id": 4,
      "title": "মাদ্রাসা ব্যবস্থাপনা কমিটির সভাপতি হতে স্নাতক ডিগ্রি বাধ্যতামূলক",
      "summary": "মাদ্রাসা শিক্ষার মানোন্নয়নে যুগান্তকারী সিদ্ধান্ত নিয়ে সরকার ঘোষণা করেছে, বেসরকারি দাখিল, আলিম ও ফাজিল মাদ্রাসার ব্যবস্থাপনা কমিটির সভাপতি হতে প্রার্থীদের ন্যূনতম স্নাতক বা সমতুল্য ডিগ্রি থাকতে হবে। সিদ্ধান্তটি তাৎক্ষণিকভাবে কার্যকর হয়েছে এবং এতে অপরাধের সাথে জড়িতদের অযোগ্য ঘোষণা করা হয়েছে।",
      "published_date": "২০২৬-০৫-২০",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/news/education-news/388977",
      "image": "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 5,
      "title": "নতুন শিক্ষাক্রম নিয়ে গুঞ্জন উড়িয়ে দিয়ে শিক্ষামন্ত্রীর সাফ কথা: 'বাংলা ও ইতিহাস বাদ দেওয়ার পরিকল্পনা নেই'",
      "summary": "শিক্ষামন্ত্রী ড. এ এন এম এহছানুল হক মিলন স্পষ্ট করে বলেছেন, অনার্স কোর্স থেকে বাংলা, দর্শন ও ইতিহাসের মতো মৌলিক বিষয়গুলো বাদ দেওয়ার কোনো পরিকল্পনা বা আলোচনা সরকারের নেই। গণমাধ্যমে প্রচারিত এই গুজব সম্পূর্ণ ভিত্তিহীন বলে দাবি করেন তিনি।",
      "published_date": "২০২৬-০৬-০৯",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/news-flash/393900",
      "image": "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=500&fit=crop"
    },
    {
      "id": 7,
      "title": "পাঁচ শিক্ষা বোর্ড ও এনসিটিবিতে নতুন চেয়ারম্যান",
      "summary": "সরকার মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তরের আওতাধীন পাঁচটি শিক্ষা বোর্ড এবং জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ডে (এনসিটিবি) নতুন চেয়ারম্যান নিয়োগ দিয়েছে। এই রদবদলের মাধ্যমে বোর্ডগুলোর প্রশাসনকে আরও গতিশীল ও জবাবদিহিতার আওতায় আনার লক্ষ্য নেওয়া হয়েছে।",
      "published_date": "২০২৬-০৬-০৮",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/others/393745",
      "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop"
    },
    {
      "id": 8,
      "title": "নারায়ণগঞ্জে ৪.৫ লাখ শিক্ষার্থীর মাঝে জুলাইয়ের মধ্যেই ড্রেস বিতরণ",
      "summary": "শিক্ষামন্ত্রী ড. এ এন এম এহছানুল হক মিলন নারায়ণগঞ্জে এক অনুষ্ঠানে জানান, আগামী জুলাইয়ের মধ্যেই জেলার প্রায় ৪.৫ লাখ প্রাথমিক বিদ্যালয়ের শিক্ষার্থীর মাঝে স্কুল ড্রেস বিতরণের উদ্যোগ নেওয়া হয়েছে।",
      "published_date": "২০২৬-০৬-১৩",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/news/393613",
      "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=500&fit=crop"
    },
    {
      "id": 9,
      "title": "চীনা দূতাবাসের শিক্ষা উপকরণ বিতরণ",
      "summary": "বাংলাদেশে নিযুক্ত চীনা রাষ্ট্রদূত ইয়াও ওয়েন ঠাকুরগাঁওয়ে এক অনুষ্ঠানে শিক্ষার্থীদের মাঝে চীন-বাংলাদেশ বন্ধুত্বের অংশ হিসেবে শিক্ষা উপকরণ বিতরণ করেন।",
      "published_date": "২০২৬-০৬-১২",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/news/393613",
      "image": "https://images.unsplash.com/photo-1740635341299-3b8e3490f546?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 10,
      "title": "শিক্ষার্থীদের সৃজনশীলতা বাড়াতে রাজশাহীতে উদ্ভাবনী প্রতিযোগিতা",
      "summary": "রাজশাহীর পাবা উপজেলায় শিক্ষার্থীদের সৃজনশীলতা ও বিজ্ঞান চর্চায় উৎসাহিত করতে স্টার্টআপ, বিজ্ঞান প্রকল্প ও উদ্ভাবনী আইডিয়া নিয়ে এক দিনব্যাপী প্রদর্শনী ও প্রতিযোগিতার আয়োজন করা হয়।",
      "published_date": "২০২৬-০৬-১২",
      "source": "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
      "url": "https://www.bssnews.net/news/393613",
      "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop"
    },

  ]

const LatestNews = () => {

  const [showAll,setShowAll] = useState(false)
  const visibleNews = showAll ? news: news.slice(0,3)
  return (
    <div className="my-10 max-w-7xl mx-auto">

       <div>
        <h3 className="text-4xl font-bold text-yellow-400 text-center mt-10 p-2">Latest News</h3>
        <span className="block w-30 border-t-2 border-t-amber-400 h-2 mx-auto mb-10"></span>
       </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visibleNews.map(item=>(


<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="relative">
    <img
      src={item.image}
      alt="Shoes" 
      className="h-60 w-full"/>

      <p className="absolute top-3 left-2 p-3 badge badge-secondary ">{item.published_date}</p>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
        ))}



      </div>


      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-outline btn-warning"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  )
}

export default LatestNews
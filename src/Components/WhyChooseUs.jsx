import { FaCheckCircle, FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-linear-to-b from-blue-50 to-white px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaStar className="text-blue-600" /> Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Paragraph */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Choosing the right school for your child is one of the most important decisions you will ever make, and at <span className="font-semibold text-blue-600">Bright Future School</span>, we understand the weight of that responsibility. We are not just an educational institution; we are a community dedicated to nurturing young minds and shaping future leaders. Our commitment to academic excellence is reflected in our consistent track record of outstanding results, with a <span className="font-semibold text-blue-600">98% pass rate</span> and numerous students achieving GPA-5 in board examinations year after year. However, we believe that true education goes far beyond textbooks and examinations. That's why we have created a holistic learning environment where every child is encouraged to explore their potential, develop critical thinking skills, and grow into confident, compassionate, and responsible individuals.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            What sets us apart is our unwavering focus on providing a world-class educational experience supported by <span className="font-semibold text-blue-600">state-of-the-art infrastructure</span>. Our campus features over 40 smart classrooms equipped with interactive boards and 4K projectors, fully equipped science laboratories for Physics, Chemistry, and Biology, a computer lab with 40 high-performance computers, and a library housing over 10,000 books along with digital resources. Our students benefit from a comprehensive sports program with a 2-acre playground and indoor facilities for badminton, table tennis, and chess, ensuring their physical and mental well-being. Additionally, we offer dedicated language labs for English and Arabic learning, robotics and AI labs for future-ready skills, and a secure campus with <span className="font-semibold text-blue-600">24/7 CCTV monitoring</span>, biometric access, and fire safety systems.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Our greatest strength lies in our team of over 50 highly qualified and experienced teachers who are passionate about education and deeply committed to student success. They employ innovative teaching methodologies, personalized attention, and continuous assessment to ensure every student reaches their full potential. We also recognize the importance of digital transformation in modern education; hence, we have implemented an <span className="font-semibold text-blue-600">online attendance system</span> that provides real-time notifications to parents, a transparent <span className="font-semibold text-blue-600">online payment system</span> for hassle-free fee management, and a user-friendly mobile app that keeps parents informed about their child's progress, attendance, and school announcements. Our comprehensive co-curricular and cultural programs—including debate competitions, science fairs, art exhibitions, music and dance performances, and educational tours—provide students with ample opportunities to discover and nurture their talents beyond the classroom.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            We are proud of our inclusive and supportive school culture, where every student feels valued, respected, and motivated to excel. Our dedicated counseling team provides career guidance and emotional support, ensuring that students navigate their academic journey with confidence. With a strong emphasis on moral values, social responsibility, and global citizenship, we prepare our students not just for examinations but for life. At <span className="font-semibold text-blue-600">Bright Future School</span>, we invite you to join our family and experience the difference that a truly holistic, values-driven, and future-focused education can make in your child's life. <span className="font-semibold text-blue-600">Choose us</span> because we believe in your child's potential, and we have the expertise, resources, and dedication to help them achieve their dreams.
          </p>

          {/* Key highlights as quick badges */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> 98% Pass Rate
            </span>
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <FaCheckCircle className="text-green-600" /> 50+ Expert Teachers
            </span>
            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> 40+ Smart Classrooms
            </span>
            <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <FaCheckCircle className="text-orange-600" /> 10,000+ Books
            </span>
            <span className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <FaCheckCircle className="text-red-600" /> 24/7 Secure Campus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
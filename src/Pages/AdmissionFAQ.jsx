const faq = [
  {
    question: "What documents are required for admission?",
    answer:
      "You need: two passport-sized photos of the applicant, one each of parents, previous school report card (except Play Group/Nursery), transfer letter, child’s birth certificate (and passport if available), NID/passport of both parents, three stamp-size photos for escort card holders, and medical documents (if any medical issues exist). These help verify identity, age, academic history, and ensure safety. Missing any may delay admission processing.",
  },
  {
    question: "Why do you need my child’s birth certificate?",
    answer:
      "The birth certificate establishes your child’s legal identity and date of birth. Schools use it to verify age eligibility for specific grades, ensuring developmental readiness. It also helps prevent fraud, maintains accurate educational records, and supports government reporting for funding. Without it, we cannot confirm your child meets the minimum age requirement for admission to our school.",
  },
  {
    question: "Why are parents’ NID or passport copies required?",
    answer:
      "We need parent identification to verify legal parentage or guardianship, especially in custody or separated family situations. It ensures only authorized individuals can make decisions regarding the child’s education, access records, or pick them up during emergencies. It also strengthens school security by matching faces to names during parent-teacher meetings or events. Your privacy is protected under school data policies.",
  },
  {
    question: "What is an escort card and why do I need three photos?",
    answer:
      "An escort card authorizes specific adults (parents, grandparents, driver) to pick up your child after school. Three stamp-size photos are used for three different escort card holders. This prevents unauthorized access, streamlines dismissal, and ensures child safety. In emergencies like lockdowns, staff can quickly match child to guardian. It also creates accountability records of who collected the child each day.",
  },
  {
    question: "My child has a medical condition. What should I submit?",
    answer:
      "Please provide a detailed medical report, diagnosis certificate, and doctor’s recommendations. This helps our school nurse, teachers, and support staff understand allergies, medications, physical limitations, or special needs. We can then arrange accommodations (e.g., modified PE activities, emergency action plans, or counseling services). Without this information, we may not respond appropriately during a medical emergency, risking your child’s health.",
  },
  {
    question: "Do I need a transfer letter even for nursery?",
    answer:
      "No. Transfer letters are only required for students who have attended a previous school (KG and above). For Play Group and Nursery applicants, you only need the birth certificate and immunization records. The transfer letter confirms academic standing, behavioral history, and promotion status so we can place your child in the correct grade. Without it, we cannot verify prior learning continuity.",
  },
  {
    question: "How recent should the passport-sized photos be?",
    answer:
      "Photos should be taken within the last six months. They must clearly show the face without hats or sunglasses (except for religious reasons). Recent photos ensure accurate identification during emergencies, parent events, and daily attendance. Old photos where children look very different cause confusion and security risks. For escort cards, use stamp-size photos matching the current appearance of the authorized adult.",
  },
  {
    question: "Can I submit digital copies instead of physical photos?",
    answer:
      "Yes, many schools accept digital high-resolution photos (JPEG/PNG) during online admission. However, physical stamp-size photos are still needed for escort cards and ID cards because they are laminated and used daily at pickup gates. Check with our admission office. If digital-only, we may print them for you (additional fee applies). Always keep backups for future school years.",
  },
  {
    question: "Why do you need my child’s previous school report card?",
    answer:
      "The report card shows grades, attendance, promotions, teacher remarks, and behavior patterns. This helps us assess academic strengths and weaknesses, decide grade placement, identify learning gaps, and plan extra support if needed. For transfer students, it also confirms they left the previous school in good standing. Without it, we cannot guarantee appropriate class level for your child’s ability.",
  },
  {
    question: "What medical documents are considered acceptable?",
    answer:
      "Acceptable documents include: pediatrician’s health certificate, vaccination record (EPI schedule), allergy action plan, asthma management plan, epilepsy diagnosis report, or any specialist’s letter. For mental health concerns, a psychologist’s evaluation helps us provide counseling. All documents must be dated within one year. They are kept confidential in the school clinic and shared only with relevant staff for health and safety purposes.",
  },
  {
    question: "How many escort cards can I get?",
    answer:
      "Each family receives up to three escort cards per child – usually for parents and one emergency contact (grandparent, driver, or nanny). Each card requires one stamp-size photo of the authorized adult. All three cards are active simultaneously. If you need more than three, please submit a written request explaining the need. Lost cards must be reported immediately and a new set issued with fresh photos (fee applies).",
  },
  {
    question: "What if parents are divorced or live separately?",
    answer:
      "We require NID/passport of both biological parents unless a court order restricts one parent’s access. The order must be submitted along with admission forms. Both parents can still receive separate escort cards unless prohibited. For emergency contacts, we prioritize the custodial parent but will note legal arrangements in our system. This ensures we follow custody agreements and avoid releasing the child to an unauthorized person.",
  },
];

const AdmissionFAQ = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-10 max-w-7xl mx-auto">
        <div className="col-span-4 flex justify-center items-center ">
          <img
            src="https://ois.edu.bd/wp-content/uploads/2024/02/Admission-FAQ.webp"
            alt=""
          />
        </div>

        <div className="space-y-5 flex justify-center flex-col col-span-8 px-10">
          <h1 className="text-4xl font-bold mb-10">Admission FAQ</h1>

          <div>
            {faq.map((faq) => (
              <details className="collapse bg-base-100 border-base-300 border gap-3">
                <summary className="collapse-title text-lg font-semibold bg-blue-800 text-white">
                  {faq.question}
                </summary>
                <div className="collapse-content text-md bg-gray-300 p-5">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFAQ;

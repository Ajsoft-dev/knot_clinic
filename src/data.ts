import { Siren, Baby, Scissors, FlaskConical, ScanLine, HeartHandshake, Syringe, Brain, Activity, Stethoscope, type LucideIcon } from 'lucide-react'
export type Service = { slug: string; title: string; text: string; icon: LucideIcon }

export const services: Service[] = [
  { slug: 'gynaecology-obstetrics', title: 'Gynaecology and Obstetrics', icon: Baby, text: 'Providing women’s healthcare, pregnancy-related services, maternity support, and reproductive health care.' },
  { slug: 'general-surgery', title: 'General Surgery', icon: Scissors, text: 'Providing surgical assessment and management for appropriate medical conditions.' },
  { slug: 'emergency', title: 'Emergency Services', icon: Siren, text: 'Providing emergency medical attention and urgent healthcare support, with services available 24 hours a day.' },
  { slug: 'pediatric-care', title: 'Pediatric Care', icon: Stethoscope, text: 'Supporting children’s health through routine check-ups, immunization, and appropriate management of childhood illnesses.' },
  { slug: 'laboratory', title: 'Laboratory Services', icon: FlaskConical, text: 'Providing diagnostic laboratory testing and screening to support clinical assessment and treatment planning.' },
  { slug: 'scanning-diagnostics', title: 'Scanning and Diagnostics', icon: ScanLine, text: 'Offering scanning and diagnostic services to support patient evaluation and medical decision-making.' },
  { slug: 'family-planning', title: 'Family Planning', icon: HeartHandshake, text: 'Providing family planning information, counselling, and relevant reproductive health services.' },
  { slug: 'immunization', title: 'Immunization', icon: Syringe, text: 'Supporting preventive healthcare through immunization services.' },
  { slug: 'stroke-management', title: 'Stroke Management', icon: Brain, text: 'Providing medical assessment and management services for stroke patients.' },
  { slug: 'physio-chiropractic', title: 'Physiotherapy and Chiropractic Services', icon: Activity, text: 'Supporting rehabilitation and appropriate musculoskeletal care.' },
]
export const faqs = [
  ['When was KNOT CLINIC AND MATERNITY established?', 'KNOT CLINIC AND MATERNITY has been proudly serving the community since 2019.'],
  ['Where is the clinic located?', 'We are located at 90 Ajuwon-Akute Road, White House Bus Stop, Ajuwon, Ogun State, Nigeria. We operate on an integrated healthcare model that brings multiple specialties together to provide comprehensive medical care.'],
  ['What is the core focus of KNOT CLINIC AND MATERNITY?', 'While we offer comprehensive medical services, our core focus is on Gynaecology and Obstetrics, ensuring exceptional care for women’s health and maternity journeys.'],
  ['What specific medical services does the clinic offer?', 'Gynaecology and Obstetrics, General Surgery, Emergency Services, Pediatric Care, and Physiological and Laboratory Services. Additional services include scanning, family planning, immunization, stroke management, and physiotherapy and chiropractic services.'],
  ['Can I get full maternity and delivery care at your clinic?', 'Yes. Our Gynaecology and Obstetrics department provides complete care, from antenatal check-ups and safe delivery to postnatal support.'],
  ['Do you have a surgeon on staff for non-maternity-related issues?', 'Absolutely. We have a dedicated team for General Surgery to handle various surgical needs outside of obstetrics.'],
  ['Is there a doctor available for my children?', 'Yes. We offer comprehensive Pediatric Care, covering routine check-ups, immunizations, and treatment for childhood illnesses.'],
  ['Are your Emergency Services available 24 hours a day?', 'Yes. Our Emergency Service is available 24 hours a day, 7 days a week, to provide urgent medical assistance.'],
  ['How do I get laboratory tests done at the clinic?', 'Our in-house Laboratory Service supports our different medical departments. Necessary diagnostic tests and screenings can be performed at the clinic to support timely assessment and treatment planning. The availability and turnaround time of individual tests may vary.'],
  ['How can I schedule an appointment?', 'Call our main telephone number, contact us through WhatsApp, or visit the clinic’s reception. You can also submit an appointment enquiry through our website. We recommend booking in advance for non-emergency services.'],
]

export type Article = { slug: string; category: string; title: string; excerpt: string; body: string[]; reviewed: boolean }
export const articles: Article[] = [
  { slug: 'regular-health-check-ups', category: 'Check-ups', reviewed: true, title: 'Understanding the Importance of Regular Health Check-ups',
    excerpt: 'Routine visits can help spot concerns early and give you a chance to ask questions about your health.',
    body: ['A health check-up is a planned visit where a healthcare professional reviews how you are doing, even when you feel well. It is different from visiting only when something is wrong.', 'Regular check-ups can help find some conditions early, when they are often easier to manage. They are also a good time to ask about vaccines, family history, lifestyle questions, and anything that worries you.', 'How often you should go depends on your age, your health, and your circumstances. A healthcare professional can advise you on what is right for you.', 'Come with a short list of questions and a note of any medicines you take. If you feel unwell between visits, do not wait for your next check-up.'] },
  { slug: 'antenatal-care', category: 'Maternity', reviewed: true, title: 'What to Know About Antenatal Care',
    excerpt: 'Antenatal care is the support a woman receives during pregnancy, from her first visit until delivery.',
    body: ['Antenatal care means regular visits with a healthcare professional during pregnancy. These visits are meant to support the health of the mother and the baby.', 'Visits commonly include check-ins about how you feel, routine checks, and time to ask questions. Your care team will explain which checks or tests apply to you.', 'Starting early and keeping to your scheduled visits helps your care team follow your pregnancy. Every pregnancy is different, so your plan may differ from someone else’s.', 'Contact your healthcare provider or go to the clinic promptly if you are worried about your pregnancy. Do not wait for your next appointment if something feels wrong.'] },
  { slug: 'why-immunization-matters', category: 'Prevention', reviewed: true, title: 'Why Immunization Matters',
    excerpt: 'Vaccines help protect children and adults from serious illnesses, and they support the wider community.',
    body: ['Immunization helps the body prepare to fight certain serious infections before a person is exposed to them.', 'Vaccines are most often associated with childhood, but some are also recommended for adults and for women during pregnancy. A healthcare professional can explain which apply to you or your child.', 'When many people in a community are vaccinated, it also helps protect those who cannot be, such as very young babies.', 'Keep your child’s vaccination record safe and bring it to each visit. If a vaccine appointment was missed, ask the clinic how to catch up.'] },
  { slug: 'understanding-family-planning', category: 'Family health', reviewed: true, title: 'Understanding Family Planning',
    excerpt: 'Family planning helps individuals and couples make informed choices about if and when to have children.',
    body: ['Family planning is about being able to decide whether and when to have children, and how far apart. It is a health topic for women and men.', 'There are different methods, and no single method suits everyone. Which one is right depends on your health, your circumstances, and your personal and family wishes.', 'Counselling with a healthcare professional can help you understand your options, including how each works and what to expect.', 'You are welcome to ask questions in confidence and to take time to decide.'] },
  { slug: 'emergency-medical-attention', category: 'Emergency', reviewed: true, title: 'Recognizing the Importance of Emergency Medical Attention',
    excerpt: 'Some symptoms need urgent care. Knowing when not to wait can make a real difference.',
    body: ['An emergency is a sudden health problem that needs urgent attention. Delays can make some conditions harder to treat.', 'Examples that usually need urgent care include difficulty breathing, severe bleeding, sudden weakness or trouble speaking, loss of consciousness, serious injury, and serious problems in pregnancy. This is not a complete list.', 'If you think someone needs urgent help, call the clinic or go there straight away. Do not wait for an online form reply.', `KNOT CLINIC AND MATERNITY is open 24 hours. Call 08034141587 or 09020247790.`] },
]

/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import faq from "../../assets/faq.json";

const Faq = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl text-center font-bold text-accent">FAQ</h2>
      <div className="flex flex-col  lg:flex-row justify-around items-center">
        <div className="w-96"><Lottie animationData={faq}></Lottie></div>
        <div className="lg:w-1/2 my-5">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Q1: What is a summer photography camp?
            </div>
            <div className="collapse-content">
              <p>
                A1: A summer photography camp is a program designed to provide
                participants, typically children or teenagers, with an immersive
                learning experience in the field of photography. It offers a
                structured curriculum, hands-on activities, and expert guidance
                to help students improve their photography skills and explore
                their creativity.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q2: What age group is the summer photography camp suitable for?
            </div>
            <div className="collapse-content">
              <p>
                A2: The summer photography camp is usually tailored for children
                and teenagers between the ages of 10 and 18. However, the
                specific age range may vary depending on the camp provider. It's
                best to check with the camp organizer for the exact age
                requirements.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q3: What will participants learn at a summer photography camp?
            </div>
            <div className="collapse-content">
              <p>
                A3: Participants will learn various aspects of photography,
                including camera settings, composition techniques, lighting,
                editing, and storytelling through images. They will also gain
                practical experience through photo shoots, explore different
                genres of photography, and receive feedback and guidance from
                professional photographers.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q4: Do participants need to have prior photography experience to
              join the camp?
            </div>
            <div className="collapse-content">
              <p>
                A4: No prior photography experience is typically required.
                Summer photography camps are designed to accommodate both
                beginners and those with some photography knowledge. The camp
                curriculum is structured to cater to different skill levels,
                allowing participants to learn and progress at their own pace.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Q5: What equipment do participants need to bring to the camp?
            </div>
            <div className="collapse-content">
              <p>
                A5: Camp organizers usually provide a list of recommended
                equipment. At a minimum, participants will need a digital camera
                (DSLR or mirrorless) or a high-quality smartphone with manual
                controls. Other suggested items may include extra batteries,
                memory cards, a tripod, and a laptop for editing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
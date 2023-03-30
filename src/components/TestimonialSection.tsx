import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h2
            id="testimonials"
            className="mb-32 mr-auto font-secondary text-5xl font-semibold text-gray-700"
          >
            Testimonials from people who{" "}
            <span className="magic-text">love us</span>
          </h2>
          <div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              <TestimonialCard
                comment={
                  "NoteHaven has completely revolutionized my way of learning. I'd be losing marks without this app!"
                }
                author={{
                  name: "Aditya Kumar",
                  title: "Student at IIIT Delhi",
                  image: "generic-man-1.png",
                }}
              />
              <TestimonialCard
                comment={
                  "I was struggling to pass in my physics courses at uni but this app has helped me get a 9.0 GPA! I will keep using it all my life."
                }
                author={{
                  name: "Andrew Smith",
                  title: "Student at Caltech",
                  image: "generic-man-3.png",
                }}
              />
              <TestimonialCard
                comment={
                  "I love this app. I can't live without it. I've used it daily for the past 2 months and I've already seen significant improvements in my course grades. Thank you NoteHaven!"
                }
                author={{
                  name: "Arron Jefferson",
                  title: "Student at NYU",
                  image: "generic-man-2.png",
                }}
              />
              <TestimonialCard
                comment={
                  "I don't go to college anymore but I always love learning from the notes of the very best. This website is perfect for that."
                }
                author={{
                  name: "Peter Schmitt",
                  title: "Sr. Physcist at NASA",
                  image: "generic-old-man-1.png",
                }}
              />
              <TestimonialCard
                comment={
                  "Want good marks? Use this website. Want to learn more? Again, use this website."
                }
                author={{
                  name: "Lydia O'Connell",
                  title: "Teaching Assistant at MIT",
                  image: "generic-woman-1.png",
                }}
              />
              <TestimonialCard
                comment={
                  "I know this is a bit of a cliche but this website has really changed my life. I'm so grateful for the team behind it."
                }
                author={{
                  name: "Sahil Gupta",
                  title: "Student at MSIT",
                  image: "generic-man-4.png",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;

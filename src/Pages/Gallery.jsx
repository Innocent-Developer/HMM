import React from "react";

export const Gallery = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Gallery
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Take a glimpse into the luxurious world of  THE SEA.Explore the elegance and comfort of our beautifully designed accommodations.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2"  data-aos="zoom-in-right" data-aos-duration="1000">
                <img 
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://themewagon.github.io/keto/images/blog1.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2"  data-aos="zoom-in-right" data-aos-duration="1000">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://themewagon.github.io/keto/images/blog2.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-full"  data-aos="zoom-in-right" data-aos-duration="1000">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://themewagon.github.io/keto/images/blog3.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full"  data-aos="zoom-in-right" data-aos-duration="1000">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://themewagon.github.io/keto/images/room1.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2"  data-aos="zoom-in-right" data-aos-duration="1000">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://themewagon.github.io/keto/images/room2.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2"  data-aos="zoom-in-right" data-aos-duration="1000">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://themewagon.github.io/keto/images/room4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

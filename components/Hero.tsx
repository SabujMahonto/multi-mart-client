import Image from "next/image";

export const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5">
      <div className="w-full h-full flex items-start">
        <Image
          src="https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman in Black and Brown Long Sleeve Shirt Raising Her Hands"
          width={300}
          height={700}
          priority
          className="w-full h-5/6 object-cover"
        />
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full flex items-center">
        <Image
          src="https://images.pexels.com/photos/3925875/pexels-photo-3925875.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Yellow Instant Camera on Top of Ripped Paper Pages"
          width={300}
          height={700}
          priority
          className="w-full h-5/6 object-cover"
        />
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full flex items-end">
        <Image
          src="https://images.pexels.com/photos/8185815/pexels-photo-8185815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman with her Eyes Closed holding Buckwheat Flowers
          "
          width={300}
          height={700}
          priority
          className="w-full h-5/6 object-cover"
        />
      </div>
    </section>
  );
};

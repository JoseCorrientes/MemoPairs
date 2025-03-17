import { Link } from "react-router-dom";

const About = () => {
  const textChain1 = "Name:  ";
  const textChain1a = "José Ernesto García";
  const textChain2 = "Country:   ";
  const textChain2a = "Argentina";
  const textChain3 = "City:";
  const textChain3a = "Argentina";
  const textChain4 = "Phone:";
  const textChain4a = "(+54) 9 379 599549";
  const textChain5 = "Email:";
  const textChain5a = "josernestogarcia609@gmail.com";
  const textChain6 = "Portfolio:";
  const textChain6a = "https://pro-portfolio-mobile.vercel.app/";
  const textChain8 = "Acknowledgment: ";
  const textChain9 = "Sound: ";
  const textChain9a = "Sound Effect by freeSound_community Pixabay";
  const textChain10 = "Graphic Cards: ";
  const textChain10a = "Caras Vectores por Vecteezy";

  return (
    <div>
      <div className="flex w-[700px] text-center flex-col p-8 border-2 border-blue-200 bg-blue-300 shadow-lg shadow-zinc-800">
        <h1 className="text-center text-black text-2xl font-mono mb-5">
          CONTACT ME!
        </h1>
        <div className="text-black w-full flex flex-col justify-start items-start">
          <p className="text-xl">
            {textChain1}
            <span className="text-white ml-2">{textChain1a}</span>
          </p>
          <p className="text-xl">
            {textChain2}
            <span className="text-white ml-2">{textChain2a}</span>
          </p>

          <p className="text-xl">
            {textChain3}
            <span className="text-white ml-2">{textChain3a}</span>
          </p>
          <p className="text-xl">
            {textChain4}
            <span className="text-white ml-2">{textChain4a}</span>
          </p>
          <p className="text-xl">
            {textChain5}
            <span className="text-white ml-2">{textChain5a}</span>
          </p>
          <p className="text-xl">
            {textChain6}
            <span className="text-white ml-2">{textChain6a}</span>
          </p>
          <p className="text-xl mt-5">{textChain8}</p>
          <a
            className="text-xl"
            href='https://pixabay.com/es/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=91468">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=91468'
            target="_blank"
          >
            {textChain9}
            <span className="text-white ml-2">{textChain9a}</span>
          </a>
          <a
            className="text-xl"
            href="https://es.vecteezy.com/vectores-gratis/caras"
            target="_blank"
          >
            {textChain10}
            <span className="text-white ml-2">{textChain10a}</span>
          </a>
        </div>

        <Link
          className="text-center p-4 mt-10 mb-2 w-full border-2 border-blue-400  text-white bg-blue-400 rounded-lg hover:bg-blue-700 hover:border-blue-700"
          to="/"
        >
          CONTINUE
        </Link>
      </div>
    </div>
  );
};

export default About;

import { FcHome, FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
// import HeaderTitle from "../Components/Shared/HeaderTitle";
import Button from "../Components/Shared/Button";
import HeaderTitle from "../Components/Shared/HeaderTitle";

const ContactUs = () => {
  return (
    <div>
      <HeaderTitle title="Visit Us!" />
      <div className="hero md:min-h-screen ">
        <div className="hero-content pt-0 flex flex-col lg:flex-row  lg:gap-40">
          <div>
            <form>
              <div>
                <p className=" card-body pt-0 pb-2 text-2xl font-bold underline ">
                  Message Us :
                </p>
              </div>
              <div>
                <div className="card-body pb-2 flex-col md:flex-row gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter Your Name.."
                      className="input input-bordered  "
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter your email.."
                      className="input input-bordered "
                      required
                    />
                  </div>
                </div>
                <div className="card-body pt-2 pb-0">
                  <div className="form-control w-full">
                    <input
                      type="text"
                      placeholder="Enter Subject.."
                      className="input input-bordered "
                      required
                    />
                  </div>
                </div>
                <div className="card-body pt-4 gap-4">
                  <div className="form-control w-full">
                    <textarea
                      placeholder="Message.."
                      required
                      className="textarea textarea-bordered textarea-lg w-full max-w-lg "
                    ></textarea>
                  </div>
                  <div
                    onClick={() =>
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Your Message Sent Successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                      })
                    }
                    className="form-control"
                  >
                    <Button btn="Send!" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-bold underline">Office Address :</h1>
            </div>
            <div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcHome className="text-3xl"></FcHome>
                </span>
                <div>
                  <p className="text-xl">Dhaka, Bangladesh.</p>
                  <p className="">Satarkul, Badda, Dhaka-2941</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcPhone className="text-3xl"></FcPhone>
                </span>
                <div>
                  <p className="text-xl">+880 178 554 8761</p>
                  <p className="">Mon to Fri 11am to 6pm</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <MdEmail className="text-3xl text-red-500"></MdEmail>
                </span>
                <div>
                  <p className="text-xl ">support@vibe-It.com</p>
                  <p className="">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

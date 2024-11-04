import { Helmet } from "react-helmet-async";

const ContactNow = () => {
    return (
        <div className="max-w-[70%] mx-auto">
            <Helmet>
        <title>Contact Now | Gadget Heaven</title>
      </Helmet>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-32 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-green-600">Contact Now</h1>
                        <p className="py-6 font-semibold text-gray-500 ">
                            If You have any objection , If you have any objection regarding our website then  help us with your mobile number and email address And Contact Our Team .
                        </p>
                        <ul className="">
                            <li className="mt-3"> -  Contact Now for More Details</li>
                            <li className="mt-3"> -  Contact Now to Start Your Project</li>
                            <li className="mt-3"> -  Contact Now - Let's Connect!</li>
                            <li className="mt-3"> -  Contact Now for Free Consultation</li>
                        </ul>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-[#9538E2] text-2xl mb-3" >Please Contact Now !!</span>
                                </label>
                                <input type="email" placeholder="email or number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-[#9538E2]">Objection :</span>
                                </label>
                                <textarea className="border h-[100px] rounded-xl" name="" id=""></textarea>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#9538E2]">Write a Objection .</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#9538E2] text-white" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactNow;
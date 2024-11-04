
const Banner = () => {
    return (
        <div className='relative mt-[20px]'>
            <div className='w-[98%]  mx-auto bg-[#9538E2] rounded-2xl pt-24'>
                <h1 className='text-white text-center text-[56px] font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='text-white text-center my-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to  <br />the coolest accessories, we have it all!</p>
                <div className='flex justify-center items-center '>
                    <button className='bg-white px-[30px] py-[15px] text-[#9538E2] rounded-full text-xl font-bold mb-[250px]'>Shop Now</button>
                </div>
            </div>
            <div className='flex justify-center relative -mt-[220px] rounded-3xl'>
                 <div className='h-full border rounded-2xl p-4'>
                    <img className='md:h-[563px] md:w-[1062px]  rounded-2xl' src="https://i.ibb.co.com/f2PXXTT/Rectangle-1.png" alt="" />

                 </div>
            </div>
        </div>
    );
};

export default Banner;
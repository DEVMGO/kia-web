import Link from 'next/link';
import { NextSeo } from "next-seo";

const ErrorPage = () => {
    return (
        <>
            <NextSeo title="صفحه مورد نظر یافت نشد!" />
            {/* <section id="error_404"> */}
                <div className="w-full h-[60vh] flex items-center justify-center flex-col">
                    <h2 className='text-xl text-white'>
                        صفحه مورد نظر یافت نشد!
                    </h2>
                    <Link href="/" className='text-gray-200 text-lg btn mt-20 border border-gray-200 rounded-lg py-2 px-10'>
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            {/* </section> */}
        </>
    )
};

ErrorPage.layout="L1";
export default ErrorPage;
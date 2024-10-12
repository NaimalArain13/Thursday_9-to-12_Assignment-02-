import Image from "next/image"
export default function Download(){
    return(
        <div className="bg-gray-100 grid grid-cols md:grid-cols-2 justify-center items-center gap-x-9 p-3 mx-auto max-w-6xl pt-10">
            <div>
                <Image src={"https://www.swiftsales.io/assets/images/swift-phone.webp"} alt="" width={400} height={400} className="w-full items-center"/>
            </div>
            <div className="text-left space-y-5">
                <h1 className="font-bold text-2xl md:text-3xl">BE THERE <br />
                WHERE YOUR CUSTOMERS ARE</h1>
                <p className="text-lg ">Our mobile application keeps your customer support at your fingertips. Download the SwiftChat app and take your customer support with you wherever you want.</p>
            <div className="flex flex-col md:flex-row space-y-4 items-center md:space-x-4 md:space-y-0 pt-8">
                <Image src={"https://www.swiftsales.io/assets/images/app-store.png"} alt="" width={177} height={53}/>
                <Image src={"https://www.swiftsales.io/assets/images/google-play.png"} alt="" width={177} height={53}/>
            </div>
            </div>

        </div>
    )
}
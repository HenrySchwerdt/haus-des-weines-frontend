import { Producer, Wine } from "payload-types";

export function WineMenuItem({ title, harvest, description, taste, producer, price, priceBottle }: Wine) {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full p-4 text-center md:text-left items-center">
            <div className="flex flex-col max-w-full md:w-[600px] lg:w-[700px] mb-4 md:mb-0">
                <h2 className="font-vollkorn font-bold text-xl">{title}</h2>
                <p className="font-jost text-lg  text-rouge">{(producer as Producer).name} | {harvest} | {taste}</p>
                <p className="font-jost text-md pr-2">{description}</p>
                <p className="font-jost md:hidden text-md mt-4">0,2l € {price}  0,75l € {priceBottle}</p>
            </div>
            <div className="md:flex flex-row hidden gap-6 font-jost justify-between md:justify-start md:w-[120px]">
                <div className="flex flex-col gap-1">
                    <p>0,2l</p>
                    <p>0,75l</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p>€ {price}</p>
                    <p>€ {priceBottle}</p>
                </div>
            </div>
        </div>
    );
}

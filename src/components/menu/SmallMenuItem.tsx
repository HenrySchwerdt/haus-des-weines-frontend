import { NormalItem, Producer, Wine } from "payload-types";

export function SmallMenuItem({ title, description, price }: NormalItem) {
    return (
        <div className="flex flex-row justify-between w-full p-4 text-center md:text-left items-center">
            <div className="flex flex-row gap-2">
                <h2 className="font-vollkorn font-bold text-xl">{title}</h2>
                <p className="font-jost text-lg  text-rouge">{description}</p>
            </div>
            <div className="font-jost">
                € {price?.map(price => price.value).join(" / ")}
            </div>
        </div>
    );
}
